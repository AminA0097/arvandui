'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Filters } from '@/types/product';
import CategoryFilter from '@/components/products/filters/CategoryFilter';
import SortDropdown from '@/components/products/filters/SortDropdown';
import StockFilter from '@/components/products/filters/StockFilter';
import PriceSlider from '@/components/products/filters/PriceSlider';

interface Props {
    filters: Filters;
    onUpdate: (key: keyof Filters, value: any) => void;
    onClear: () => void;
}

export default function FilterToolbar({ filters, onUpdate, onClear }: Props) {
    const [open, setOpen] = useState<string | null>(null);
    const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

    return (
        <div className="hidden md:block mb-6">
            <div className="bg-white border rounded-2xl shadow-sm p-4 flex flex-wrap gap-4 items-center">
                <Dropdown label="مرتب‌سازی" isOpen={open === 'sort'} onToggle={() => toggle('sort')}>
                    <SortDropdown value={filters.sort} onChange={(v) => onUpdate('sort', v)} />
                </Dropdown>

                <Dropdown label="دسته‌بندی" isOpen={open === 'category'} onToggle={() => toggle('category')}>
                    <CategoryFilter value={filters.categories} onChange={(v) => onUpdate('categories', v)} />
                </Dropdown>

                <Dropdown label="موجودی" isOpen={open === 'stock'} onToggle={() => toggle('stock')}>
                    <StockFilter value={filters.stock} onChange={(v) => onUpdate('stock', v)} />
                </Dropdown>

                <div className="flex items-center gap-2 bg-stone-50 px-3 py-2 rounded-xl">
                    <PriceSlider
                        min={0}
                        max={50_000_000}
                        valueMin={filters.minPrice}
                        valueMax={filters.maxPrice}
                        onChange={(min, max) => {
                            onUpdate('minPrice', min);
                            onUpdate('maxPrice', max);
                        }}
                    />
                </div>

                <button onClick={onClear} className="mr-auto px-4 py-2 text-sm border border-red-200 text-red-600 rounded-xl hover:bg-red-50">
                    حذف فیلترها
                </button>
            </div>
        </div>
    );
}

function Dropdown({ label, isOpen, onToggle, children }: any) {
    return (
        <div className="relative">
            <button onClick={onToggle} className="flex items-center gap-2 px-3 py-2 bg-stone-100 rounded-xl text-sm">
                {label} <ChevronDown size={14} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full mt-2 left-0 z-50 bg-white border rounded-xl shadow-lg p-3 min-w-[240px]">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}