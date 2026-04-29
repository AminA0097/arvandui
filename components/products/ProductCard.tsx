'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product, categoryLabels, tagLabels } from '@/types/product';
import { formatPrice, toPersianNumbers } from '@/lib/utils';
import { TrendingUp, Sparkles, Award, Percent } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const hasDiscount = Boolean(product.discount && product.discount > 0);
    const finalPrice = hasDiscount ? Math.round(product.price * (1 - product.discount! / 100)) : product.price;

    const badges = [];
    if (product.isNew) badges.push({ label: 'جدید', icon: <Sparkles size={12} />, color: 'bg-emerald-100 text-emerald-700' });
    if (product.isBestSeller) badges.push({ label: 'پرفروش', icon: <Award size={12} />, color: 'bg-amber-100 text-amber-700' });
    if (hasDiscount) badges.push({ label: `${toPersianNumbers(product.discount!)}٪`, icon: <Percent size={12} />, color: 'bg-red-100 text-red-600' });

    const visibleTags = product.tags.slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="will-change-transform"
        >
            <Link href={`/products/${product.category}/${product.id}`} className="group block">
                <div className="bg-white border rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]">
                    <div className="flex gap-4">
                        <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-stone-100 to-stone-50">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-1">
                                <span className="text-[11px] uppercase text-stone-400">{categoryLabels[product.category]}</span>
                                <span className="flex items-center gap-1 text-[11px] text-stone-400">
                                    <TrendingUp size={12} /> {toPersianNumbers(product.views)}
                                </span>
                            </div>
                            <h3 className="font-medium text-stone-800 line-clamp-1 text-base mt-1">{product.name}</h3>

                            {visibleTags.length > 0 && (
                                <div className="flex gap-1 mt-1.5 flex-wrap">
                                    {visibleTags.map((tag) => (
                                        <span key={tag} className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                                            {tagLabels[tag] || tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <div className="mt-2">
                                {hasDiscount ? (
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-xs text-red-500 line-through">{formatPrice(product.price)}</span>
                                        <span className="text-lg md:text-xl font-bold text-emerald-600">{formatPrice(finalPrice)}</span>
                                    </div>
                                ) : (
                                    <span className="text-lg md:text-xl font-bold text-stone-800">{formatPrice(product.price)}</span>
                                )}
                            </div>

                            <div className="mt-2 flex flex-wrap gap-2">
                                {badges.map((b, i) => (
                                    <div key={i} className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${b.color}`}>
                                        {b.icon} {b.label}
                                    </div>
                                ))}
                                {product.inStock ? (
                                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">موجود</span>
                                ) : (
                                    <span className="text-[10px] text-red-500 bg-red-50 px-2 py-0.5 rounded-full">ناموجود</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}