// app/products/[category]/page.tsx
import Link from "next/link";
import { getProductsByCategory } from "@/services/productService";
import { formatPrice } from "@/lib/utils";

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params; // ✅ Await params first
    const products = await getProductsByCategory(category);

    return (
        <main className="bg-background min-h-screen py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-light capitalize mb-10">
                    {category}
                </h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className="group bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="aspect-square overflow-hidden bg-muted">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h2 className="text-xl font-medium">{product.name}</h2>
                                <p className="text-muted-foreground mt-2">{formatPrice(product.price)}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground">No products found in this category.</p>
                        <Link href="/products" className="inline-block mt-4 text-primary hover:underline">
                            Browse all products →
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}