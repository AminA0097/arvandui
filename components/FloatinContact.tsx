"use client";

import { useEffect, useState } from "react";
import { PhoneCall, MessageCircle, Share2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/contact";

export default function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    const track = (action: string) => {
        console.log("analytics:", action);
    };

    // تا زمانی که اندازه مشخص نشده یا موبایل است، نمایش نده
    if (isDesktop === null || !isDesktop) {
        return null;
    }

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Contact Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                        }}
                        className="
                            fixed
                            bottom-28
                            right-6
                            z-50
                            w-72
                            rounded-2xl
                            bg-white
                            p-5
                            shadow-2xl
                            border border-gray-100
                        "
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="
                                absolute
                                top-3
                                right-3
                                p-1
                                rounded-full
                                hover:bg-gray-100
                                transition
                            "
                        >
                            <X size={18} />
                        </button>

                        <h2 className="text-center text-sm font-semibold mb-5">
                            خرید تلفنی
                        </h2>

                        <div className="space-y-3">
                            <a
                                href={`https://wa.me/${contact.phoneNumber}`}
                                onClick={() => track("whatsapp_click")}
                                className="
                                    flex items-center gap-3
                                    text-sm
                                    hover:bg-gray-50
                                    p-2 rounded-xl
                                    transition
                                "
                            >
                                <MessageCircle size={18} />
                                پیام در واتساپ
                            </a>

                            <a
                                href={`tel:${contact.phoneNumber}`}
                                onClick={() => track("call_click")}
                                className="
                                    flex items-center gap-3
                                    text-sm
                                    hover:bg-gray-50
                                    p-2 rounded-xl
                                    transition
                                "
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
                                    className="
                                        flex items-center gap-3
                                        text-sm
                                        hover:bg-gray-50
                                        p-2 rounded-xl
                                        transition
                                    "
                                >
                                    <Share2 size={18} />
                                    شبکه اجتماعی
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => {
                    setOpen(true);
                    track("fab_open");
                }}
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="
                    fixed
                    bottom-6
                    right-6
                    z-[9999]
                    h-14
                    w-14
                    rounded-full
                    bg-black
                    text-white
                    flex items-center justify-center
                    shadow-xl
                    hover:bg-neutral-800
                    transition-colors
                "
                aria-label="Contact"
            >
                <PhoneCall size={20} />
            </motion.button>
        </>
    );
}