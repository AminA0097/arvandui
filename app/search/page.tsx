"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import BackButton from "@/components/ui/BackButton";
import { Search, X } from "lucide-react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialQuery) {
            setLoading(true);
            fetch(`/api/search?q=${encodeURIComponent(initialQuery)}`)
                .then((res) => res.json())
                .then(setProducts)
                .finally(() => setLoading(false));
        }
    }, [initialQuery]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <main className="bg-[#faf9f7] min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-6">
                <BackButton fallbackHref="/products" />

                <h1 className="text-3xl font-light mb-6">Search</h1>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="mb-10">
                    <div className="relative group">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                            type="text"
                            placeholder="Search leather goods, bags, boots..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-stone-200 bg-white focus:border-stone-400 focus:shadow-md transition-all text-lg"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </form>

                {/* Results */}
                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
                    </div>
                ) : initialQuery ? (
                    <>
                        <p className="text-stone-500 mb-6">
                            {products.length} result{products.length !== 1 ? "s" : ""} for "{initialQuery}"
                        </p>

                        {products.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-stone-500">No products found.</p>
                                <button
                                    onClick={() => router.push("/products")}
                                    className="mt-4 inline-block rounded-xl px-6 py-3 bg-stone-900 text-white text-sm"
                                >
                                    Browse All Products
                                </button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6">
                                {products.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.category}/${product.id}`}
                                        className="group flex gap-4 bg-white border border-stone-200 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="w-28 h-28 flex-shrink-0 overflow-hidden bg-stone-100">
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4 flex-1">
                                            <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                                {product.category}
                                            </p>
                                            <h3 className="font-medium mt-1 group-hover:text-stone-700">
                                                {product.name}
                                            </h3>
                                            <p className="text-stone-500 text-sm mt-1">${product.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-16 text-stone-400">
                        <p>Enter a search term to find products</p>
                    </div>
                )}
            </div>
        </main>
    );
}