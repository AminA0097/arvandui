"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
    const { itemCount } = useCart();

    return (
        <Link href="/cart" className="relative">
            <ShoppingBag size={22} strokeWidth={1.2} />
            {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-stone-900 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                </span>
            )}
        </Link>
    );
}