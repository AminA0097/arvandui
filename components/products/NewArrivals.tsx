"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Product } from "@/types/product";

export default function NewArrivals() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false,
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

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.filter((p: Product) => p.isNew));
                setLoading(false);
            });
    }, []);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        const snapList = emblaApi.scrollSnapList();
        setScrollSnaps(snapList);

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);

        // initial sync (safe)
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    if (loading) {
        return (
            <section className="bg-[#faf9f7] py-14 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <SkeletonGrid />
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#faf9f7] py-14 md:py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-light">
                        New Collection
                    </h2>
                </div>

                {/* Slider */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">

                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                            >
                                <Link
                                    href={`/products/${product.category}/${product.id}`}
                                    className="block bg-white border border-stone-200 rounded-2xl overflow-hidden hover:-translate-y-1 transition"
                                >
                                    <div className="aspect-[4/5] bg-stone-100 relative">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                                            New
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                                            {product.category}
                                        </p>
                                        <h3 className="text-xl font-light mt-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-stone-500 text-sm mt-1">
                                            ${product.price}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 h-[2px] bg-stone-200 relative overflow-hidden rounded">
                    <div
                        className="h-full bg-stone-900 transition-all duration-300"
                        style={{
                            width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%`,
                        }}
                    />
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {scrollSnaps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition ${
                                i === selectedIndex
                                    ? "bg-stone-900 scale-125"
                                    : "bg-stone-300"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

/* ---------------- Skeleton ---------------- */

function SkeletonGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-2xl overflow-hidden"
                >
                    <div className="aspect-[4/5] animate-pulse bg-stone-200" />
                    <div className="p-6 space-y-3">
                        <div className="h-3 w-20 bg-stone-200 rounded animate-pulse" />
                        <div className="h-5 w-40 bg-stone-200 rounded animate-pulse" />
                        <div className="h-3 w-16 bg-stone-200 rounded animate-pulse" />
                    </div>
                </div>
            ))}
        </div>
    );
}