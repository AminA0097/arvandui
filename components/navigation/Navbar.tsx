// components/navigation/Navbar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Search, Menu, X, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Navigation categories for the mega menu
 */
const categories = [
    {
        name: "Bags",
        href: "/products/bags",
        description: "Handcrafted leather bags for every occasion",
        items: ["Tote Bags", "Backpacks", "Messenger Bags", "Clutches"],
    },
    {
        name: "Boots",
        href: "/products/boots",
        description: "Premium leather boots for any terrain",
        items: ["Chelsea Boots", "Lace-up Boots", "Desert Boots", "Motorcycle Boots"],
    },
    {
        name: "Coats",
        href: "/products/coats",
        description: "Timeless leather jackets and coats",
        items: ["Bomber Jackets", "Motorcycle Jackets", "Parka Coats", "Trench Coats"],
    },
    {
        name: "Accessories",
        href: "/products/accessories",
        description: "Complete your look with leather accessories",
        items: ["Wallets", "Belts", "Gloves", "Card Holders"],
    },
];

/**
 * Desktop Dropdown Menu Component with solid background
 */
function DesktopDropdownMenu({ category }: { category: typeof categories[0] }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    "bg-white hover:bg-stone-100 text-stone-700",
                    isOpen && "bg-stone-100"
                )}
            >
                {category.name}
                <ChevronDown className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    isOpen && "rotate-180"
                )} />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full pt-2 z-[200]">
                    <div className="w-[500px] rounded-xl border bg-white shadow-lg overflow-hidden">
                        <div className="grid gap-3 p-6 lg:grid-cols-[0.75fr_1fr]">
                            <div className="rounded-xl bg-stone-50 p-4">
                                <h4 className="mb-2 text-sm font-medium">{category.name}</h4>
                                <p className="text-sm text-stone-500">
                                    {category.description}
                                </p>
                                <Button asChild variant="outline" size="sm" className="mt-4 bg-white">
                                    <Link href={category.href}>Shop All →</Link>
                                </Button>
                            </div>
                            <div>
                                <ul className="grid gap-2">
                                    {category.items.map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`${category.href}?type=${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="block rounded-md p-2 text-sm text-stone-600 hover:bg-stone-100 transition"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/**
 * Main navigation bar
 * Mobile: Only shows brand name
 * Desktop: Full navigation with solid backgrounds
 */
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");
    const router = useRouter();
    const { itemCount } = useCart();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header className="sticky top-0 z-[100] w-full border-b bg-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    {/* Empty div for spacing on mobile */}
                    <div className="md:hidden w-9" />

                    {/* Logo - centered on mobile, left on desktop */}
                    <Link href="/">
            <span className="text-sm md:text-xl font-light tracking-[0.2em] uppercase hover:opacity-80 transition whitespace-nowrap text-stone-800">
              Leather House
            </span>
                    </Link>

                    {/* Desktop Navigation - hidden on mobile, solid backgrounds */}
                    <div className="hidden md:flex items-center gap-2">
                        {categories.map((category) => (
                            <DesktopDropdownMenu key={category.name} category={category} />
                        ))}
                        <Link
                            href="/products"
                            className="px-4 py-2 text-sm font-medium rounded-md transition-colors bg-white hover:bg-stone-100 text-stone-700"
                        >
                            All Products
                        </Link>
                    </div>

                    {/* Desktop Right side actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-9 w-9 bg-white hover:bg-stone-100">
                                    <Search className="h-4 w-4" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] z-[200] bg-white">
                                <DialogHeader>
                                    <DialogTitle>Search Products</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleSearch} className="flex gap-2 mt-4">
                                    <Input
                                        placeholder="Search leather goods..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1"
                                        autoFocus
                                    />
                                    <Button type="submit">Search</Button>
                                </form>
                            </DialogContent>
                        </Dialog>

                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 bg-white hover:bg-stone-100">
                            <Link href="/account">
                                <User className="h-4 w-4" />
                            </Link>
                        </Button>

                        <Button variant="ghost" size="icon" className="relative h-9 w-9 bg-white hover:bg-stone-100" asChild>
                            <Link href="/cart">
                                <ShoppingBag className="h-4 w-4" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-stone-800 text-white text-[9px] font-medium">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                                )}
                            </Link>
                        </Button>
                    </div>

                    {/* Empty div for spacing on mobile */}
                    <div className="md:hidden w-9" />
                </div>
            </header>

            {/* Mobile Menu Drawer - triggered by URL or other means */}
            <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DialogContent className="fixed top-0 right-0 left-auto translate-x-0 translate-y-0 w-[85%] max-w-sm h-full rounded-l-2xl rounded-r-none p-0 z-[200]">
                    <div className="flex flex-col h-full bg-white">
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="font-medium text-lg">Menu</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="space-y-6">
                                {categories.map((category) => (
                                    <div key={category.name}>
                                        <Link
                                            href={category.href}
                                            className="block font-medium text-lg mb-2 hover:text-stone-600 transition"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {category.name}
                                        </Link>
                                        <div className="grid grid-cols-2 gap-2 pl-2">
                                            {category.items.map((item) => (
                                                <Link
                                                    key={item}
                                                    href={`${category.href}?type=${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                    className="text-sm text-stone-500 hover:text-stone-800 py-2 px-2 rounded-lg hover:bg-stone-50 transition"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <Link
                                    href="/products"
                                    className="block font-medium text-lg mt-4 pt-4 border-t hover:text-stone-600 transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    All Products
                                </Link>
                            </div>
                        </div>

                        {/* Mobile search form */}
                        <div className="p-4 border-t bg-stone-50">
                            <form onSubmit={handleSearch} className="flex gap-2">
                                <Input
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 bg-white"
                                />
                                <Button type="submit" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                                    Go
                                </Button>
                            </form>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}