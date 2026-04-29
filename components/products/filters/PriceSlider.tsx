'use client';

import { toPersianDigits, toEnglishDigits } from '@/lib/utils';
import { useState } from 'react';

interface Props {
    min: number;
    max: number;
    valueMin: number;
    valueMax: number;
    onChange: (min: number, max: number) => void;
}

export default function PriceSlider({ min, max, valueMin, valueMax, onChange }: Props) {
    const [localMin, setLocalMin] = useState(valueMin ? valueMin.toString() : '');
    const [localMax, setLocalMax] = useState(valueMax ? valueMax.toString() : '');

    const handleMinBlur = () => {
        let num = toEnglishDigits(localMin);
        if (isNaN(num)) num = min;
        num = Math.max(min, Math.min(num, valueMax - 1));
        onChange(num, valueMax);
        setLocalMin(num.toString());
    };

    const handleMaxBlur = () => {
        let num = toEnglishDigits(localMax);
        if (isNaN(num)) num = max;
        num = Math.min(max, Math.max(num, valueMin + 1));
        onChange(valueMin, num);
        setLocalMax(num.toString());
    };

    return (
        <div className="space-y-3">
            <div className="flex gap-3">
                <div className="flex-1">
                    <label className="text-xs text-stone-500 block mb-1">از (تومان)</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={localMin ? toPersianDigits(localMin) : ''}
                        onChange={(e) => setLocalMin(e.target.value)}
                        onBlur={handleMinBlur}
                        placeholder="۰"
                        className="w-full p-2 border rounded-xl text-sm text-left dir-ltr"
                    />
                </div>
                <div className="flex-1">
                    <label className="text-xs text-stone-500 block mb-1">تا (تومان)</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={localMax ? toPersianDigits(localMax) : ''}
                        onChange={(e) => setLocalMax(e.target.value)}
                        onBlur={handleMaxBlur}
                        placeholder={toPersianDigits(max.toString())}
                        className="w-full p-2 border rounded-xl text-sm text-left dir-ltr"
                    />
                </div>
            </div>
        </div>
    );
}