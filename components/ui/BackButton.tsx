"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
    label?: string;
    fallbackHref?: string;
}

export default function BackButton({ label = "Back", fallbackHref = "/products" }: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        // Check if there's history to go back to
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push(fallbackHref);
        }
    };

    return (
        <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition group mb-6"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">{label}</span>
        </button>
    );
}