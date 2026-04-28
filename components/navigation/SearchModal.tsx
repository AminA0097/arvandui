"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SearchModal({
                                        open,
                                        onClose,
                                    }: {
    open: boolean;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-lg flex items-start justify-center pt-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                        className="bg-white dark:bg-[#111] w-[90%] max-w-xl rounded-2xl p-6 shadow-xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">جستجو</h3>
                            <button onClick={onClose}>
                                <X />
                            </button>
                        </div>

                        <input
                            autoFocus
                            placeholder="چی دنبالش می‌گردی امین؟ 😏"
                            className="w-full border rounded-lg px-4 py-3 bg-transparent focus:outline-none"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
