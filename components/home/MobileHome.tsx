"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { ChevronRight } from "lucide-react";

export default function MobileHome() {
    const [newProducts, setNewProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showMoreNew, setShowMoreNew] = useState(false);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then((data: Product[]) => {
                const newOnes = data.filter(p => p.isNew === true);
                setNewProducts(newOnes);
                setAllProducts(data.slice(0, 6));
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
            </div>
        );
    }

    const displayedNew = showMoreNew ? newProducts : newProducts.slice(0, 3);

    return (
        <main className="bg-[#faf9f7] min-h-screen pb-24">
            {/* NEW ARRIVALS */}
            <div className="px-4 py-5">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                            Just dropped
                        </p>
                        <h2 className="text-xl font-light mt-0.5">New Arrivals</h2>
                    </div>
                    {newProducts.length > 3 && (
                        <button
                            onClick={() => setShowMoreNew(!showMoreNew)}
                            className="text-[11px] text-stone-500 border border-stone-200 px-3 py-1.5 rounded-full bg-white"
                        >
                            {showMoreNew ? "− Show less" : `+ ${newProducts.length - 3} more`}
                        </button>
                    )}
                </div>

                <div className="space-y-3">
                    {displayedNew.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="block bg-white rounded-xl border border-stone-100 shadow-sm active:scale-[0.98] transition-transform"
                        >
                            <div className="flex gap-3 p-3">
                                <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400">
                                        {product.category}
                                    </span>
                                    <h3 className="font-medium text-sm mt-0.5 truncate">{product.name}</h3>
                                    <p className="text-stone-500 text-sm mt-0.5">${product.price}</p>
                                </div>
                                <div className="flex items-center shrink-0">
                                    <div className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center">
                                        <ChevronRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* ALL PRODUCTS */}
            <div className="px-4 py-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-light">All Products</h2>
                    <Link href="/products" className="text-xs text-stone-500 flex items-center gap-1">
                        View all <ChevronRight size={12} />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {allProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="group"
                        >
                            <div className="bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm">
                                <div className="aspect-square overflow-hidden bg-stone-100">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <div className="p-2.5">
                                    <p className="text-[9px] text-stone-400 uppercase tracking-wide truncate">
                                        {product.category}
                                    </p>
                                    <p className="text-xs font-medium mt-0.5 truncate">{product.name}</p>
                                    <p className="text-sm font-medium mt-0.5">${product.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}