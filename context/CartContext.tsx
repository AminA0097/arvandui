"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { Product } from "@/types/product";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    total: number;
    itemCount: number;
    addToCart: (product: Product, quantity?: number) => Promise<void>;
    removeFromCart: (id: string) => Promise<void>;
    updateQuantity: (id: string, quantity: number) => Promise<void>;
    isLoading: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCart = async () => {
        const res = await fetch("/api/cart");
        const data = await res.json();
        setItems(data.items || []);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (product: Product, quantity = 1) => {
        await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({ productId: product.id, quantity, product }),
        });
        await fetchCart();
    };

    const removeFromCart = async (id: string) => {
        await fetch("/api/cart", {
            method: "DELETE",
            body: JSON.stringify({ productId: id }),
        });
        await fetchCart();
    };

    const updateQuantity = async (id: string, quantity: number) => {
        await fetch("/api/cart", {
            method: "PUT",
            body: JSON.stringify({ productId: id, quantity }),
        });
        await fetchCart();
    };

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                total,
                itemCount,
                addToCart,
                removeFromCart,
                updateQuantity,
                isLoading,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
}