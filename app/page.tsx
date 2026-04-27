// app/page.tsx
import HeroSlider from "@/components/home/HeroSlider";
import NewArrivals from "@/components/products/NewArrivals";
import BestSellers from "@/components/products/BestSellers";
import CategoryGrid from "@/components/home/CategoryGrid";

/**
 * Home page - Main landing page for Leather House
 * Features hero slider, new arrivals, best sellers, and category grid
 */
export default function HomePage() {
    return (
        <main>
            <HeroSlider />
            <NewArrivals />
            <BestSellers />
            <CategoryGrid />
        </main>
    );
}