// app/products/[category]/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Heart, ShoppingBag, Check, AlertCircle, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/types/product";
import Breadcrumb from "@/components/ui/Breadcrumbs";

// تبدیل اعداد به فارسی با کاما
const toPersianNumbers = (num: number): string => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

const formatPriceWithComma = (price: number): string => {
    if (price === 0) return '۰';
    return toPersianNumbers(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

// برچسب دسته‌بندی فارسی
const categoryLabels: Record<string, string> = {
    bags: "کیف",
    boots: "چکمه",
    coats: "کت",
    accessories: "اکسسوری",
};

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState(0);
    const [isAdding, setIsAdding] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // دریافت محصول
    useEffect(() => {
        fetch(`/api/products/${params.category}/${params.id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Product not found");
                return res.json();
            })
            .then(setProduct)
            .catch(() => setProduct(null))
            .finally(() => setLoading(false));
    }, [params.category, params.id]);

    const handleAddToCart = async () => {
        if (!product) return;

        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            toast({
                title: "انتخاب سایز",
                description: "لطفا قبل از افزودن به سبد خرید، سایز مورد نظر را انتخاب کنید.",
                variant: "destructive",
            });
            return;
        }

        setIsAdding(true);
        await addToCart(product, quantity);
        toast({
            title: "افزوده شد",
            description: `${quantity} × ${product.name} به سبد خرید اضافه شد.`,
            variant: "success",
        });
        setIsAdding(false);
    };

    const handleBuyNow = async () => {
        if (!product) return;
        await addToCart(product, quantity);
        router.push("/cart");
    };

    // محاسبه قیمت نهایی با تخفیف
    const hasDiscount = product?.discount && product.discount > 0;
    const finalPrice = hasDiscount && product ? product.price * (1 - product.discount / 100) : product?.price || 0;

    // برچسب ویژه محصول
    const getProductBadge = () => {
        if (!product) return null;
        if (!product.inStock) return { label: "ناموجود", color: "bg-red-500 text-white", icon: <AlertCircle size={12} /> };
        if (product.isBestSeller) return { label: "پرفروش", color: "bg-amber-500 text-white", icon: <TrendingUp size={12} /> };
        if (product.isNew) return { label: "جدید", color: "bg-emerald-500 text-white", icon: <Sparkles size={12} /> };
        return null;
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12 pt-28 md:pt-32">
                <div className="animate-pulse">
                    <div className="h-8 w-24 bg-stone-200 rounded mb-8" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="aspect-square bg-stone-200 rounded-2xl" />
                        <div className="space-y-4">
                            <div className="h-8 w-3/4 bg-stone-200 rounded" />
                            <div className="h-4 w-1/2 bg-stone-200 rounded" />
                            <div className="h-12 w-32 bg-stone-200 rounded" />
                            <div className="h-24 bg-stone-200 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center pt-28 md:pt-32">
                <h1 className="text-4xl font-light mb-4 font-vazir">محصول یافت نشد</h1>
                <p className="text-stone-500 mb-8 font-vazir">محصول مورد نظر وجود ندارد یا حذف شده است.</p>
                <Button asChild>
                    <Link href="/products">مشاهده همه محصولات</Link>
                </Button>
            </div>
        );
    }

    const badge = getProductBadge();
    // برای گالری، در صورت نداشتن چند عکس، همان عکس اصلی تکرار می‌شود (قابل توسعه)
    const galleryImages = [product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl];

    return (
        <div className="container mx-auto px-4 py-6 md:py-12 pt-24 md:pt-32">
            <Breadcrumb />

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* گالری تصاویر */}
                <div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 relative">
                        <img
                            src={galleryImages[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        {badge && (
                            <div className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${badge.color}`}>
                                {badge.icon}
                                <span>{badge.label}</span>
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`aspect-square rounded-lg overflow-hidden bg-stone-100 transition-all ${
                                    selectedImage === idx ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
                                }`}
                            >
                                <img src={img} alt={`${product.name} - ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* اطلاعات محصول */}
                <div className="text-right">
                    <p className="text-sm uppercase tracking-wider text-stone-500 font-vazir">
                        {categoryLabels[product.category] || product.category}
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mt-2 font-vazir">
                        {product.name}
                    </h1>

                    {/* قیمت با تخفیف */}
                    <div className="flex items-center gap-3 mt-4 flex-wrap">
                        {hasDiscount ? (
                            <>
                                <span className="text-2xl text-red-400 line-through decoration-1">
                                    {formatPriceWithComma(product.price)}
                                </span>
                                <span className="text-3xl font-bold text-emerald-600">
                                    {formatPriceWithComma(Math.round(finalPrice))}
                                </span>
                                <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-vazir">
                                    {toPersianNumbers(product.discount!)}٪ تخفیف
                                </span>
                            </>
                        ) : (
                            <span className="text-3xl font-bold text-stone-800">
                                {formatPriceWithComma(product.price)}
                            </span>
                        )}
                        <span className="text-sm text-stone-400">تومان</span>

                        {/* وضعیت موجودی */}
                        {product.inStock ? (
                            <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-vazir">موجود</span>
                        ) : (
                            <span className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full font-vazir">ناموجود</span>
                        )}
                    </div>

                    {/* توضیحات */}
                    <div className="mt-6 pt-6 border-t border-stone-200">
                        <p className="text-stone-600 leading-relaxed font-vazir">{product.detail}</p>
                    </div>

                    {/* انتخاب سایز */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-8">
                            <label className="block text-sm font-medium mb-3 font-vazir">انتخاب سایز</label>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-full border transition-all font-vazir ${
                                            selectedSize === size
                                                ? "border-primary bg-primary text-white"
                                                : "border-stone-300 hover:border-primary hover:bg-stone-50"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* تعداد */}
                    <div className="mt-8">
                        <label className="block text-sm font-medium mb-3 font-vazir">تعداد</label>
                        <Select value={quantity.toString()} onValueChange={(v) => setQuantity(parseInt(v))}>
                            <SelectTrigger className="w-28 text-right">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5].map((q) => (
                                    <SelectItem key={q} value={q.toString()}>
                                        {toPersianNumbers(q)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* دکمه‌های اکشن */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="flex-1 gap-2"
                            onClick={handleAddToCart}
                            disabled={!product.inStock || isAdding}
                        >
                            <ShoppingBag className="h-5 w-5" />
                            {isAdding ? "در حال افزودن..." : "افزودن به سبد خرید"}
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1"
                            onClick={handleBuyNow}
                            disabled={!product.inStock}
                        >
                            خرید سریع
                        </Button>

                        <Button
                            size="icon"
                            variant="outline"
                            className="h-12 w-12"
                            onClick={() => setIsWishlisted(!isWishlisted)}
                        >
                            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                        </Button>
                    </div>

                    {/* اطلاعات ارسال و گارانتی */}
                    <div className="mt-8 pt-6 border-t border-stone-200 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <Check className="h-4 w-4 text-emerald-600" />
                            <span className="font-vazir">ارسال رایگان برای سفارش‌های بالای ۵۰۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <Check className="h-4 w-4 text-emerald-600" />
                            <span className="font-vazir">بازگشت آسان تا ۳۰ روز</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <Check className="h-4 w-4 text-emerald-600" />
                            <span className="font-vazir">۲ سال گارانتی اصالت و سلامت فیزیکی</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}