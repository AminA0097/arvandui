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
    ];

    return (
        <>
            {/* CONTACT BACKDROP */}
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

            {/* CONTACT SHEET */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 24,
                        }}
                        className="
                            md:hidden
                            fixed
                            bottom-20
                            left-4
                            right-4
                            z-[120]
                            rounded-3xl
                            bg-white
                            p-5
                            shadow-2xl
                        "
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4"
                        >
                            <X size={18} />
                        </button>

                        <h2 className="text-center font-semibold text-sm mb-5">
                            خرید تلفنی
                        </h2>

                        <div className="space-y-4">
                            <a
                                href={`https://wa.me/${contact.phoneNumber}`}
                                onClick={() => track("whatsapp_click")}
                                className="flex items-center gap-3"
                            >
                                <MessageCircle size={18} />
                                پیام در واتساپ
                            </a>

                            <a
                                href={`tel:${contact.phoneNumber}`}
                                onClick={() => track("call_click")}
                                className="flex items-center gap-3"
                            >
                                <PhoneCall size={18} />
                                تماس مستقیم
                            </a>

                            {contact.eitaaUrl && (
                                <a
                                    href={contact.eitaaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track("social_click")}
                                    className="flex items-center gap-3"
                                >
                                    <Share2 size={18} />
                                    شبکه اجتماعی
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* BOTTOM MENU */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-white border-t shadow-lg">
                <div className="grid grid-cols-4">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        if (item.action === "contact") {
                            return (
                                <button
                                    key="contact"
                                    onClick={() => {
                                        setOpen(true);
                                        track("fab_open");
                                    }}
                                    className="
                                        flex flex-col items-center gap-1 py-3
                                        text-stone-600
                                        active:scale-95
                                    "
                                >
                                    <Icon size={22} strokeWidth={1.5} />
                                    <span className="text-[11px] font-medium">
                                        خرید
                                    </span>
                                </button>
                            );
                        }

                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href!}
                                className={cn(
                                    "flex flex-col items-center gap-1 py-3 transition-all duration-200",
                                    "active:scale-95",
                                    isActive
                                        ? "text-primary"
                                        : "text-stone-600 hover:text-primary"
                                )}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                <Icon size={22} strokeWidth={1.5} />
                                <span className="text-[11px] font-medium">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}