"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import Breadcrumb from "@/components/ui/Breadcrumbs";
import { Search, X } from "lucide-react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const q = searchParams.get("q") || "";
    const category = searchParams.get("category") || "";

    const [query, setQuery] = useState(q);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    // 🧠 debounce + category-aware search
    useEffect(() => {
        if (!q) return;

        setLoading(true);

        const timer = setTimeout(() => {
            const url = new URL("/api/search", window.location.origin);
            url.searchParams.set("q", q);

            if (category) {
                url.searchParams.set("category", category);
            }

            fetch(url.toString())
                .then(res => res.json())
                .then(setProducts)
                .finally(() => setLoading(false));
        }, 500);

        return () => clearTimeout(timer);
    }, [q, category]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}${category ? `&category=${category}` : ""}`);
        }
    };

    return (
        <main className="bg-[#faf9f7] min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-6">

                <Breadcrumb />

                <h1 className="text-3xl font-light mb-6">Search</h1>

                {/* Search Input */}
                <form onSubmit={handleSearch} className="mb-10">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />

                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products..."
                            className="w-full pl-12 pr-12 py-4 border rounded-2xl bg-white"
                        />

                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </form>

                {/* Results */}
                {loading ? (
                    <div className="py-10 text-center">Loading...</div>
                ) : (
                    <>
                        <p className="text-sm text-stone-500 mb-4">
                            {products.length} results for "{q}"
                            {category && ` in ${category}`}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {products.map(p => (
                                <Link
                                    key={p.id}
                                    href={`/products/${p.category}/${p.id}`}
                                    className="group flex gap-4 bg-white border rounded-xl p-3 hover:shadow-md transition"
                                >
                                    {/* IMAGE */}
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100">
                                        <img
                                            src={p.imageUrl}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="flex flex-col justify-center">
                                        <p className="text-xs text-stone-400 uppercase tracking-widest">
                                            {p.category}
                                        </p>

                                        <h3 className="font-medium text-stone-900 group-hover:text-stone-700">
                                            {p.name}
                                        </h3>

                                        <p className="text-sm text-stone-500">
                                            ${p.price}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}