"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

export default function NewArrivals() {
    const [newProducts, setNewProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((products) => {
                const newOnes = products.filter((p: Product) => p.isNew === true);
                setNewProducts(newOnes);
                setLoading(false);
            });
    }, []);

    const displayedProducts = showAll ? newProducts : newProducts.slice(0, 5);

    if (loading) {
        return (
            <section className="bg-[#faf9f7] py-14 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-stone-400">Loading new arrivals...</div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#faf9f7] py-14 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-14 text-center md:text-left">
                    <p className="uppercase tracking-[0.28em] text-xs text-stone-500 mb-3">
                        Just Arrived
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light">
                        New Collection
                    </h2>
                    <p className="text-stone-500 mt-4 max-w-2xl">
                        Discover our latest handcrafted leather pieces, designed for the modern wardrobe.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {displayedProducts.map((product, i) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-sm"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 bg-stone-900 text-white text-xs px-3 py-1 rounded-full">
                                    New
                                </span>
                            </div>
                            <div className="p-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                    {product.category}
                                </p>
                                <h3 className="text-xl font-light mt-2">{product.name}</h3>
                                <p className="text-stone-500 text-sm mt-1">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* See More Button */}
                {newProducts.length > 5 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition"
                        >
                            {showAll ? "Show Less" : `See All ${newProducts.length} New Arrivals`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}