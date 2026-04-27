import HeroSlider from '@/components/hero/HeroSlider';
import NewArrivals from '@/components/products/NewArrivals';
import CategoryShowcase from '@/components/products/BestSellersClient';
import BestSellers from "@/components/products/BestSellers";

export default function HomePage() {
    return (
        <main>
            {/*<HeroSlider />*/}
            <NewArrivals />
            <BestSellers />
        </main>
    );
}