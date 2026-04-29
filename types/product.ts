/**
 * Core product and filter types shared across the app.
 */

export type ProductCategory = 'bags' | 'boots' | 'coats' | 'accessories';

export interface Product {
    id: string;
    name: string;
    category: ProductCategory;
    price: number;
    imageUrl: string;
    isNew?: boolean;
    isBestSeller?: boolean;
    discount?: number; // percentage
    inStock: boolean;
    views: number;
    tags: string[];
    detail?: string;
    rank?: number;
    createdAt: string;

}

export interface Filters {
    query: string;
    categories: ProductCategory[];
    sort: 'newest' | 'price_asc' | 'price_desc' | 'popular';
    stock: 'all' | 'in_stock' | 'out_of_stock';
    minPrice: number;
    maxPrice: number;
}

export const categoryLabels: Record<ProductCategory, string> = {
    bags: 'کیف',
    boots: 'چکمه',
    coats: 'کت',
    accessories: 'اکسسوری',
};

export const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'price_asc', label: 'قیمت: کم به زیاد' },
    { value: 'price_desc', label: 'قیمت: زیاد به کم' },
    { value: 'popular', label: 'محبوب‌ترین' },
];

export const stockOptions = [
    { value: 'all', label: 'همه' },
    { value: 'in_stock', label: 'موجود' },
    { value: 'out_of_stock', label: 'ناموجود' },
];

export const tagLabels: Record<string, string> = {
    leather: 'چرم',
    handcrafted: 'دست‌ساز',
    limited: 'نسخه محدود',
};