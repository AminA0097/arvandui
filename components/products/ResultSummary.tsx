'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { toPersianNumbers } from '@/lib/utils';

interface Props {
    total: number;
    shown: number;
    loading?: boolean;
}

export default function ResultSummary({ total, shown, loading = false }: Props) {
    return (
        <div className="flex items-center justify-between mb-3 text-sm text-stone-600">
            <AnimatePresence mode="wait">
                <motion.div
                    key={shown}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="flex items-center gap-2"
                >
                    {loading && <Loader2 size={14} className="animate-spin text-stone-400" />}
                    <span>
            نمایش <span className="font-medium text-stone-900">{toPersianNumbers(shown)}</span> از{' '}
                        <span className="font-medium text-stone-900">{toPersianNumbers(total)}</span> محصول
          </span>
                </motion.div>
            </AnimatePresence>
            <div className="text-xs text-stone-400 hidden sm:block">نتایج به‌صورت لحظه‌ای به‌روزرسانی می‌شوند</div>
        </div>
    );
}