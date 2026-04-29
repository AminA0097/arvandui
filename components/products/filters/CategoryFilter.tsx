'use client';

import { ProductCategory, categoryLabels } from '@/types/product';

interface Props {
    value: ProductCategory[];
    onChange: (categories: ProductCategory[]) => void;
}

/** Multi‑select category chips */
export default function CategoryFilter({ value, onChange }: Props) {
    const toggle = (cat: ProductCategory) => {
        onChange(
            value.includes(cat) ? value.filter((c) => c !== cat) : [...value, cat]
        );
    };

    return (
        <div className="flex flex-wrap gap-2">
            {(['bags', 'boots', 'coats', 'accessories'] as ProductCategory[]).map((cat) => (
                <button
                    key={cat}
                    onClick={() => toggle(cat)}
                    className={`px-3 py-1 rounded-full border text-sm transition ${
                        value.includes(cat) ? 'bg-black text-white border-black' : 'border-stone-200'
                    }`}
                >
                    {categoryLabels[cat]}
                </button>
            ))}
        </div>
    );
}