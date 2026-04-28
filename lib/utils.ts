import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const toPersianNumbers = (num: number): string => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export const normalizeToNumber = (value: string): number => {
    const persianToEnglish: Record<string, string> = {
        '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
        '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9',
    };
    let englishStr = '';
    for (const char of value) {
        if (persianToEnglish[char]) englishStr += persianToEnglish[char];
        else if (char >= '0' && char <= '9') englishStr += char;
    }
    const num = parseInt(englishStr);
    return isNaN(num) ? 0 : num;
};

/**
 * Formats a number as Persian price with commas and currency unit.
 * @param price - Number to format
 * @returns Formatted string like "۱۲,۳۴۰ تومان"
 */
export function formatPrice(price: number): string {
    return `${price.toLocaleString('fa-IR')} تومان`;
}