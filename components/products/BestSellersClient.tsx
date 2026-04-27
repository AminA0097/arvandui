"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
    products?: Product[];
};

export default function BestSellersClient({
                                              products = []
                                          }: Props) {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    if (!Array.isArray(products) || products.length === 0) {
        return (
            <section className="py-28 text-center text-stone-400">
                No best sellers available
            </section>
        );
    }

    return (
        <section className="bg-[#faf9f7] py-28">

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-14">

                    <p className="uppercase tracking-[0.35em] text-[10px] text-stone-400 mb-2">
                        Curated Selection
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light">
                        Best Sellers
                    </h2>

                </div>

                {/* SLIDER */}
                <div className="overflow-hidden" ref={emblaRef}>

                    <div className="flex">

                        {products.map((p, index) => (

                            <div
                                key={p.id}
                                className="flex-[0_0_100%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-3"
                            >

                                <div className="relative w-[200px] h-[200px] mx-auto">

                                    <Link
                                        href={`/products/${p.category}/${p.id}`}
                                        className="
block w-full h-full
bg-white border border-stone-100
rounded-xl overflow-hidden group
"
                                    >

                                        {/* rank */}
                                        <div className="
absolute top-2 left-2
text-[10px]
bg-black/80 text-white
px-2 py-[2px]
rounded-full
">
                                            #{p.rank ?? index + 1}
                                        </div>

                                        {/* image */}
                                        <div className="h-[140px] overflow-hidden bg-stone-100">
                                            <img
                                                src={p.imageUrl}
                                                alt={p.name}
                                                className="
w-full h-full object-cover
group-hover:scale-105
transition duration-500
"
                                            />
                                        </div>

                                        {/* footer */}
                                        <div className="p-2">

                                            <p className="text-[11px] text-stone-800 truncate">
                                                {p.name}
                                            </p>

                                            <div className="flex justify-between mt-1">

                                                <span className="text-[10px] text-stone-500">
                                                    ${p.price}
                                                </span>

                                                <span className="text-[10px] text-stone-600">
                                                    View
                                                </span>

                                            </div>

                                        </div>

                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* PROGRESS */}
                <div className="mt-8 h-[2px] bg-stone-200 relative overflow-hidden rounded">

                    <div
                        className="h-full bg-stone-900 transition-all duration-300"
                        style={{
                            width: scrollSnaps.length
                                ? `${((selectedIndex + 1) / scrollSnaps.length) * 100}%`
                                : "0%",
                        }}
                    />
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-6">

                    {scrollSnaps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`
w-2.5 h-2.5 rounded-full transition
${i === selectedIndex
                                ? "bg-stone-900 scale-125"
                                : "bg-stone-300"
                            }
`}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}