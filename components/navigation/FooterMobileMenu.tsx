// components/navigation/FooterMobileMenu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Mobile bottom navigation bar
 * Visible only on mobile devices with solid background
 */
export default function FooterMobileMenu() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/search", label: "Search", icon: Search },
        { href: "/cart", label: "Cart", icon: ShoppingBag },
        { href: "/account", label: "Profile", icon: User },
    ];

    return (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-white border-t shadow-lg">
            <div className="grid grid-cols-4">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex flex-col items-center gap-1 py-3 transition-all duration-200",
                                "active:scale-95",
                                isActive
                                    ? "text-primary"
                                    : "text-stone-600 hover:text-primary"
                            )}
                            style={{ WebkitTapHighlightColor: "transparent" }}
                        >
                            <Icon size={22} strokeWidth={1.5} />
                            <span className="text-[11px] font-medium">{label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}