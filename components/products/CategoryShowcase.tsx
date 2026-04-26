"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

type CategoryInfo = {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
};

const categories: CategoryInfo[] = [
    {
        name: "bags",
        title: "Bags",
        description: "From everyday totes to weekend duffels, each bag is crafted with full-grain leather.",
        imageUrl: "/category-bags.jpg"
    },
    {
        name: "boots",
        title: "Boots",
        description: "Heritage-inspired footwear built to last a lifetime.",
        imageUrl: "/category-boots.jpg"
    },
    {
        name: "coats",
        title: "Coats",
        description: "Timeless outerwear for every season.",
        imageUrl: "/category-coats.jpg"
    },
    {
        name: "accessories",
        title: "Accessories",
        description: "The finishing touches that complete your look.",
        imageUrl: "/category-accessories.jpg"
    }
];

export default function CategoryShowcase() {
    const [productsByCategory, setProductsByCategory] = useState<Record<string, Product[]>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(
            categories.map(cat =>
                fetch(`/api/products/${cat.name}`)
                    .then(res => res.json())
                    .then(products => ({ category: cat.name, products }))
            )
        ).then(results => {
            const map: Record<string, Product[]> = {};
            results.forEach(r => {
                map[r.category] = r.products.slice(0, 4); // Show first 4 products per category
            });
            setProductsByCategory(map);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <section className="bg-[#faf9f7] py-14 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-stone-400">Loading categories...</div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#faf9f7] py-14 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-14 text-center">
                    <p className="uppercase tracking-[0.28em] text-xs text-stone-500 mb-3">
                        Shop by Category
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light">
                        Explore Collections
                    </h2>
                </div>

                {/* Categories */}
                <div className="space-y-20">
                    {categories.map((category) => (
                        <div key={category.name}>
                            {/* Category Header */}
                            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-light">{category.title}</h3>
                                    <p className="text-stone-500 mt-2 max-w-2xl">{category.description}</p>
                                </div>
                                <Link
                                    href={`/products/${category.name}`}
                                    className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 transition text-sm uppercase tracking-wide"
                                >
                                    View All {category.title}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Products Grid */}
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {productsByCategory[category.name]?.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.category}/${product.id}`}
                                        className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden transition hover:-translate-y-1"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-medium">{product.name}</h4>
                                            <p className="text-stone-500 text-sm mt-1">${product.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}