'use client';
import { useEffect, useRef } from 'react';
import { Loader2, Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { toPersianNumbers } from '@/lib/utils';

interface ProductGridProps {
    products: Product[];
    loading: boolean;
    loadingMore: boolean;
    hasMore: boolean;
    loadMore: () => void;
    total: number;
    isEmpty?: boolean;
    onClearFilters?: () => void;
    onLoadMoreStart?: () => void; // new: notify parent when loading more
}

export default function ProductGrid({
                                        products,
                                        loading,
                                        loadingMore,
                                        hasMore,
                                        loadMore,
                                        total,
                                        isEmpty = false,
                                        onClearFilters,
                                        onLoadMoreStart,
                                    }: ProductGridProps) {
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hasMore || loadingMore || loading) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    if (onLoadMoreStart) onLoadMoreStart();
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );
        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [hasMore, loadingMore, loading, loadMore, onLoadMoreStart]);

    if (loading) {
        return (
            <div className="py-20 md:py-32 text-center flex justify-center items-center gap-3">
                <Loader2 className="animate-spin" size={24} />
                <span className="text-stone-500">در حال بارگذاری...</span>
            </div>
        );
    }

    if (isEmpty) {
        return (
            <div className="text-center py-16 md:py-32">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center">
                    <Search size={24} className="text-stone-300" />
                </div>
                <p className="text-stone-500 text-base md:text-lg">محصولی یافت نشد</p>
                {onClearFilters && (
                    <button onClick={onClearFilters} className="mt-6 px-6 py-2 bg-stone-900 text-white rounded-xl text-sm hover:bg-stone-800">
                        حذف فیلترها
                    </button>
                )}
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm text-stone-600">{toPersianNumbers(total)} محصول</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {products.map((product, idx) => (
                    <ProductCard key={product.id} product={product} index={idx} />
                ))}
            </div>

            {hasMore && (
                <div ref={observerRef} className="flex justify-center py-8">
                    {loadingMore && (
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
                            <Loader2 className="animate-spin" size={16} />
                            <span className="text-sm text-stone-500">بارگذاری بیشتر...</span>
                        </div>
                    )}
                </div>
            )}

            {!hasMore && products.length > 0 && (
                <div className="text-center py-8">
                    <p className="text-sm text-stone-400">✨ به انتها رسیدید ✨</p>
                </div>
            )}
        </div>
    );
}