"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

const menu = [
    { label: "مردانه", tag: "men" },
    { label: "زنانه", tag: "women" },
    { label: "بچگانه", tag: "kids" },
    { label: "اکسسوری", tag: "accessories" },
];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [underline, setUnderline] = useState({ width: 0, x: 0 });

    const getActiveIndex = () => {
        if (pathname === "/") {
            const currentTag = searchParams.get("tag") || "all";
            const activeMenuItem = menu.findIndex((item) => item.tag === currentTag);
            return activeMenuItem !== -1 ? activeMenuItem : -1;
        }
        // برای صفحات دیگر (مثل product)
        return -1;
    };

    const activeIndex = getActiveIndex();

    // scroll shrink
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // dynamic underline based on text width
    useEffect(() => {
        if (activeIndex === -1) return;

        const el = itemRefs.current[activeIndex];
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement!.getBoundingClientRect();

        setUnderline({
            width: rect.width,
            x: rect.left - parentRect.left,
        });
    }, [activeIndex, pathname, searchParams]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "py-4 bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-md"
                    : "py-8 bg-transparent"
            }`}
        >
            <div className="flex justify-center items-center">

                {/* Capsule */}
                <div
                    className={`relative hidden md:flex items-center rounded-full
          bg-white/40 dark:bg-white/10 backdrop-blur-xl
          border border-white/30 dark:border-white/10
          transition-all duration-500
          ${scrolled ? "px-10 py-3" : "px-16 py-5"}
          gap-[clamp(2rem,4vw,3.5rem)]`}
                >
                    <AnimatePresence mode="wait">
                        {!searchOpen ? (
                            <motion.div
                                key="menu"
                                className="flex items-center gap-[clamp(2rem,4vw,3.5rem)] relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {/* MENU */}
                                {menu.map((item, i) => (
                                    <Link
                                        key={item.tag}
                                        href={`/products?q=${item.tag}`}
                                        ref={(el) => {
                                            itemRefs.current[i] = el;
                                        }}
                                        className="relative text-sm text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        <span className={activeIndex === i ? "font-semibold" : ""}>
                                            {item.label}
                                        </span>

                                        {activeIndex === i && (
                                            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                                        )}
                                    </Link>
                                ))}

                                {/* sliding underline */}
                                {activeIndex !== -1 && (
                                    <motion.div
                                        className="absolute -bottom-2 h-[2px] bg-black dark:bg-white"
                                        animate={{
                                            width: underline.width,
                                            x: underline.x,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="search"
                                className="flex items-center gap-4 w-[500px]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const searchQuery = formData.get('search');
                                    if (searchQuery) {
                                        router.push(`/products?q=${encodeURIComponent(searchQuery.toString())}`);
                                        setSearchOpen(false);
                                    }
                                }} className="flex-1 flex gap-4">
                                    <input
                                        name="search"
                                        autoFocus
                                        placeholder="چی می‌خوای پیدا کنی؟ 😏"
                                        className="flex-1 bg-transparent border-b border-black dark:border-white focus:outline-none pb-1 text-right"
                                        dir="rtl"
                                    />
                                    <button type="submit" className="hidden">جستجو</button>
                                </form>
                                <button onClick={() => setSearchOpen(false)}>
                                    <X />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* BRAND */}
                    {!searchOpen && (
                        <Link
                            href="/"
                            className="tracking-[0.4em] text-xl font-light text-black dark:text-white"
                        >
                            ARVAND
                        </Link>
                    )}

                    {/* SEARCH BUTTON */}
                    {!searchOpen && (
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="p-2 rounded-full hover:bg-white/20 transition"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* MOBILE */}
                <div className="md:hidden flex justify-center w-full">
                    <Link href="/" className="tracking-[0.4em] text-lg font-light">
                        ARVAND
                    </Link>
                </div>
            </div>
        </header>
    );
}