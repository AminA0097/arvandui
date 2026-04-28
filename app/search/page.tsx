"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import Breadcrumb from "@/components/ui/Breadcrumbs";
import { Search, X } from "lucide-react";

// تابع تبدیل اعداد به فارسی
const toPersianNumbers = (num: number): string => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export default function SearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const q = searchParams.get("q") || "";
    const category = searchParams.get("category") || "";

    const [query, setQuery] = useState(q);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    // دبانس + جستجو با در نظر گرفتن دسته‌بندی
    useEffect(() => {
        if (!q) return;

        setLoading(true);

        const timer = setTimeout(() => {
            const url = new URL("/api/search", window.location.origin);
            url.searchParams.set("q", q);

            if (category) {
                url.searchParams.set("category", category);
            }

            fetch(url.toString())
                .then(res => res.json())
                .then(setProducts)
                .finally(() => setLoading(false));
        }, 500);

        return () => clearTimeout(timer);
    }, [q, category]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}${category ? `&category=${category}` : ""}`);
        }
    };

    // تبدیل نام دسته‌بندی به فارسی
    const getCategoryName = (cat: string) => {
        switch(cat) {
            case "men": return "مردانه";
            case "women": return "زنانه";
            case "kids": return "بچگانه";
            default: return "اکسسوری";
        }
    };

    return (
        <main className="bg-[#faf9f7] min-h-screen py-12 pt-28 md:pt-32">
            <div className="max-w-4xl mx-auto px-6">

                <Breadcrumb />

                <h1 className="text-3xl font-light mb-6 text-right font-vazir">جستجو</h1>

                {/* باکس جستجو */}
                <form onSubmit={handleSearch} className="mb-10">
                    <div className="relative">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />

                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="جستجوی محصولات..."
                            className="w-full pr-12 pl-12 py-4 border rounded-2xl bg-white text-right font-vazir text-base"
                            dir="rtl"
                        />

                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                className="absolute left-4 top-1/2 -translate-y-1/2 hover:text-stone-600 transition"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </form>

                {/* نتایج */}
                {loading ? (
                    <div className="py-10 text-center font-vazir text-stone-600">در حال بارگذاری...</div>
                ) : (
                    <>
                        <p className="text-sm text-stone-500 mb-4 text-right font-vazir">
                            {toPersianNumbers(products.length)} نتیجه برای "{q}"
                            {category && ` در دسته ${getCategoryName(category)}`}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {products.map(p => (
                                <Link
                                    key={p.id}
                                    href={`/products/${p.category}/${p.id}`}
                                    className="group flex gap-4 bg-white border rounded-xl p-3 hover:shadow-md transition text-right"
                                >
                                    {/* تصویر */}
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100">
                                        <img
                                            src={p.imageUrl}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                        />
                                    </div>

                                    {/* محتوا */}
                                    <div className="flex flex-col justify-center flex-1 gap-1">
                                        <p className="text-xs text-stone-400 tracking-widest text-right font-vazir">
                                            {getCategoryName(p.category)}
                                        </p>

                                        <h3 className="font-medium text-stone-900 group-hover:text-stone-700 text-right font-vazir">
                                            {p.name}
                                        </h3>

                                        <p className="text-sm text-stone-500 text-right font-vazir">
                                            {toPersianNumbers(p.price)} تومان
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* پیام عدم وجود نتیجه */}
                        {products.length === 0 && q && (
                            <div className="text-center py-16">
                                <p className="text-stone-400 font-vazir text-lg">
                                    متاسفانه محصولی یافت نشد
                                </p>
                                <p className="text-stone-300 text-sm mt-2 font-vazir">
                                    کلمه دیگری جستجو کنید
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    );
}