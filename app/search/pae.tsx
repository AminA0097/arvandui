"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            fetch(`/api/search?q=${encodeURIComponent(query)}`)
                .then((res) => res.json())
                .then(setProducts)
                .finally(() => setLoading(false));
        }
    }, [query]);

    return (
        <main className="bg-[#faf9f7] min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-light mb-4">
                    Search results for "{query}"
                </h1>
                <p className="text-stone-500 mb-10">{products.length} products found</p>

                {loading ? (
                    <div className="text-stone-500">Searching...</div>
                ) : products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-stone-500">No products found.</p>
                        <Link
                            href="/products"
                            className="mt-4 inline-block rounded-2xl px-6 py-3 bg-stone-900 text-white text-sm"
                        >
                            Browse All Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.category}/${product.id}`}
                                className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden hover:-translate-y-1 transition"
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                        {product.category}
                                    </p>
                                    <h3 className="text-xl font-light mt-2">{product.name}</h3>
                                    <p className="text-stone-500 text-sm mt-1">${product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}