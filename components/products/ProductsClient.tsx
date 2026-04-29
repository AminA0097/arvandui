'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import { useFilterState } from '@/hooks/useFilterState';
import { Filters } from '@/types/product';
import SearchToolbar from './SearchToolbar';
import SidebarFilters from './SidebarFilters';
import MobileFilterSheet from './MobileFilterSheet';
import ActiveFilterChips from './ActiveFilterChips';
import ProductGrid from './ProductGrid';

export default function ProductsClient() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initialFilters = useMemo<Filters>(() => ({
        query: searchParams.get('q') || '',
        categories: (searchParams.get('categories')?.split(',') as any) || [],
        sort: (searchParams.get('sort') as any) || 'newest',
        stock: (searchParams.get('stock') as any) || 'all',
        minPrice: Number(searchParams.get('minPrice') || 0),
        maxPrice: Number(searchParams.get('maxPrice') || 50_000_000),
    }), [searchParams]);

    const { filters, updateFilter, resetFilters } = useFilterState(initialFilters);
    const { products, loading, loadingMore, loadMore, total, hasMore } = useProducts(filters);
    const skipUrlSync = useRef(false);
    const firstRender = useRef(true);

    const clearFilters = useCallback(() => {
        skipUrlSync.current = true;
        resetFilters();
    }, [resetFilters]);

    // همگام‌سازی URL با فیلترها (بدون درخواست اضافی)
    useEffect(() => {
        if (skipUrlSync.current) {
            skipUrlSync.current = false;
            return;
        }
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        const params = new URLSearchParams();
        if (filters.query) params.set('q', filters.query);
        if (filters.categories.length) params.set('categories', filters.categories.join(','));
        if (filters.sort !== 'newest') params.set('sort', filters.sort);
        if (filters.stock !== 'all') params.set('stock', filters.stock);
        if (filters.minPrice > 0) params.set('minPrice', String(filters.minPrice));
        if (filters.maxPrice < 50_000_000) params.set('maxPrice', String(filters.maxPrice));
        router.replace(`/products?${params.toString()}`, { scroll: false });
    }, [filters, router]);

    return (
        <div dir="rtl" className="max-w-7xl mx-auto px-4 md:px-6 py-4">
            <SearchToolbar query={filters.query} onChange={(v) => updateFilter('query', v)} />
            <ActiveFilterChips filters={filters} onUpdate={updateFilter} onClearAll={clearFilters} />
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 mt-6">
                <aside className="hidden md:block sticky top-24 self-start">
                    <SidebarFilters filters={filters} onUpdate={updateFilter} onClear={clearFilters} />
                </aside>
                <main>
                    <ProductGrid
                        products={products}
                        loading={loading}
                        loadingMore={loadingMore}
                        loadMore={loadMore}
                        hasMore={hasMore}
                        total={total}
                    />
                </main>
            </div>
            <MobileFilterSheet filters={filters} onUpdate={updateFilter} onClear={clearFilters} />
        </div>
    );
}