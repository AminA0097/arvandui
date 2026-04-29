'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Product } from '@/types/product';

async function fetchProducts(): Promise<Product[]> {
    const res = await fetch('/api/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

function useReveal() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const { ref, visible } = useReveal();
    return (
        <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
}

function ProductCard({ item, index }: { item: Product; index: number }) {
    return (
        <Reveal delay={index * 80}>
            <Link href={`/products/${item.category}/${item.id}`} className="block rounded-[26px] overflow-hidden bg-white border border-stone-200 shadow-[0_2px_12px_rgba(0,0,0,.03)] transition duration-300 hover:-translate-y-[2px]">
                <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover transition duration-700 hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{item.category}</p>
                    <h3 className="text-2xl font-light mt-2">{item.name}</h3>
                    <p className="mt-3 text-sm text-stone-500">{item.detail}</p>
                    <div className="mt-5 inline-block text-sm border-b border-stone-900">View Details</div>
                </div>
            </Link>
        </Reveal>
    );
}

export default function MobileProductReveal() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="bg-[#faf9f7] py-14 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-14">
                    <p className="uppercase tracking-[0.28em] text-xs text-stone-500 mb-6">تازه ترین ها</p>
                    <h2 className="text-3xl md:text-5xl font-light">Crafted Leather Pieces</h2>
                </div>
                {loading && <div className="text-stone-400 text-sm">Loading products...</div>}
                {!loading && (
                    <div className="grid gap-6 md:grid-cols-2">
                        {products.map((item, i) => (
                            <ProductCard key={item.id} item={item} index={i} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}