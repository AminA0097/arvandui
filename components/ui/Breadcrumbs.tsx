"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { useEffect } from "react";

const HIDE_SEGMENT = (seg: string) => /^\d+$/.test(seg);

// نگاشت اسلاگ‌های انگلیسی به فارسی
const persianLabels: Record<string, string> = {
    "men": "مردانه",
    "women": "زنانه",
    "kids": "بچگانه",
    "accessories": "اکسسوری",
    "products": "محصولات",
    "search": "جستجو",
    "cart": "سبد خرید",
    "profile": "پروفایل",
    "checkout": "تسویه حساب",
    "about": "درباره ما",
    "contact": "تماس با ما",
    "blog": "وبلاگ",
    "faq": "سوالات متداول",
};

// تبدیل متن به فارسی
const toPersianLabel = (segment: string): string => {
    if (persianLabels[segment]) {
        return persianLabels[segment];
    }
    return decodeURIComponent(segment);
};

export default function Breadcrumb() {
    const pathname = usePathname();

    const rawSegments = pathname.split("/").filter(Boolean);
    const segments = rawSegments.filter(seg => !HIDE_SEGMENT(seg));

    const items = segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");

        return {
            label: toPersianLabel(segment),
            href
        };
    });

    // تنظیم عنوان صفحه به فارسی
    useEffect(() => {
        const title = segments.length > 0
            ? `آرواند | ${items.map(item => item.label).join(" / ")}`
            : "آرواند | صفحه اصلی";
        document.title = title;
    }, [pathname, segments, items]);

    return (
        <nav className="flex items-center gap-2 text-sm text-stone-400 mb-3">
            {/* خانه اول (سمت راست) */}
            <Link href="/" className="flex items-center gap-1 hover:text-stone-900">
                <Home size={14} />
                <span>خانه</span>
            </Link>

            {/* بقیه آیتم‌ها به ترتیب */}
            {items.map((item, i) => {
                const isLast = i === items.length - 1;

                return (
                    <div key={i} className="flex items-center gap-2">
                        <span className="text-stone-300">/</span>
                        {isLast ? (
                            <span className="text-stone-600 font-medium">{item.label}</span>
                        ) : (
                            <Link href={item.href} className="hover:text-stone-900">
                                {item.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}