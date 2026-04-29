'use client';

import { Filters } from '@/types/product';
import CategoryFilter from './filters/CategoryFilter';
import SortDropdown from './filters/SortDropdown';
import StockFilter from './filters/StockFilter';
import PriceSlider from './filters/PriceSlider';

interface Props {
    filters: Filters;
    onUpdate: (key: keyof Filters, value: any) => void;
    onClear: () => void;
}

export default function SidebarFilters({ filters, onUpdate, onClear }: Props) {
    const hasActiveFilters =
        filters.categories.length > 0 ||
        filters.stock !== 'all' ||
        filters.sort !== 'newest' ||
        filters.minPrice > 0 ||
        filters.maxPrice < 50_000_000;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-stone-800">فیلترها</h3>
                {hasActiveFilters && (
                    <button onClick={onClear} className="text-xs text-red-500 hover:text-red-700 transition">
                        حذف همه
                    </button>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">مرتب‌سازی</label>
                <SortDropdown value={filters.sort} onChange={(v) => onUpdate('sort', v)} />
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">دسته‌بندی</label>
                <CategoryFilter value={filters.categories} onChange={(v) => onUpdate('categories', v)} />
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">موجودی</label>
                <StockFilter value={filters.stock} onChange={(v) => onUpdate('stock', v)} />
            </div>

            <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">محدوده قیمت</label>
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
        </div>
    );
}