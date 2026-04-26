"use client";

import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { itemCount } = useCart();
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-[#faf9f7]/80 backdrop-blur-xl border-b border-stone-200/50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
                {/* LEFT */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/products"
                        className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/products/bags"
                        className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition"
                    >
                        Bags
                    </Link>
                    <Link
                        href="/products/boots"
                        className="text-sm uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition"
                    >
                        Boots
                    </Link>
                </div>

                {/* CENTER */}
                <div className="flex items-center justify-center flex-1 gap-10">
                    <Link
                        href="/"
                        className="text-xl md:text-2xl uppercase tracking-[0.38em] font-light text-stone-900 whitespace-nowrap"
                    >
                        Leather House
                    </Link>

                    <form onSubmit={handleSearch} className="hidden md:block w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search leather goods"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="
                                w-full
                                rounded-full
                                border border-stone-300
                                bg-white
                                px-5 py-3
                                text-sm
                                outline-none
                                focus:border-stone-500
                                transition
                            "
                        />
                    </form>
                </div>

                {/* RIGHT */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/account"
                        className="rounded-full border border-stone-300 px-5 py-3 text-sm hover:border-stone-500 transition"
                    >
                        Account
                    </Link>
                    <Link href="/cart" className="relative">
                        <ShoppingBag size={22} strokeWidth={1.2} />
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-stone-900 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
}