'use client';

import { stockOptions } from '@/types/product';

interface Props {
    value: string;
    onChange: (stock: string) => void;
}

/** Stock availability toggle buttons */
export default function StockFilter({ value, onChange }: Props) {
    return (
        <div className="flex gap-2">
            {stockOptions.map((opt) => (
                <button
                    key={opt.value}
                    onClick={() => onChange(opt.value)}
                    className={`px-3 py-1 rounded-full border text-sm transition ${
                        value === opt.value ? 'bg-black text-white border-black' : 'border-stone-200'
                    }`}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}