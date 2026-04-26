import HeroSlider from '@/components/hero/HeroSlider';
import NewArrivals from '@/components/products/NewArrivals';
import CategoryShowcase from '@/components/products/CategoryShowcase';

export default function HomePage() {
    return (
        <main>
            {/*<HeroSlider />*/}
            <NewArrivals />
            <CategoryShowcase />
        </main>
    );
}