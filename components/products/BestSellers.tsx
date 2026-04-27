import { getBestSellers } from "@/services/productService";
import BestSellersClient from "./BestSellersClient";

export default async function BestSellers() {
    const products = await getBestSellers();

    return (
        <BestSellersClient products={products ?? []} />
);
}