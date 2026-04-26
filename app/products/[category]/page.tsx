import Link from "next/link";
import { getProductsByCategory } from "@/services/productService";

export default async function CategoryPage({
                                               params,
                                           }: {
    params: { category: string };
}) {
    const products = await getProductsByCategory(params.category);

    return (
        <main className="bg-[#faf9f7] min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-16">

                <h1 className="text-5xl font-light capitalize mb-10">
                    {params.category}
                </h1>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <Link
                            key={p.id}
                            href={`/products/${p.category}/${p.id}`}
                            className="bg-white border rounded-2xl overflow-hidden"
                        >
                            <img src={p.imageUrl} className="w-full h-64 object-cover" />
                            <div className="p-5">
                                <h2 className="text-xl">{p.name}</h2>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}