"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { useEffect } from "react";

const HIDE_SEGMENT = (seg: string) => /^\d+$/.test(seg);

export default function Breadcrumb() {
    const pathname = usePathname();

    const rawSegments = pathname.split("/").filter(Boolean);
    const segments = rawSegments.filter(seg => !HIDE_SEGMENT(seg));

    const items = segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");

        return {
            label: decodeURIComponent(segment),
            href
        };
    });

    // 🧠 Dynamic Title Sync
    useEffect(() => {
        const title =
            segments.length > 0
                ? `Home / ${segments.join(" / ")}`
                : "Home";

        document.title = title;
    }, [pathname]);

    return (
        <nav className="flex items-center gap-2 text-sm text-stone-400 mb-3">
            <Link href="/" className="flex items-center gap-1 hover:text-stone-900">
                <Home size={14} />
                Home
            </Link>

            {items.map((item, i) => {
                const isLast = i === items.length - 1;

                return (
                    <div key={i} className="flex items-center gap-2">
                        <span>/</span>

                        {isLast ? (
                            <span className="text-stone-600 font-medium capitalize">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-stone-900 capitalize"
                            >
                                {item.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}