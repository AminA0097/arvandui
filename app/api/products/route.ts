import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { Product } from '@/types/product';
import { products as localProducts } from '@/lib/db';

const MASTER_KEY = 'products:master';

async function getBaseProducts(): Promise<Product[]> {
    try {
        const cached = await redis.get(MASTER_KEY);
        if (cached) {
            const parsed = JSON.parse(cached);
            const list = Array.isArray(parsed) ? parsed : parsed?.items ?? [];
            if (list.length) return list;
        }
    } catch {
        // fallback to local
    }
    return localProducts;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            query = '',
            categories = [],
            sort = 'newest',
            stock = 'all',
            minPrice = 0,
            maxPrice = Number.MAX_SAFE_INTEGER,
            cursor = null,
            limit = 12,
        } = body;

        let data = await getBaseProducts();

        // جستجو
        if (query) {
            const q = query.toLowerCase();
            data = data.filter(p => p.name.toLowerCase().includes(q));
        }

        // دسته‌بندی
        if (categories.length) {
            const set = new Set(categories);
            data = data.filter(p => set.has(p.category));
        }

        // موجودی
        if (stock === 'in_stock') data = data.filter(p => p.inStock);
        else if (stock === 'out_of_stock') data = data.filter(p => !p.inStock);

        // قیمت
        data = data.filter(p => p.price >= minPrice && p.price <= maxPrice);

        // مرتب‌سازی
        switch (sort) {
            case 'price_asc':
                data.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                data.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                data.sort((a, b) => b.views - a.views);
                break;
            case 'bestseller':
                data.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
                break;
            default: // newest
                data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        // پیاده‌سازی cursor-based pagination با index (برای سادگی)
        let startIndex = 0;
        if (cursor) {
            const foundIndex = data.findIndex(p => p.id === cursor);
            if (foundIndex !== -1) startIndex = foundIndex + 1;
        }
        const paginated = data.slice(startIndex, startIndex + limit);
        const nextCursor = startIndex + limit < data.length ? paginated[paginated.length - 1]?.id : null;

        await sleep(80); // تجربه کاربری نرم‌تر

        return NextResponse.json({
            data: paginated,
            total: data.length,
            nextCursor,
        });
    } catch (err: any) {
        return NextResponse.json(
            {
                data: [],
                total: 0,
                nextCursor: null,
                error: err.message,
            },
            { status: 500 }
        );
    }
}