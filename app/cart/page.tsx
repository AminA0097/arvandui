"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
    const { items, total, removeFromCart, updateQuantity, isLoading } = useCart();

    if (isLoading) {
        return (
            <main className="bg-[#faf9f7] min-h-screen py-20">
                <div className="max-w-4xl mx-auto px-6 text-center text-stone-500">
                    Loading your cart...
                </div>
            </main>
        );
    }

    if (items.length === 0) {
        return (
            <main className="bg-[#faf9f7] min-h-screen py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-light">Your cart is empty</h1>
                    <p className="text-stone-500 mt-4">Add some leather goods to get started.</p>
                    <Link
                        href="/products"
                        className="mt-8 inline-block rounded-2xl px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#faf9f7] min-h-screen py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-light mb-10">Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-6 bg-white p-5 rounded-2xl border border-stone-200"
                            >
                                <div className="w-24 h-24 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-medium text-stone-900">{item.name}</h3>
                                    <p className="text-stone-500 text-sm mt-1">
                                        ${item.price}
                                    </p>

                                    <div className="flex items-center gap-4 mt-3">
                                        <select
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            className="border border-stone-300 rounded-lg px-3 py-1.5 text-sm bg-white"
                                        >
                                            {[1, 2, 3, 4, 5].map((q) => (  // ✅ Make sure it's .map not ..map
                                                <option key={q} value={q}>
                                                    Qty: {q}
                                                </option>
                                            ))}
                                        </select>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-stone-400 hover:text-red-500 text-sm transition"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-medium">${item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl border border-stone-200 p-6 sticky top-28">
                            <h3 className="text-lg font-medium mb-4">Order Summary</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-stone-500">Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-stone-500">Shipping</span>
                                    <span>Calculated at checkout</span>
                                </div>
                                <div className="border-t border-stone-200 pt-3 mt-3">
                                    <div className="flex justify-between font-medium">
                                        <span>Total</span>
                                        <span className="text-xl">${total}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 rounded-2xl px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition">
                                Proceed to Checkout
                            </button>

                            <Link
                                href="/products"
                                className="block text-center text-sm text-stone-500 mt-4 hover:text-stone-900"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}