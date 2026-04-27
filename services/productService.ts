import { products } from "@/lib/db";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    return products;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    return products.filter(p => p.category === category);
}

export async function getProductByCategoryAndId(category: string, id: string) {
    return products.find(
        p => p.category === category && p.id === id
    );
}

export async function getBestSellers(): Promise<Product[]> {
    console.log("Best Sellers");
    return products
        .filter(p => p.isBestSeller && p.inStock)
        .sort(
            (a,b)=>
                (a.rank ?? 999) - (b.rank ?? 999)
        )
        .slice(0, 8);
}