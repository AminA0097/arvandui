"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Search, Filter, X } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const loaderRef = useRef<HTMLDivElement>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const categories = ["all", "bags", "boots", "coats", "accessories"];

    // Fetch all products
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            });
    }, []);

    // Apply filters
    useEffect(() => {
        let filtered = allProducts;

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
        setPage(1);
        setDisplayedProducts(filtered.slice(0, ITEMS_PER_PAGE));
        setHasMore(filtered.length > ITEMS_PER_PAGE);
    }, [searchTerm, selectedCategory, allProducts]);

    // Load more products
    const loadMore = useCallback(() => {
        if (loadingMore || !hasMore) return;

        setLoadingMore(true);
        const nextPage = page + 1;
        const start = 0;
        const end = nextPage * ITEMS_PER_PAGE;
        const newProducts = filteredProducts.slice(0, end);

        setTimeout(() => {
            setDisplayedProducts(newProducts);
            setPage(nextPage);
            setHasMore(end < filteredProducts.length);
            setLoadingMore(false);
        }, 500);
    }, [page, loadingMore, hasMore, filteredProducts]);

    // Intersection Observer for infinite scroll
    useEffect(() => {
        if (!loaderRef.current || loading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loadingMore) {
                    loadMore();
                }
            },
            { threshold: 0.1, rootMargin: "100px" }
        );

        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [hasMore, loadingMore, loadMore, loading]);

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("all");
    };

    if (loading) {
        return (
            <main className="bg-[#faf9f7] min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
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

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-light animate-fadeInUp">All Products</h1>
                        <p className="text-stone-500 mt-2 animate-fadeInUp" style={{ animationDelay: "0.05s" }}>
                            {filteredProducts.length} products
                        </p>
                    </div>

                    {/* Mobile Filter Toggle */}
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="md:hidden flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-200 text-sm"
                    >
                        <Filter size={16} />
                        Filter
                    </button>
                </div>

                {/* Filters Bar */}
                <div className={`${isFilterOpen ? "block" : "hidden md:block"} animate-fadeIn`}>
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-10 pb-4 border-b border-stone-100">
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                                        selectedCategory === cat
                                            ? "bg-stone-900 text-white shadow-md"
                                            : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400 hover:-translate-y-0.5"
                                    }`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                            <input
                                type="text"
                                placeholder="Search by name or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-11 pr-10 py-2.5 rounded-full border border-stone-200 w-full focus:border-stone-400 focus:shadow-md transition-all"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-900"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(selectedCategory !== "all" || searchTerm) && (
                        <div className="flex flex-wrap gap-2 mb-6 animate-fadeIn">
                            {selectedCategory !== "all" && (
                                <button
                                    onClick={() => setSelectedCategory("all")}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-stone-100 rounded-full text-xs text-stone-700 hover:bg-stone-200"
                                >
                                    Category: {selectedCategory}
                                    <X size={12} />
                                </button>
                            )}
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="flex items-center gap-1 px-3 py-1.5 bg-stone-100 rounded-full text-xs text-stone-700 hover:bg-stone-200"
                                >
                                    Search: {searchTerm}
                                    <X size={12} />
                                </button>
                            )}
                            <button
                                onClick={clearFilters}
                                className="text-xs text-stone-500 hover:text-stone-900 underline"
                            >
                                Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* Products Grid with Infinite Scroll */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    {displayedProducts.map((p, index) => (
                        <Link
                            key={p.id}
                            href={`/products/${p.category}/${p.id}`}
                            className="group block bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fadeInUp"
                            style={{ animationDelay: `${(index % 12) * 0.03}s` }}
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                <img
                                    src={p.imageUrl}
                                    alt={p.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {p.isNew && (
                                    <span className="absolute top-4 left-4 bg-stone-900 text-white text-xs px-3 py-1 rounded-full">
                                        New
                                    </span>
                                )}
                                {!p.inStock && (
                                    <span className="absolute bottom-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                            <div className="p-5">
                                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                    {p.category}
                                </p>
                                <h3 className="text-lg font-light mt-2 group-hover:text-stone-700 transition line-clamp-1">
                                    {p.name}
                                </h3>
                                <p className="text-stone-500 text-sm mt-1">${p.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Infinite Scroll Loader */}
                {hasMore && (
                    <div ref={loaderRef} className="flex justify-center py-12">
                        {loadingMore ? (
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
                                <span className="text-stone-500 text-sm">Loading more products...</span>
                            </div>
                        ) : (
                            <div className="h-10" />
                        )}
                    </div>
                )}

                {/* End of Products */}
                {!hasMore && displayedProducts.length > 0 && (
                    <div className="text-center py-12">
                        <p className="text-stone-400 text-sm">You've reached the end</p>
                    </div>
                )}

                {/* No Results */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 animate-fadeIn">
                        <p className="text-stone-500 mb-4">No products found matching your criteria.</p>
                        <button
                            onClick={clearFilters}
                            className="rounded-xl px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}