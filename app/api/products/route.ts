import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { Product } from '@/types/product';
import { products as localProducts } from '@/lib/db'; // fallback

const MASTER_KEY = 'products:master';

async function getMasterProducts(): Promise<Product[]> {
    try {
        const data = await redis.get(MASTER_KEY);
        console.log(data)
        if (data) {
            try {
                const parsed = JSON.parse(data);
                // Accept both array and { items: [...] } structures
                const productsArray = Array.isArray(parsed) ? parsed : parsed?.items ?? [];
                if (productsArray.length > 0) {
                    return productsArray;
                }
                console.warn('⚠️ Redis data has empty products, falling back to local db');
            } catch (parseErr) {
                console.error('❌ Invalid JSON in Redis for key:', MASTER_KEY, parseErr);
                // Optionally delete the corrupted key to avoid repeated errors
                await redis.del(MASTER_KEY);
            }
        }
    } catch (redisErr) {
        console.error('❌ Redis connection error:', redisErr);
    }

    // Fallback to local db.ts
    console.log('📦 Using local db.ts as product source');
    return localProducts;
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
            maxPrice = Infinity,
            tags = [],
            cursor = null,
            limit = 12,
        } = body;

        let products = await getMasterProducts();

        // 1. Search
        if (query) {
            const q = query.toLowerCase();
            products = products.filter(
                (p) => p.name.toLowerCase().includes(q) || p.detail.toLowerCase().includes(q)
            );
        }

        // 2. Categories (multi-select)
        if (categories.length > 0) {
            products = products.filter((p) => categories.includes(p.category));
        }

        // 3. Tags
        if (tags.length > 0) {
            products = products.filter((p) => tags.some((tag: string) => p.tags.includes(tag as any)));
        }

        // 4. Stock
        if (stock === 'in_stock') products = products.filter((p) => p.inStock);
        if (stock === 'out_of_stock') products = products.filter((p) => !p.inStock);

        // 5. Price range
        products = products.filter((p) => p.price >= minPrice && p.price <= maxPrice);

        // 6. Sorting
        switch (sort) {
            case 'price_asc':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                products.sort((a, b) => b.views - a.views);
                break;
            case 'bestseller':
                products.sort((a, b) => {
                    if (a.isBestSeller && !b.isBestSeller) return -1;
                    if (!a.isBestSeller && b.isBestSeller) return 1;
                    return (b.rank ?? 0) - (a.rank ?? 0);
                });
                break;
            default: // 'newest'
                products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        // 7. Cursor pagination
        let startIndex = 0;
        if (cursor) {
            const idx = products.findIndex((p) => p.id === cursor);
            startIndex = idx >= 0 ? idx + 1 : 0;
        }
        const sliced = products.slice(startIndex, startIndex + limit);
        const nextCursor = startIndex + limit < products.length ? sliced[sliced.length - 1]?.id : null;

        return NextResponse.json({
            data: sliced,
            nextCursor,
            total: products.length,
        });
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json({ data: [], error: 'Server error' }, { status: 500 });
    }
}