export type ProductCategory = 'bags' | 'boots' | 'coats' | 'accessories';
export type ProductTag = 'men' | 'women' | 'kids' | 'accessories';
export type SortOption = 'newest' | 'price_asc' | 'price_desc' | 'popular' | 'bestseller';
export type StockFilter = 'all' | 'in_stock' | 'out_of_stock';

export const tagLabels: Record<ProductTag, string> = {
    men: 'مردانه',
    women: 'زنانه',
    kids: 'بچگانه',
    accessories: 'اکسسوری',
};

export const categoryLabels: Record<ProductCategory, string> = {
    bags: 'کیف',
    boots: 'چکمه',
    coats: 'کت',
    accessories: 'اکسسوری',
};

export interface Product {
    id: string;
    name: string;
    detail: string;
    imageUrl: string;
    category: ProductCategory;
    tags: ProductTag[];
    price: number;
    inStock: boolean;
    sizes?: string[];
    isNew: boolean;
    isBestSeller?: boolean;
    rank?: number;
    views: number;
    createdAt: string;
    discount?: number;
}

export interface Filters {
    query: string;
    category: ProductCategory | 'all';
    sort: SortOption;
    stock: StockFilter;
    minPrice: number;
    maxPrice: number;
    tags?: ProductTag[];      // optional: filter by tags (comma separated)
    cursor: string | null;
    limit: number;
}

export const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'price_asc', label: 'ارزان‌ترین' },
    { value: 'price_desc', label: 'گران‌ترین' },
    { value: 'popular', label: 'محبوب‌ترین' },
    { value: 'bestseller', label: 'پرفروش‌ترین' },
];

export const stockOptions: { value: StockFilter; label: string }[] = [
    { value: 'all', label: 'همه' },
    { value: 'in_stock', label: 'موجود' },
    { value: 'out_of_stock', label: 'ناموجود' },
];