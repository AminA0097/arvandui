// components/products/NewArrivals.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

/**
 * New Arrivals carousel component
 * Displays newest products with auto-scrolling
 */
export default function NewArrivals() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data: Product[]) => {
                const newOnes = data.filter((p) => p.isNew === true);
                setProducts(newOnes.slice(0, 10));
                setLoading(false);
            })
            .catch(() => setLoading(false));
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
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        onSelect();
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    if (loading) {
        return (
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10">
                        <div className="h-4 w-32 bg-muted animate-pulse rounded mb-2" />
                        <div className="h-8 w-48 bg-muted animate-pulse rounded" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-[4/5] bg-muted animate-pulse rounded-2xl" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (products.length === 0) return null;

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                            Fresh Drops
                        </p>
                        <h2 className="text-3xl md:text-4xl font-light">New Arrivals</h2>
                    </div>
                    <Link
                        href="/products"
                        className="text-sm text-muted-foreground hover:text-primary transition flex items-center gap-1"
                    >
                        View all
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23%] px-3"
                            >
                                <Link
                                    href={`/products/${product.category}/${product.id}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                            {product.category}
                                        </p>
                                        <h3 className="font-medium mt-1 group-hover:text-primary transition line-clamp-1">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {formatPrice(product.price)}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 h-[2px] bg-muted rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                            width: scrollSnaps.length
                                ? `${((selectedIndex + 1) / scrollSnaps.length) * 100}%`
                                : "0%",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}