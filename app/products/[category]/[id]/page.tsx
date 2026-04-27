// app/products/[category]/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Heart, ShoppingBag, Check } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumbs";

/**
 * Product detail page with image gallery, size selector, and add to cart
 */
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

    // Fetch product data
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
                title: "Select a size",
                description: "Please choose a size before adding to cart.",
                variant: "destructive",
            });
            return;
        }

        setIsAdding(true);
        await addToCart(product, quantity);
        toast({
            title: "Added to cart",
            description: `${quantity} × ${product.name} added to your cart.`,
            variant: "success",
        });
        setIsAdding(false);
    };

    const handleBuyNow = async () => {
        if (!product) return;
        await addToCart(product, quantity);
        router.push("/cart");
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="animate-pulse">
                    <div className="h-8 w-24 bg-muted rounded mb-8" />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="aspect-square bg-muted rounded-2xl" />
                        <div className="space-y-4">
                            <div className="h-8 w-3/4 bg-muted rounded" />
                            <div className="h-4 w-1/2 bg-muted rounded" />
                            <div className="h-12 w-32 bg-muted rounded" />
                            <div className="h-24 bg-muted rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-light mb-4">Product Not Found</h1>
                <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
                <Button asChild>
                    <Link href="/products">Browse Products</Link>
                </Button>
            </div>
        );
    }

    // Generate gallery images (using same image for demo, in production would have multiple)
    const galleryImages = [product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl];

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <Breadcrumb />
            {/* Back Button */}
            {/*<Button*/}
            {/*    variant="ghost"*/}
            {/*    className="mb-6 -ml-2"*/}
            {/*    onClick={() => router.back()}*/}
            {/*>*/}
            {/*    <ArrowLeft className="h-4 w-4 mr-2" />*/}
            {/*    Back*/}
            {/*</Button>*/}

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                        <img
                            src={galleryImages[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`aspect-square rounded-lg overflow-hidden bg-muted transition-all ${
                                    selectedImage === idx ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
                                }`}
                            >
                                <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">
                        {product.category}
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mt-2">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-3xl font-semibold">{formatPrice(product.price)}</span>
                        {product.inStock ? (
                            <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">In Stock</span>
                        ) : (
                            <span className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">Out of Stock</span>
                        )}
                    </div>

                    <div className="mt-6 pt-6 border-t">
                        <p className="text-muted-foreground leading-relaxed">{product.detail}</p>
                    </div>

                    {/* Size Selector */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="mt-8">
                            <label className="block text-sm font-medium mb-3">Select Size</label>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-full border transition-all ${
                                            selectedSize === size
                                                ? "border-primary bg-primary text-primary-foreground"
                                                : "border-border hover:border-primary"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="mt-8">
                        <label className="block text-sm font-medium mb-3">Quantity</label>
                        <Select value={quantity.toString()} onValueChange={(v) => setQuantity(parseInt(v))}>
                            <SelectTrigger className="w-28">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5].map((q) => (
                                    <SelectItem key={q} value={q.toString()}>
                                        {q}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="flex-1"
                            onClick={handleAddToCart}
                            disabled={!product.inStock || isAdding}
                        >
                            <ShoppingBag className="h-5 w-5 mr-2" />
                            {isAdding ? "Adding..." : "Add to Cart"}
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1"
                            onClick={handleBuyNow}
                            disabled={!product.inStock}
                        >
                            Buy Now
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

                    {/* Shipping Info */}
                    <div className="mt-8 pt-6 border-t space-y-3">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>Free shipping on orders over $500</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>30-day easy returns</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-green-600" />
                            <span>2-year warranty on all products</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}