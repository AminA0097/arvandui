// components/products/ProductCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
    product: Product;
    index?: number;
}

/**
 * Product card component with hover animations and add to cart functionality
 */
export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = async (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigation to product page
        await addToCart(product, 1);
        toast({
            title: "Added to cart",
            description: `${product.name} has been added to your cart.`,
            variant: "success",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <Link href={`/products/${product.category}/${product.id}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            loading="lazy"
                        />

                        {/* New Badge */}
                        {product.isNew && (
                            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                New
              </span>
                        )}

                        {/* Best Seller Badge */}
                        {product.isBestSeller && (
                            <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                Best Seller
              </span>
                        )}

                        {/* Out of Stock Overlay */}
                        {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Out of Stock
                </span>
                            </div>
                        )}

                        {/* Quick Add Button */}
                        {product.inStock && (
                            <Button
                                size="sm"
                                className="absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                onClick={handleAddToCart}
                            >
                                <ShoppingBag className="h-4 w-4 mr-2" />
                                Quick Add
                            </Button>
                        )}
                    </div>

                    <CardContent className="p-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            {product.category}
                        </p>
                        <h3 className="font-medium mt-1 line-clamp-1 group-hover:text-primary transition">
                            {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {product.detail}
                        </p>
                        <div className="flex items-center justify-between mt-3">
              <span className="text-lg font-semibold">
                {formatPrice(product.price)}
              </span>
                            <span className="text-xs text-muted-foreground">
                {product.sizes?.length ? `${product.sizes.length} sizes` : "One size"}
              </span>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}