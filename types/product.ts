// types/product.ts
export type ProductCategory = "bags" | "boots" | "coats" | "accessories";
export type ProductTag = "all" | "men" | "women" | "kids" | "accessories";

/**
 * Product interface representing a leather good
 */
export interface Product {
    id: string;
    name: string;
    detail: string;
    imageUrl: string;
    category: ProductCategory;
    price: number;
    tags: ProductTag[];
    inStock: boolean;
    sizes?: string[];
    isNew: boolean;
    isBestSeller?: boolean;
    rank?: number;
}

/**
 * Cart item extends product with quantity
 */
export interface CartItem extends Product {
    quantity: number;
}

/**
 * Cart state interface
 */
export interface CartState {
    items: CartItem[];
    total: number;
    itemCount: number;
    isLoading: boolean;
}