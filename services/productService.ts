import { Product } from "@/types/product";

// Helper to get base URL for server-side fetching
function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return ''; // Browser: use relative URLs
    }
    // Server: use absolute URL
    return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

export async function getProducts(): Promise<Product[]> {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/products`);

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/products/${category}`);

    if (!res.ok) {
        throw new Error('Failed to fetch products by category');
    }

    return res.json();
}

export async function getProductByCategoryAndId(category: string, id: string): Promise<Product> {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/products/${category}/${id}`);

    if (!res.ok) {
        throw new Error("Product not found");
    }

    return res.json();
}