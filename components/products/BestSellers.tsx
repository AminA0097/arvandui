'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

export default function BestSellers() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center', breakpoints: { '(min-width: 768px)': { align: 'start' } } },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        fetch('/api/products/best-sellers')
            .then((res) => res.json())
            .then(setProducts)
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    if (loading) return <BestSellersSkeleton />;
    if (!products.length) return null;

    return (
        <section className="py-16 md:py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Curated Selection</p>
                    <h2 className="text-3xl md:text-4xl font-light">Best Sellers</h2>
                    <p className="text-muted-foreground mt-2">Most loved by our customers</p>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {products.map((product, idx) => (
                            <div key={product.id} className="flex-[0_0_80%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-3">
                                <Link href={`/products/${product.category}/${product.id}`} className="group block">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {product.isBestSeller && (
                                            <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        #{idx + 1}
                      </span>
                                        )}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="font-medium group-hover:text-primary transition">{product.name}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{formatPrice(product.price)}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => emblaApi?.scrollTo(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === selectedIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function BestSellersSkeleton() {
    return (
        <section className="py-16 md:py-24 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="h-4 w-32 bg-muted animate-pulse rounded mx-auto mb-2" />
                    <div className="h-8 w-48 bg-muted animate-pulse rounded mx-auto" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-muted animate-pulse rounded-2xl" />
                    ))}
                </div>
            </div>
        </section>
    );
}