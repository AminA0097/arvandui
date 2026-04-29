'use client';

import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn, toPersianDigits } from '@/lib/utils';

interface SearchToolbarProps {
    query: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function SearchToolbar({ query, onChange, disabled = false }: SearchToolbarProps) {
    const [value, setValue] = useState(query);

    useEffect(() => {
        setValue(query);
    }, [query]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    const clear = () => {
        setValue('');
        onChange('');
    };

    return (
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md pb-3 pt-2 shadow-sm">
            <div className={cn(
                'relative flex items-center bg-white border rounded-2xl px-4 py-2.5 transition-all',
                'focus-within:ring-2 focus-within:ring-stone-300 focus-within:border-transparent',
                disabled && 'opacity-60 pointer-events-none'
            )}>
                <Search size={20} className="text-stone-400 ml-2" />
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder="جستجوی محصول ..."
                    className="w-full bg-transparent outline-none text-right text-base placeholder:text-stone-400"
                />
                {value && (
                    <button onClick={clear} className="mr-2 text-stone-400 hover:text-stone-600 transition">
                        <X size={18} />
                    </button>
                )}
            </div>
        </div>
    );
}