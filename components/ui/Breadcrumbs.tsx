"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
    label: string;
    href: string;
};

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-2 text-sm py-4 border-b border-stone-100 mb-8">
            <Link
                href="/"
                className="flex items-center gap-1 text-stone-400 hover:text-stone-900 transition"
            >
                <Home size={14} />
                <span>Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={item.href} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-stone-300" />
                    {index === items.length - 1 ? (
                        <span className="text-stone-900 font-medium">{item.label}</span>
                    ) : (
                        <Link
                            href={item.href}
                            className="text-stone-500 hover:text-stone-900 transition"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}