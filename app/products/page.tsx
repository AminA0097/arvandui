// app/products/page.tsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { Search, X } from "lucide-react";
import { formatPrice } from "@/lib/utils";

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
            })
            .catch(() => setLoading(false));
    }, []);

    // Apply filters
    useEffect(() => {
        let filtered = [...allProducts];

        if (selectedCategory !== "all") {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (p) =>
                    p.name.toLowerCase().includes(term) ||
                    p.detail.toLowerCase().includes(term)
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
        const end = nextPage * ITEMS_PER_PAGE;
        const newProducts = filteredProducts.slice(0, end);

        setTimeout(() => {
            setDisplayedProducts(newProducts);
            setPage(nextPage);
            setHasMore(end < filteredProducts.length);
            setLoadingMore(false);
        }, 300);
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
            <main className="bg-background min-h-screen py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-2xl" />
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-background min-h-screen py-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-light">All Products</h1>
                        <p className="text-muted-foreground mt-2">
                            {filteredProducts.length} products
                        </p>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-10 pb-4 border-b">
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-white border text-muted-foreground hover:border-primary hover:-translate-y-0.5"
                                }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-10 py-2.5 rounded-full border bg-white focus:border-primary focus:shadow-md transition-all outline-none"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Active Filters */}
                {(selectedCategory !== "all" || searchTerm) && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {selectedCategory !== "all" && (
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded-full text-xs hover:bg-muted/80"
                            >
                                Category: {selectedCategory}
                                <X size={12} />
                            </button>
                        )}
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded-full text-xs hover:bg-muted/80"
                            >
                                Search: {searchTerm}
                                <X size={12} />
                            </button>
                        )}
                        <button
                            onClick={clearFilters}
                            className="text-xs text-muted-foreground hover:text-foreground underline"
                        >
                            Clear all
                        </button>
                    </div>
                )}

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    {displayedProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="group block bg-white border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {product.isNew && (
                                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    New
                  </span>
                                )}
                                {!product.inStock && (
                                    <span className="absolute bottom-4 left-4 bg-destructive text-destructive-foreground text-xs px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                                )}
                            </div>
                            <div className="p-5">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                    {product.category}
                                </p>
                                <h3 className="text-lg font-medium mt-2 group-hover:text-primary transition line-clamp-1">
                                    {product.name}
                                </h3>
                                <p className="text-foreground font-semibold mt-1">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Infinite Scroll Loader */}
                {hasMore && (
                    <div ref={loaderRef} className="flex justify-center py-12">
                        {loadingMore ? (
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                <span className="text-muted-foreground text-sm">Loading more...</span>
                            </div>
                        ) : (
                            <div className="h-10" />
                        )}
                    </div>
                )}

                {/* End of Products */}
                {!hasMore && displayedProducts.length > 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-sm">You've reached the end</p>
                    </div>
                )}

                {/* No Results */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground mb-4">No products found.</p>
                        <button
                            onClick={clearFilters}
                            className="rounded-xl px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}