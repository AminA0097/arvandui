"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BackButton from "@/components/ui/BackButton";
import { showToast } from "@/components/ui/Toast";
import { ChevronLeft, ChevronRight, ShoppingBag, Heart } from "lucide-react";

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [adding, setAdding] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string>("");

    useEffect(() => {
        fetch(`/api/products/${params.category}/${params.id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then(setProduct)
            .catch(() => setProduct(null))
            .finally(() => setLoading(false));
    }, [params.category, params.id]);

    const handleAddToCart = async () => {
        if (!product) return;

        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            showToast("Please select a size", "error");
            return;
        }

        setAdding(true);
        await addToCart(product, quantity);
        showToast(`Added ${quantity} × ${product.name} to cart`, "success");
        setAdding(false);
    };

    const handleBuyNow = async () => {
        if (!product) return;
        await addToCart(product, quantity);
        router.push("/cart");
    };

    if (loading) {
        return (
            <main className="bg-[#faf9f7] min-h-screen py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="skeleton h-[600px] rounded-2xl" />
                </div>
            </main>
        );
    }

    if (!product) {
        return (
            <main className="bg-[#faf9f7] min-h-screen py-20">
                <div className="max-w-5xl mx-auto px-6 text-center animate-fadeIn">
                    <h1 className="text-4xl font-light">Product Not Found</h1>
                    <p className="text-stone-500 mt-4">The product you're looking for doesn't exist.</p>
                    <Link href="/products" className="mt-8 inline-block rounded-2xl px-8 py-4 bg-stone-900 text-white">
                        Back to Products
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#faf9f7] min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-6">
                <BackButton fallbackHref="/products" />

                <Breadcrumbs
                    items={[
                        { label: "Products", href: "/products" },
                        { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/products/${product.category}` },
                        { label: product.name, href: `/products/${product.category}/${product.id}` },
                    ]}
                />

                <div className="grid md:grid-cols-2 gap-12 mt-8">
                    {/* Image Gallery */}
                    <div className="space-y-4 animate-slideInLeft">
                        <div className="rounded-2xl overflow-hidden bg-stone-100 group">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {[product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl].map((img, i) => (
                                <div key={i} className="rounded-xl overflow-hidden bg-stone-100 cursor-pointer hover:opacity-80 transition">
                                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full aspect-square object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="animate-slideInRight">
                        <p className="uppercase text-xs tracking-[0.3em] text-stone-500 mb-2">
                            {product.category}
                        </p>

                        <h1 className="text-4xl md:text-5xl font-light mt-2">{product.name}</h1>

                        <div className="flex items-center gap-4 mt-4">
                            <p className="text-3xl font-light">${product.price}</p>
                            {product.inStock ? (
                                <span className="text-green-600 text-sm bg-green-50 px-3 py-1 rounded-full">In Stock</span>
                            ) : (
                                <span className="text-red-500 text-sm bg-red-50 px-3 py-1 rounded-full">Out of Stock</span>
                            )}
                        </div>

                        <div className="mt-6 pt-6 border-t border-stone-200">
                            <p className="text-stone-600 leading-relaxed">{product.detail}</p>
                        </div>

                        {/* Size selector */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="mt-8">
                                <label className="text-sm font-medium text-stone-700 block mb-3">Select Size</label>
                                <div className="flex gap-3 flex-wrap">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                                                selectedSize === size
                                                    ? "border-stone-900 bg-stone-900 text-white"
                                                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-500"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="mt-8">
                            <label className="text-sm font-medium text-stone-700 block mb-3">Quantity</label>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:border-stone-900 transition"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <span className="w-16 text-center text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:border-stone-900 transition"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={!product.inStock || adding}
                                className={`
                                    flex-1 rounded-2xl px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300
                                    ${product.inStock && !adding
                                    ? "bg-stone-900 text-white hover:bg-stone-800 hover:-translate-y-1"
                                    : "bg-stone-300 text-stone-500 cursor-not-allowed"
                                }
                                `}
                            >
                                <ShoppingBag size={18} />
                                {adding ? "Adding..." : "Add to Cart"}
                            </button>

                            <button
                                onClick={handleBuyNow}
                                disabled={!product.inStock}
                                className={`
                                    flex-1 rounded-2xl px-8 py-4 border-2 transition-all duration-300
                                    ${product.inStock
                                    ? "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white hover:-translate-y-1"
                                    : "border-stone-300 text-stone-400 cursor-not-allowed"
                                }
                                `}
                            >
                                Buy Now
                            </button>

                            <button className="w-14 h-14 rounded-2xl border border-stone-300 flex items-center justify-center hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Shipping Info */}
                        <div className="mt-8 pt-6 border-t border-stone-200 space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-stone-600">
                                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">✓</div>
                                <span>Free shipping on orders over $500</span>
                            </div>
                            <div className="flex items-center gap-3 text-stone-600">
                                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">↺</div>
                                <span>30-day easy returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}