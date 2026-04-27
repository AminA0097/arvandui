// components/home/HeroSlider.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * Hero slide data
 */
const slides = [
    {
        id: "1",
        title: "Timeless Leather Craftsmanship",
        subtitle: "Discover our collection of handcrafted leather goods",
        imageUrl: "/hero/bags.jpg",
        ctaText: "Shop Now",
        ctaLink: "/products/bags",
    },
    {
        id: "2",
        title: "Premium Leather Boots",
        subtitle: "Built to last with superior materials",
        imageUrl: "/hero/boots.jpg",
        ctaText: "Explore Boots",
        ctaLink: "/products/boots",
    },
    {
        id: "3",
        title: "Iconic Leather Jackets",
        subtitle: "Classic styles reimagined for modern life",
        imageUrl: "/hero/jackets.jpg",
        ctaText: "Shop Jackets",
        ctaLink: "/products/coats",
    },
];

/**
 * Auto-scrolling hero slider with animations
 */
export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="relative h-[70vh] min-h-[500px] md:h-[80vh] overflow-hidden">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-4 md:px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="max-w-2xl text-white"
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
                                    {slides[currentIndex].title}
                                </h1>
                                <p className="mt-4 text-lg md:text-xl text-white/90">
                                    {slides[currentIndex].subtitle}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="mt-8 bg-white text-primary hover:bg-white/90"
                                >
                                    <Link href={slides[currentIndex].ctaLink}>
                                        {slides[currentIndex].ctaText} →
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}