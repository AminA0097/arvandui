'use client';

import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Filters, ProductCategory, categoryLabels, sortOptions, stockOptions } from '@/types/product';
import { toPersianNumbers } from '@/lib/utils';

interface Props {
    filters: Filters;
    onUpdate: (key: keyof Filters, value: any) => void;
    onClearAll: () => void;
}

export default function ActiveFilterChips({ filters, onUpdate, onClearAll }: Props) {
    const chips = useMemo(() => {
        const result: { key: string; label: string; onRemove: () => void }[] = [];

        if (filters.query) {
            result.push({
                key: 'query',
                label: `جستجو: ${filters.query}`,
                onRemove: () => onUpdate('query', ''),
            });
        }

        filters.categories.forEach((cat: ProductCategory) => {
            result.push({
                key: `cat-${cat}`,
                label: categoryLabels[cat],
                onRemove: () => onUpdate('categories', filters.categories.filter((c) => c !== cat)),
            });
        });

        if (filters.stock !== 'all') {
            const label = stockOptions.find((s) => s.value === filters.stock)?.label || '';
            result.push({ key: 'stock', label, onRemove: () => onUpdate('stock', 'all') });
        }

        if (filters.sort !== 'newest') {
            const label = sortOptions.find((s) => s.value === filters.sort)?.label || '';
            result.push({ key: 'sort', label, onRemove: () => onUpdate('sort', 'newest') });
        }

        const hasPriceFilter = filters.minPrice > 0 || filters.maxPrice < 50_000_000;
        if (hasPriceFilter) {
            const minText = filters.minPrice > 0 ? toPersianNumbers(filters.minPrice) : '۰';
            const maxText = filters.maxPrice < 50_000_000 ? toPersianNumbers(filters.maxPrice) : '۵۰٬۰۰۰٬۰۰۰';
            result.push({
                key: 'price',
                label: `قیمت: ${minText} - ${maxText} تومان`,
                onRemove: () => {
                    onUpdate('minPrice', 0);
                    onUpdate('maxPrice', 50_000_000);
                },
            });
        }
        return result;
    }, [filters, onUpdate]);

    if (!chips.length) return null;

    return (
        <div className="mb-5 flex flex-wrap items-center gap-2">
            <button
                onClick={onClearAll}
                className="text-xs px-3 py-1.5 rounded-full border border-red-200 text-red-600 hover:bg-red-50 transition"
            >
                حذف همه
            </button>
            <AnimatePresence>
                {chips.map((chip) => (
                    <motion.div
                        key={chip.key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 rounded-full text-xs shadow-sm"
                    >
                        <span>{chip.label}</span>
                        <button onClick={chip.onRemove} className="text-stone-500 hover:text-red-500">
                            <X size={12} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}