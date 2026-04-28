'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product, categoryLabels, tagLabels } from '@/types/product';
import { formatPrice, toPersianNumbers } from '@/lib/utils';
import {TrendingUp, AlertCircle, Sparkles, Award, Percent} from 'lucide-react';

interface ProductCardProps {
    /** Product data to display */
    product: Product;
    /** Animation stagger index */
    index: number;
}

/**
 * Renders a single product card with image, badges, pricing, and stock status.
 * Includes hover animations and link to product detail page.
 */
export default function ProductCard({ product, index }: ProductCardProps) {
    const hasDiscount = !!product.discount && product.discount > 0;

    const finalPrice = hasDiscount ? product.price * (1 - product.discount / 100) : product.price;


    const badges: { label: string; icon: JSX.Element; color: string }[] = [];

    if (product.isNew) {
        badges.push({
            label: 'جدید',
            icon: <Sparkles size={12} />,
            color: 'bg-slate-300 rounded-full text-black',
        });
    }
    if (product.isBestSeller) {
        badges.push({
            label: 'پرفروش',
            icon: <Award size={10} />,
            color: 'bg-slate-300 rounded-full text-black',
        });
    }
    if (hasDiscount) {
        badges.push({
            label: `${toPersianNumbers(product.discount!)}٪`,
            icon: <Percent size={10} />,
            color: 'bg-slate-300 rounded-full text-black',
        });
    }

    const visibleTags = product.tags.slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <Link href={`/products/${product.category}/${product.id}`} className="group block">
                <div className="bg-white border rounded-xl md:rounded-2xl p-4 md:p-5 hover:shadow-xl transition-all duration-300 active:scale-[0.98] md:hover:-translate-y-1">
                    <div className="flex gap-4 md:gap-5">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-stone-100 to-stone-50">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center flex-wrap gap-1">
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-stone-400">
                {categoryLabels[product.category]}
              </span>
                                <div className="flex items-center gap-1 text-[9px] md:text-[10px] text-stone-400">
                                    <TrendingUp size={10} />
                                    <span>{toPersianNumbers(product.views)}</span>
                                </div>
                            </div>

                            <h3 className="font-medium text-stone-800 line-clamp-1 text-base md:text-lg mt-1">
                                {product.name}
                            </h3>

                            {visibleTags.length > 0 && (
                                <div className="flex gap-1 mt-1.5">
                                    {visibleTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[9px] md:text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full"
                                        >
                    {tagLabels[tag]}
                  </span>
                                    ))}
                                </div>
                            )}

                            <div className="mt-2 md:mt-3">
                                {hasDiscount ? (
                                    <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs md:text-sm text-red-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                                        <span className="text-base md:text-xl font-bold text-emerald-600">
                    {formatPrice(Math.round(finalPrice))}
                  </span>
                                    </div>
                                ) : (
                                    <span className="text-base md:text-xl font-bold text-stone-800">
                  {formatPrice(product.price)}
                </span>
                                )}
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                {badges.map((badge, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-lg text-[10px] md:text-xs font-bold ${badge.color}`}
                                    >
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}

                                {product.inStock ? (
                                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        موجود
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-red-500 bg-red-50 px-2 py-1 rounded-full w-fit">
                                        <AlertCircle size={10} />
                                        ناموجود
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}