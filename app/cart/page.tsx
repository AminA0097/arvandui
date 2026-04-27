// app/cart/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

/**
 * Shopping cart page with item management and order summary
 */
export default function CartPage() {
    const { items, total, itemCount, removeFromCart, updateQuantity, isLoading } = useCart();

    const handleRemoveItem = async (productId: string, productName: string) => {
        await removeFromCart(productId);
        toast({
            title: "Removed from cart",
            description: `${productName} has been removed.`,
        });
    };

    const handleUpdateQuantity = async (productId: string, quantity: string) => {
        await updateQuantity(productId, parseInt(quantity));
    };

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12 md:py-20 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h1 className="text-3xl font-light mb-4">Your cart is empty</h1>
                    <p className="text-muted-foreground mb-8">
                        Looks like you haven't added any items to your cart yet.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/products">Continue Shopping</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Header */}
            <div className="mb-8">
                <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                </Link>
                <h1 className="text-3xl md:text-4xl font-light">Shopping Cart</h1>
                <p className="text-muted-foreground mt-2">{itemCount} {itemCount === 1 ? "item" : "items"}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    <AnimatePresence mode="popLayout">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card>
                                    <CardContent className="p-4 flex gap-4">
                                        {/* Product Image */}
                                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {item.category}
                                            </p>
                                            <p className="text-sm font-medium mt-2">
                                                {formatPrice(item.price)}
                                            </p>
                                        </div>

                                        {/* Quantity and Total */}
                                        <div className="text-right">
                                            <Select
                                                value={item.quantity.toString()}
                                                onValueChange={(value) => handleUpdateQuantity(item.id, value)}
                                            >
                                                <SelectTrigger className="w-20">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[1, 2, 3, 4, 5].map((q) => (
                                                        <SelectItem key={q} value={q.toString()}>
                                                            Qty: {q}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>

                                            <p className="font-semibold mt-3">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="mt-2 text-red-500 hover:text-red-700"
                                                onClick={() => handleRemoveItem(item.id, item.name)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Order Summary */}
                <div>
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>{formatPrice(total)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span>Calculated at checkout</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Tax</span>
                                    <span>Calculated at checkout</span>
                                </div>
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex justify-between font-semibold text-lg">
                                        <span>Total</span>
                                        <span>{formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full" size="lg">
                                Proceed to Checkout
                            </Button>

                            <p className="text-xs text-center text-muted-foreground">
                                Free shipping on orders over $500
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}