'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRequestLock } from './useRequestLock';
import { useDebounce } from './useDebounce';
import { Filters, Product } from '@/types/product';

interface UseProductsReturn {
    products: Product[];
    loading: boolean;
    loadingMore: boolean;
    loadMore: () => void;
    total: number;
    hasMore: boolean;
}

export function useProducts(filters: Omit<Filters, 'cursor' | 'limit'>): UseProductsReturn {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [cursor, setCursor] = useState<string | null>(null);
    const [total, setTotal] = useState(0);
    const [hasMore, setHasMore] = useState(false);

    const debouncedFilters = useDebounce(filters, 300);
    const { startRequest, isLatest } = useRequestLock();

    const fetchProducts = useCallback(
        async (reset: boolean, currentCursor: string | null) => {
            const requestId = startRequest();
            const isLoadMore = !reset && currentCursor !== null;

            if (isLoadMore) {
                setLoadingMore(true);
            } else {
                setLoading(true);
            }

            try {
                const res = await fetch('/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...debouncedFilters,
                        cursor: currentCursor,
                        limit: 12,
                    }),
                });

                const json = await res.json();
                if (!isLatest(requestId)) return;

                const incoming = json.data ?? [];
                const newTotal = json.total ?? 0;
                const nextCursor = json.nextCursor ?? null;

                setProducts((prev) => (reset ? incoming : [...prev, ...incoming]));
                setTotal(newTotal);
                setCursor(nextCursor);
                setHasMore(!!nextCursor);
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                if (reset || !isLoadMore) setLoading(false);
                if (isLoadMore) setLoadingMore(false);
            }
        },
        [debouncedFilters, startRequest, isLatest]
    );

    // این useEffect فقط یک بار و هر بار که debouncedFilters تغییر کند اجرا می‌شود
    useEffect(() => {
        fetchProducts(true, null);
    }, [fetchProducts]);

    const loadMore = useCallback(() => {
        if (!hasMore || loadingMore || loading) return;
        fetchProducts(false, cursor);
    }, [hasMore, loadingMore, loading, cursor, fetchProducts]);

    return { products, loading, loadingMore, loadMore, total, hasMore };
}