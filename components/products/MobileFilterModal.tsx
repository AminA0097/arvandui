'use client';
import { X } from 'lucide-react';
import { categoryLabels, ProductCategory, sortOptions, stockOptions, SortOption, StockFilter } from '@/types/product';
import { toPersianNumbers } from '@/lib/utils';

interface MobileFilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    filters: any;
    onUpdate: (key: string, value: any) => void;
    onClearAll: () => void;
}

export default function MobileFilterModal({ isOpen, onClose, filters, onUpdate, onClearAll }: MobileFilterModalProps) {
    if (!isOpen) return null;

    const allCategories: ProductCategory[] = ['bags', 'boots', 'coats', 'accessories'];

    const toggleCategory = (cat: ProductCategory) => {
        const newCategories = filters.categories?.includes(cat)
            ? filters.categories.filter((c: string) => c !== cat)
            : [...(filters.categories || []), cat];
        onUpdate('categories', newCategories);
    };

    return (
        <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl flex flex-col max-h-[85vh]">
                <div className="flex justify-between items-center px-5 py-4 border-b rounded-t-3xl">
                    <h2 className="font-semibold text-base">فیلترها و مرتب‌سازی</h2>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
                    {/* Sort */}
                    <div>
                        <label className="block text-sm font-medium mb-3">مرتب‌سازی بر اساس</label>
                        <div className="grid grid-cols-2 gap-2">
                            {sortOptions.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => onUpdate('sort', opt.value)}
                                    className={`px-3 py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-1 ${
                                        filters.sort === opt.value ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Categories as checkboxes */}
                    <div>
                        <label className="block text-sm font-medium mb-3">دسته‌بندی</label>
                        <div className="flex flex-wrap gap-3">
                            {allCategories.map((cat) => (
                                <label key={cat} className="flex items-center gap-1.5 text-sm cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.categories?.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                        className="w-4 h-4 rounded border-stone-300"
                                    />
                                    <span>{categoryLabels[cat]}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="block text-sm font-medium mb-3">وضعیت موجودی</label>
                        <div className="flex gap-2">
                            {stockOptions.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => onUpdate('stock', opt.value)}
                                    className={`flex-1 px-3 py-2 rounded-xl text-sm ${
                                        filters.stock === opt.value ? 'bg-stone-900 text-white' : 'bg-stone-100'
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price range */}
                    <div>
                        <label className="block text-sm font-medium mb-3">محدوده قیمت (تومان)</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="از"
                                value={filters.minPrice || ''}
                                onChange={(e) => onUpdate('minPrice', Number(e.target.value))}
                                className="flex-1 p-2.5 border rounded-xl text-right text-sm"
                            />
                            <input
                                type="text"
                                placeholder="تا"
                                value={filters.maxPrice || ''}
                                onChange={(e) => onUpdate('maxPrice', Number(e.target.value))}
                                className="flex-1 p-2.5 border rounded-xl text-right text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-5 pt-3 border-t bg-white rounded-b-3xl">
                    <button onClick={onClearAll} className="w-full py-3 text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition text-sm font-medium">
                        حذف همه فیلترها
                    </button>
                </div>
            </div>
        </div>
    );
}