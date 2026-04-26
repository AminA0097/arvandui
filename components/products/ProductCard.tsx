import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({
                                        product,
                                    }: {
    product: Product;
}) {
    return (
        <Link
            href={`/products/${product.category}/${product.id}`}
            className="
                group block
                rounded-[24px]
                overflow-hidden
                border border-stone-200
                bg-white
                transition
                hover:-translate-y-[3px]
                hover:shadow-sm
            "
        >
            {/* IMAGE */}
            <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="
                        w-full h-full object-cover
                        transition duration-700
                        group-hover:scale-[1.04]
                    "
                />
            </div>

            {/* CONTENT */}
            <div className="p-6">

                {/* CATEGORY */}
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                    {product.category}
                </p>

                {/* NAME */}
                <h3 className="text-xl font-light text-stone-900 mt-2">
                    {product.name}
                </h3>

                {/* DETAIL */}
                <p className="mt-2 text-sm text-stone-500">
                    {product.detail}
                </p>

                {/* CTA */}
                <div className="mt-5 text-sm border-b border-stone-900 inline-block">
                    View Details
                </div>

            </div>
        </Link>
    );
}