"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Search,
    PhoneCall,
    User,
    MessageCircle,
    Share2,
    X,
    Store, ShoppingBag, Package
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/contact";

export default function FooterMobileMenu() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const track = (action: string) => {
        console.log("analytics:", action);
    };

    const navItems = [
        { href: "/", label: "خانه", icon: Home },
        { href: "/search", label: "جستجو", icon: Search },
        { action: "contact", label: "خرید", icon: PhoneCall },
        { href: "/account", label: "حساب", icon: User },
        { href: "/products", label: "محصولات", icon: Store },
    ];

    return (
        <>
            {/*  شیت تماس (پشت زمینه) */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/*  شیت تماس (برگه پایین) */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                        className="md:hidden fixed bottom-20 left-4 right-4 z-[120] rounded-3xl bg-white p-5 shadow-2xl"
                    >
                        <button onClick={() => setOpen(false)} className="absolute top-4 right-4">
                            <X size={18} />
                        </button>
                        <h2 className="text-center font-semibold text-sm mb-5">خرید تلفنی</h2>
                        <div className="space-y-4">
                            <a
                                href={`https://wa.me/${contact.phoneNumber}`}
                                onClick={() => track('whatsapp_click')}
                                className="flex items-center gap-3 hover:gap-4 transition-all"
                            >
                                <MessageCircle size={18} /> پیام در واتساپ
                            </a>
                            <a
                                href={`tel:${contact.phoneNumber}`}
                                onClick={() => track('call_click')}
                                className="flex items-center gap-3 hover:gap-4 transition-all"
                            >
                                <PhoneCall size={18} /> تماس مستقیم
                            </a>
                            {contact.eitaaUrl && (
                                <a
                                    href={contact.eitaaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track('social_click')}
                                    className="flex items-center gap-3 hover:gap-4 transition-all"
                                >
                                    <Share2 size={18} /> شبکه اجتماعی
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/*  منوی پایین با انیمیشن هاور */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-white/90 backdrop-blur-md border-t shadow-lg">
                <div className="grid grid-cols-5 items-end">
                    {/* ۱. حساب */}
                    <Link
                        href="/profile"
                        className={cn(
                            "flex flex-col items-center gap-1 py-3 transition-all duration-200",
                            "hover:scale-110 hover:text-primary active:scale-95",
                            pathname === '/profile' ? 'text-primary' : 'text-stone-600'
                        )}
                    >
                        <User size={22} strokeWidth={1.5} />
                        <span className="text-[11px] font-medium">حساب</span>
                    </Link>

                    {/* ۲. جستجو */}
                    <Link
                        href="/search"
                        className={cn(
                            "flex flex-col items-center gap-1 py-3 transition-all duration-200",
                            "hover:scale-110 hover:text-primary active:scale-95",
                            pathname === '/search' ? 'text-primary' : 'text-stone-600'
                        )}
                    >
                        <Search size={22} strokeWidth={1.5} />
                        <span className="text-[11px] font-medium">جستجو</span>
                    </Link>

                    {/* ۳. محصولات (دایره‌ای وسط) */}
                    <Link
                        href="/products"
                        className="relative -top-1 flex flex-col items-center justify-center transition-all duration-200 active:scale-95"
                    >
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700 shadow-lg hover:shadow-xl flex items-center justify-center border-2 border-neutral-400"
                        >
                            <Package size={26} strokeWidth={1.8} className="text-neutral-100" />
                        </motion.div>
                        <span className="text-[11px] font-medium text-neutral-800 mt-1">محصولات</span>
                    </Link>

                    {/* ۴. خرید (همان تماس) */}
                    <button
                        onClick={() => {
                            setOpen(true);
                            track('fab_open');
                        }}
                        className="flex flex-col items-center gap-1 py-3 transition-all duration-200 hover:scale-110 hover:text-primary active:scale-95 text-stone-600"
                    >
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        <span className="text-[11px] font-medium">خرید</span>
                    </button>

                    {/* ۵. خانه */}
                    <Link
                        href="/"
                        className={cn(
                            "flex flex-col items-center gap-1 py-3 transition-all duration-200",
                            "hover:scale-110 hover:text-primary active:scale-95",
                            pathname === '/' ? 'text-primary' : 'text-stone-600'
                        )}
                    >
                        <Home size={22} strokeWidth={1.5} />
                        <span className="text-[11px] font-medium">خانه</span>
                    </Link>
                </div>
            </div>
        </>
    );
}