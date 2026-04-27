"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneCall, MessageCircle, Share2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/contact";

export default function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const lastScroll = useRef(0);
    const scrollDepth = useRef(0);

    // 📱 detect mobile
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // 📊 CLICK TRACKING (analytics)
    const track = (action: string) => {
        console.log("analytics:", action);

        // future: send to API
        // fetch("/api/track", { method: "POST", body: JSON.stringify({ action }) })
    };

    // 👀 scroll behavior + smart suggestion
    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;

            // hide/show FAB
            setVisible(!(y > lastScroll.current && y > 100));

            // scroll depth tracking
            scrollDepth.current = y;

            // smart suggestion trigger
            if (y > 600 && !open) {
                // user is engaged → suggest contact
                setVisible(true);
            }

            lastScroll.current = y;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [open]);

    if (!isMobile) return null;

    return (
        <>
            {/* BACKDROP */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* PANEL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="fixed bottom-28 right-5 z-50 w-72 bg-white rounded-2xl shadow-2xl p-4"
                    >
                        {/* H1 */}
                        <h1 className="text-center text-sm font-semibold mb-4">
                            خرید تلفنی
                        </h1>

                        {/* CLOSE */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-2"
                        >
                            <X size={18} />
                        </button>

                        {/* WHATSAPP (MAIN CONVERSION BUTTON) */}

                        {/* CALL */}
                        <a
                            href={`tel:${contact.phoneNumber}`}
                            onClick={() => track("call_click")}
                            className="flex items-center gap-2 text-sm mb-2"
                        >
                            <PhoneCall size={16} />
                            تماس مستقیم
                        </a>

                        {/* SOCIAL */}
                        <a
                            href={contact.eitaaUrl}
                            target="_blank"
                            onClick={() => track("social_click")}
                            className="flex items-center gap-2 text-sm"
                        >
                            <Share2 size={16} />
                            شبکه اجتماعی
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FLOATING BUTTON */}
            <AnimatePresence>
                {visible && (
                    <motion.button
                        onClick={() => {
                            setOpen(true);
                            track("fab_open");
                        }}
                        initial={{ scale: 0.6, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.6, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="fixed bottom-18 right-6 z-[9999] w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-xl"
                    >
                        <PhoneCall size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}