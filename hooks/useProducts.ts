'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Filters, Product } from '@/types/product';

interface UseProductsReturn {
    products: Product[];
    loading: boolean;
    loadingMore: boolean;
    loadMore: () => void;
    total: number;
    hasMore: boolean;
    refetch: (newFilters: Partial<Omit<Filters, 'cursor' | 'limit'>>) => void;
}

export function useProducts(initialFilters: Omit<Filters, 'cursor' | 'limit'>): UseProductsReturn {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [cursor, setCursor] = useState<string | null>(null);
    const [total, setTotal] = useState(0);
    const filtersRef = useRef(initialFilters);

    const fetchProducts = useCallback(async (reset: boolean, currentCursor: string | null) => {
        const body = {
            ...filtersRef.current,
            cursor: reset ? null : currentCursor,
            limit: 12,
        };
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const json = await res.json();
        const newProducts = json.data ?? [];
        setCursor(json.nextCursor ?? null);
        setTotal(json.total ?? 0);
        setProducts((prev) => (reset ? newProducts : [...prev, ...newProducts]));
    }, []);

    const loadMore = useCallback(async () => {
        if (!cursor || loadingMore) return;
        setLoadingMore(true);
        await fetchProducts(false, cursor);
        setLoadingMore(false);
    }, [cursor, loadingMore, fetchProducts]);

    const refetch = useCallback((newFilters: Partial<Omit<Filters, 'cursor' | 'limit'>>) => {
        filtersRef.current = { ...filtersRef.current, ...newFilters };
        setLoading(true);
        setProducts([]);
        fetchProducts(true, null).finally(() => setLoading(false));
    }, [fetchProducts]);

    useEffect(() => {
        refetch(initialFilters);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        initialFilters.query,
        initialFilters.categories,
        initialFilters.sort,
        initialFilters.stock,
        initialFilters.minPrice,
        initialFilters.maxPrice,
        initialFilters.tags,
    ]);

    return {
        products,
        loading,
        loadingMore,
        loadMore,
        total,
        hasMore: !!cursor,
        refetch,
    };
}