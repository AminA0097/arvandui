'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Filters } from '@/types/product';
import SortDropdown from './filters/SortDropdown';
import CategoryFilter from './filters/CategoryFilter';
import StockFilter from './filters/StockFilter';
import PriceSlider from './filters/PriceSlider';

interface Props {
    filters: Filters;
    onUpdate: (key: keyof Filters, value: any) => void;
    onClear: () => void;
}

export default function MobileFilterSheet({ filters, onUpdate, onClear }: Props) {
    const [open, setOpen] = useState(false);
    const [section, setSection] = useState<string | null>(null);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const activeCount =
        filters.categories.length +
        (filters.stock !== 'all' ? 1 : 0) +
        (filters.sort !== 'newest' ? 1 : 0) +
        (filters.minPrice > 0 || filters.maxPrice < 50_000_000 ? 1 : 0);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-stone-900 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm"
            >
                فیلترها {activeCount > 0 && `(${activeCount})`}
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 z-50"
                            onClick={() => setOpen(false)}
                        />
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 h-[85vh] bg-white rounded-t-3xl flex flex-col"
                        >
                            <div className="py-2 flex justify-center">
                                <div className="w-12 h-1.5 bg-stone-300 rounded-full" />
                            </div>
                            <div className="flex justify-between items-center px-5 py-3 border-b">
                                <h2 className="font-semibold text-lg">فیلترها</h2>
                                <button onClick={() => setOpen(false)}>
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                                <AccordionSection title="مرتب‌سازی" open={section === 'sort'} onToggle={() => setSection(section === 'sort' ? null : 'sort')}>
                                    <SortDropdown value={filters.sort} onChange={(v) => onUpdate('sort', v)} />
                                </AccordionSection>
                                <AccordionSection title="دسته‌بندی" open={section === 'cat'} onToggle={() => setSection(section === 'cat' ? null : 'cat')}>
                                    <CategoryFilter value={filters.categories} onChange={(v) => onUpdate('categories', v)} />
                                </AccordionSection>
                                <AccordionSection title="موجودی" open={section === 'stock'} onToggle={() => setSection(section === 'stock' ? null : 'stock')}>
                                    <StockFilter value={filters.stock} onChange={(v) => onUpdate('stock', v)} />
                                </AccordionSection>
                                <AccordionSection title="قیمت" open={section === 'price'} onToggle={() => setSection(section === 'price' ? null : 'price')}>
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
                                </AccordionSection>
                            </div>

                            <div className="border-t p-4 flex gap-2">
                                <button onClick={onClear} className="flex-1 py-3 border border-red-200 text-red-600 rounded-xl text-sm">
                                    حذف همه
                                </button>
                                <button onClick={() => setOpen(false)} className="flex-[2] py-3 bg-stone-900 text-white rounded-xl text-sm">
                                    اعمال ({activeCount})
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function AccordionSection({ title, open, onToggle, children }: any) {
    return (
        <div className="border rounded-xl overflow-hidden">
            <button onClick={onToggle} className="w-full flex justify-between px-4 py-3 bg-stone-50 text-sm font-medium">
                {title}
                <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 space-y-3">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}