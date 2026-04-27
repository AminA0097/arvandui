// components/home/CategoryGrid.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Category grid data
 */
const categories = [
    {
        name: "Bags",
        image: "/category/bags.jpg",
        count: 12,
        href: "/products/bags",
        description: "Handcrafted leather bags",
    },
    {
        name: "Boots",
        image: "/category/boots.jpg",
        count: 8,
        href: "/products/boots",
        description: "Premium leather boots",
    },
    {
        name: "Coats",
        image: "/category/coats.jpg",
        count: 6,
        href: "/products/coats",
        description: "Timeless leather jackets",
    },
    {
        name: "Accessories",
        image: "/category/accessories.jpg",
        count: 14,
        href: "/products/accessories",
        description: "Complete your look",
    },
];

/**
 * Category grid component for homepage
 * Shows product categories with images and links
 */
export default function CategoryGrid() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                        Shop by Category
                    </p>
                    <h2 className="text-3xl md:text-4xl font-light">Explore Collections</h2>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                        Discover our curated selection of premium leather goods
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={category.href}
                                className="group relative block overflow-hidden rounded-2xl aspect-[3/4]"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-light group-hover:translate-x-2 transition-transform duration-300">
                                        {category.name}
                                    </h3>
                                    <p className="text-white/70 text-sm mt-1">
                                        {category.count} products
                                    </p>
                                    <p className="text-white/50 text-xs mt-2">
                                        {category.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}