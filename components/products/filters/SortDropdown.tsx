'use client';

import { sortOptions } from '@/types/product';

interface Props {
    value: string;
    onChange: (sort: string) => void;
}

/** Sort dropdown (used on both desktop & mobile) */
export default function SortDropdown({ value, onChange }: Props) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm bg-white"
        >
            {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}