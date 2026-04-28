import Breadcrumb from "@/components/ui/Breadcrumbs";
import ProductsClient from "@/components/products/ProductsClient";

export default function ProductsPage() {
    return (
        <main className="bg-gradient-to-b from-[#faf9f7] to-white min-h-screen pb-24 md:pb-0">
            <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-8">
                <Breadcrumb />
                <ProductsClient />
            </div>
        </main>
    );
}