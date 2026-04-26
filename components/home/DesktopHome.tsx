"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function DesktopHome() {
    const [newProducts, setNewProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then((data: Product[]) => {
                const newOnes = data.filter(p => p.isNew === true);
                setNewProducts(newOnes.slice(0, 10));
                setAllProducts(data.slice(0, 8));
                setLoading(false);
            });
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 420;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <main className="bg-[#faf9f7] min-h-screen pt-8">
            {/* NEW ARRIVALS SLIDER */}
            <div className="max-w-7xl mx-auto px-10 py-12">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <p className="text-stone-400 text-xs uppercase tracking-[0.3em] mb-2">
                            Fresh drops
                        </p>
                        <h2 className="text-4xl font-light">New Arrivals</h2>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-9 h-9 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-stone-400 hover:bg-stone-50 transition-all"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-9 h-9 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-stone-400 hover:bg-stone-50 transition-all"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "thin" }}
                >
                    {newProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="group flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-stone-100 relative">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-3 left-3 bg-stone-900 text-white text-[9px] uppercase tracking-wide px-2 py-0.5 rounded-full">
                                    New
                                </span>
                            </div>
                            <div className="p-4">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                                    {product.category}
                                </p>
                                <h3 className="font-medium text-base mt-1 group-hover:text-stone-600 transition">
                                    {product.name}
                                </h3>
                                <p className="text-stone-500 text-sm mt-1">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CATEGORY GRID */}
            <div className="max-w-7xl mx-auto px-10 py-12">
                <h2 className="text-3xl font-light mb-8">Shop by Category</h2>
                <div className="grid md:grid-cols-4 gap-5">
                    {[
                        { name: "Bags", image: "/category-bags.jpg", count: 12, href: "/products/bags" },
                        { name: "Boots", image: "/category-boots.jpg", count: 8, href: "/products/boots" },
                        { name: "Coats", image: "/category-coats.jpg", count: 6, href: "/products/coats" },
                        { name: "Accessories", image: "/category-accessories.jpg", count: 14, href: "/products/accessories" }
                    ].map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group relative h-72 rounded-xl overflow-hidden"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                <h3 className="text-xl font-light">{cat.name}</h3>
                                <p className="text-white/70 text-xs mt-1">{cat.count} products</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* FEATURED PRODUCTS */}
            <div className="max-w-7xl mx-auto px-10 py-12">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-light">Editor's Pick</h2>
                        <p className="text-stone-400 text-sm mt-1">Most loved this season</p>
                    </div>
                    <Link href="/products" className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900">
                        View all <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-4 gap-5">
                    {allProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="group block bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="aspect-square overflow-hidden bg-stone-100">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-3">
                                <p className="text-[10px] text-stone-400 uppercase tracking-wide">{product.category}</p>
                                <h3 className="font-medium text-sm mt-1 line-clamp-1">{product.name}</h3>
                                <p className="text-stone-700 font-medium text-sm mt-1">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}