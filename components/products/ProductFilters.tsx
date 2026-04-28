'use client';
import { ChevronDown, Search, X } from 'lucide-react';
import { categoryLabels, ProductCategory, sortOptions, stockOptions, SortOption, StockFilter } from '@/types/product';
import { toPersianNumbers } from '@/lib/utils';

interface ProductFiltersProps {
    filters: {
        query: string;
        categories: ProductCategory[];
        sort: SortOption;
        stock: StockFilter;
        minPrice: number;
        maxPrice: number;
    };
    priceBounds: { min: number; max: number };
    onUpdate: (key: string, value: any) => void;
    onPriceApply: (min: number, max: number) => void;
}

export default function ProductFilters({ filters, priceBounds, onUpdate, onPriceApply }: ProductFiltersProps) {
    const allCategories: ProductCategory[] = ['bags', 'boots', 'coats', 'accessories'];

    const toggleCategory = (cat: ProductCategory) => {
        const newCategories = filters.categories.includes(cat)
            ? filters.categories.filter((c) => c !== cat)
            : [...filters.categories, cat];
        onUpdate('categories', newCategories);
    };

    return (
        <div className="hidden md:flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-stone-200/50">
            {/* Sort */}
            <div className="relative">
                <select
                    value={filters.sort}
                    onChange={(e) => onUpdate('sort', e.target.value as SortOption)}
                    className="appearance-none px-4 py-2.5 pr-10 border rounded-xl bg-white text-sm cursor-pointer"
                    dir="rtl"
                >
                    {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <ChevronDown size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            </div>

            {/* Categories as checkboxes */}
            <div className="flex flex-wrap gap-3">
                {allCategories.map((cat) => (
                    <label key={cat} className="flex items-center gap-1.5 text-sm cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.categories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500"
                        />
                        <span>{categoryLabels[cat]}</span>
                    </label>
                ))}
            </div>

            {/* Stock */}
            <div className="flex gap-2 bg-white rounded-xl border p-1">
                {stockOptions.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => onUpdate('stock', opt.value)}
                        className={`px-4 py-1.5 rounded-lg text-sm transition-all ${
                            filters.stock === opt.value ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
                        }`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            {/* Price range */}
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder={`از ${toPersianNumbers(priceBounds.min)}`}
                    value={filters.minPrice || ''}
                    onChange={(e) => onUpdate('minPrice', Number(e.target.value))}
                    className="w-28 p-2 border rounded-xl text-sm text-right"
                />
                <span className="text-stone-400">−</span>
                <input
                    type="text"
                    placeholder={`تا ${toPersianNumbers(priceBounds.max)}`}
                    value={filters.maxPrice || ''}
                    onChange={(e) => onUpdate('maxPrice', Number(e.target.value))}
                    className="w-28 p-2 border rounded-xl text-sm text-right"
                />
                <button onClick={() => onPriceApply(filters.minPrice, filters.maxPrice)} className="px-3 py-2 bg-stone-900 text-white rounded-xl text-sm">
                    اعمال
                </button>
            </div>
        </div>
    );
}