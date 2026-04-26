"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Search, Filter } from "lucide-react";

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories = ["all", "bags", "boots", "coats", "accessories"];

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let filtered = products;

        if (selectedCategory !== "all") {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        if (searchTerm) {
            filtered = filtered.filter(
                (p) =>
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.detail.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategory, products]);

    if (loading) {
        return (
            <main className="bg-[#faf9f7] min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="skeleton h-96 rounded-2xl" />
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#faf9f7] min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6">
                <Breadcrumbs items={[{ label: "All Products", href: "/products" }]} />

                <h1 className="text-5xl font-light mb-8 animate-fadeInUp">All Products</h1>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-10 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? "bg-stone-900 text-white"
                                        : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400"
                                }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-11 pr-4 py-2 rounded-full border border-stone-200 w-full md:w-64"
                        />
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 animate-fadeIn">
                        <p className="text-stone-500">No products found.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {filteredProducts.map((p, index) => (
                            <Link
                                key={p.id}
                                href={`/products/${p.category}/${p.id}`}
                                className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                    <img
                                        src={p.imageUrl}
                                        alt={p.name}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    {p.isNew && (
                                        <span className="absolute top-4 left-4 bg-stone-900 text-white text-xs px-3 py-1 rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>
                                <div className="p-5">
                                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                        {p.category}
                                    </p>
                                    <h3 className="text-xl font-light mt-2 group-hover:text-stone-700 transition">
                                        {p.name}
                                    </h3>
                                    <p className="text-stone-500 text-sm mt-1">${p.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}