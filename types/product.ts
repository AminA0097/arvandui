export type Product = {
    id: string;
    name: string;
    detail: string;
    imageUrl: string;
    category: "bags" | "boots" | "coats" | "accessories";
    price: number;
    inStock: boolean;
    sizes?: string[];
    isNew: boolean;
    isBestSeller?: boolean;
    rank?: number;
};