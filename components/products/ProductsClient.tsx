'use client';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import ProductGrid from './ProductGrid';
import ProductFilters from './ProductFilters';
import MobileFilterModal from './MobileFilterModal';
import { Filters, ProductCategory } from '@/types/product';
import { toPersianNumbers } from '@/lib/utils';
import { Search, X } from 'lucide-react';

export default function ProductsClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Parse categories from URL (comma separated)
    const urlCategories = searchParams.get('categories')?.split(',') || [];

    // Initialize filters from URL
    const [filters, setFilters] = useState({
        query: searchParams.get('q') || '',
        categories: urlCategories.filter((c): c is ProductCategory =>
            ['bags', 'boots', 'coats', 'accessories'].includes(c)
        ),
        sort: (searchParams.get('sort') as any) || 'newest',
        stock: (searchParams.get('stock') as any) || 'all',
        minPrice: Number(searchParams.get('minPrice') || 0),
        maxPrice: Number(searchParams.get('maxPrice') || 50000000),
    });

    // Sync URL with filters
    useEffect(() => {
        const params = new URLSearchParams();
        if (filters.query) params.set('q', filters.query);
        if (filters.categories.length > 0) params.set('categories', filters.categories.join(','));
        if (filters.sort !== 'newest') params.set('sort', filters.sort);
        if (filters.stock !== 'all') params.set('stock', filters.stock);
        if (filters.minPrice > 0) params.set('minPrice', String(filters.minPrice));
        if (filters.maxPrice < 50000000) params.set('maxPrice', String(filters.maxPrice));
        router.replace(`/products?${params.toString()}`, { scroll: false });
    }, [filters, router]);

    const { products, loading, loadingMore, loadMore, total, hasMore, refetch } = useProducts(filters);

    const updateFilter = useCallback((key: string, value: any) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
        refetch({ ...filters, [key]: value });
    }, [filters, refetch]);

    const clearFilters = useCallback(() => {
        const resetFilters = {
            query: '',
            categories: [],
            sort: 'newest',
            stock: 'all',
            minPrice: 0,
            maxPrice: 50000000,
        };
        setFilters(resetFilters);
        refetch(resetFilters);
    }, [refetch]);

    // Show toast when loadMore is triggered
    const handleLoadMoreStart = useCallback(() => {
        const currentCount = products.length;
        const newCount = Math.min(currentCount + 12, total);
        if (newCount <= total) {
            setToastMessage(`نمایش ${toPersianNumbers(newCount)} از ${toPersianNumbers(total)} محصول`);
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 3000);
        }
    }, [products.length, total]);

    // Also show toast on initial load (after loading finishes)
    useEffect(() => {
        if (!loading && products.length > 0 && total > 0) {
            setToastMessage(`نمایش ${toPersianNumbers(products.length)} از ${toPersianNumbers(total)} محصول`);
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 3000);
        }
    }, [loading, products.length, total]);

    const priceBounds = { min: 0, max: 50000000 };

    return (
        <div dir="rtl">
            {/* Search bar with Lucide Search icon */}
            <form onSubmit={(e) => { e.preventDefault(); refetch(filters); }} className="mb-6">
                <div className="relative">
                    <input
                        value={filters.query}
                        onChange={(e) => updateFilter('query', e.target.value)}
                        placeholder="جستجوی محصول..."
                        className="w-full pr-4 pl-10 py-3 border rounded-xl bg-white shadow-sm text-right"
                    />
                    <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                        <Search size={18} />
                    </button>
                    {filters.query && (
                        <button
                            type="button"
                            onClick={() => updateFilter('query', '')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
            </form>

            {/* Mobile filter button */}
            <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center justify-between w-full px-4 py-3 bg-white border rounded-xl shadow-sm mb-4"
            >
                <span>فیلترها و مرتب‌سازی</span>
                <span className="w-2 h-2 bg-stone-900 rounded-full" />
            </button>

            {/* Desktop filters */}
            <ProductFilters
                filters={filters}
                priceBounds={priceBounds}
                onUpdate={updateFilter}
                onPriceApply={(min, max) => {
                    updateFilter('minPrice', min);
                    updateFilter('maxPrice', max);
                }}
            />

            {/* Product grid */}
            <ProductGrid
                products={products}
                loading={loading}
                loadingMore={loadingMore}
                hasMore={hasMore}
                loadMore={loadMore}
                total={total}
                isEmpty={!loading && products.length === 0}
                onClearFilters={clearFilters}
                onLoadMoreStart={handleLoadMoreStart}
            />

            {/* Mobile modal */}
            <MobileFilterModal
                isOpen={mobileFiltersOpen}
                onClose={() => setMobileFiltersOpen(false)}
                filters={filters}
                onUpdate={updateFilter}
                onClearAll={clearFilters}
            />

            {/* Toast notification */}
            {toastVisible && (
                <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2 rounded-full shadow-lg text-sm animate-fade-in-out">
                    {toastMessage}
                </div>
            )}
        </div>
    );
}