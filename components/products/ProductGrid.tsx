'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import ProductGridSkeleton from './ProductSkeleton';
import { toPersianNumbers } from '@/lib/utils';

interface Props {
    products: Product[];
    loading: boolean;
    loadingMore: boolean;
    loadMore: () => void;
    hasMore: boolean;
    total: number;
}

export default function ProductGrid({ products, loading, loadingMore, loadMore, hasMore, total }: Props) {
    const observerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (!hasMore || loadingMore || loading) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) loadMore();
            },
            { threshold: 0.1, rootMargin: '100px' }
        );
        const current = observerRef.current;
        if (current) observer.observe(current);
        return () => {
            if (current) observer.unobserve(current);
        };
    }, [hasMore, loadingMore, loading, loadMore]);

    if (loading) return <ProductGridSkeleton />;
    if (!loading && products.length === 0) {
        return (
            <div className="text-center py-20 text-stone-500 bg-stone-50 rounded-2xl">
                هیچ محصولی با این فیلترها یافت نشد.
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-5 text-sm text-stone-500">
                <span>{toPersianNumbers(total)} محصول</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>
            <div ref={observerRef} className="py-10 flex justify-center">
                {loadingMore && (
                    <div className="flex items-center gap-2 text-stone-500 text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                        <Loader2 size={16} className="animate-spin" />
                        در حال بارگذاری بیشتر...
                    </div>
                )}
            </div>
            {!hasMore && products.length > 0 && (
                <div className="text-center text-xs text-stone-400 py-6 border-t mt-4 pt-6">
                    به انتهای لیست رسیدید
                </div>
            )}
        </div>
    );
}