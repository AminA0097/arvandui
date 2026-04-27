// context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Product, CartItem, CartState } from "@/types/product";

/**
 * Cart context interface with all available actions
 */
interface CartContextType extends CartState {
    addToCart: (product: Product, quantity: number) => Promise<void>;
    removeFromCart: (productId: string) => Promise<void>;
    updateQuantity: (productId: string, quantity: number) => Promise<void>;
    clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Cart Provider component
 * Manages shopping cart state with localStorage persistence
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Calculate derived values
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    /**
     * Load cart from localStorage on mount
     */
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart from localStorage", error);
            }
        }
        setIsLoading(false);
    }, []);

    /**
     * Save cart to localStorage whenever it changes
     */
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("cart", JSON.stringify(items));
        }
    }, [items, isLoading]);

    /**
     * Add product to cart or increase quantity if exists
     */
    const addToCart = useCallback(async (product: Product, quantity: number) => {
        setIsLoading(true);
        try {
            setItems(prevItems => {
                const existingItem = prevItems.find(item => item.id === product.id);

                if (existingItem) {
                    // Update quantity of existing item
                    return prevItems.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    );
                } else {
                    // Add new item
                    return [...prevItems, { ...product, quantity }];
                }
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    /**
     * Remove product from cart
     */
    const removeFromCart = useCallback(async (productId: string) => {
        setIsLoading(true);
        try {
            setItems(prevItems => prevItems.filter(item => item.id !== productId));
        } finally {
            setIsLoading(false);
        }
    }, []);

    /**
     * Update quantity of a product in cart
     */
    const updateQuantity = useCallback(async (productId: string, quantity: number) => {
        if (quantity <= 0) {
            await removeFromCart(productId);
            return;
        }

        setIsLoading(true);
        try {
            setItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        } finally {
            setIsLoading(false);
        }
    }, [removeFromCart]);

    /**
     * Clear entire cart
     */
    const clearCart = useCallback(async () => {
        setIsLoading(true);
        try {
            setItems([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const value: CartContextType = {
        items,
        total,
        itemCount,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook to use cart context
 */
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}