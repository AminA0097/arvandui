import { useCallback, useState } from 'react';
import { Filters } from '@/types/product';

export function useFilterState(initial: Filters) {
    const [filters, setFilters] = useState<Filters>(initial);

    const updateFilter = useCallback(<K extends keyof Filters>(key: K, value: Filters[K]) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    }, []);

    const resetFilters = useCallback(() => {
        setFilters(initial);
    }, [initial]);

    const toggleCategory = useCallback(
        (cat: Filters['categories'][number]) => {
            setFilters((prev) => ({
                ...prev,
                categories: prev.categories.includes(cat)
                    ? prev.categories.filter((c) => c !== cat)
                    : [...prev.categories, cat],
            }));
        },
        []
    );

    return { filters, setFilters, updateFilter, resetFilters, toggleCategory };
}