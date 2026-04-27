import { NextResponse } from "next/server";
import { products } from "@/lib/db";

export async function GET() {

    const bestSellers = products
        .filter(
            p =>
                p.isBestSeller === true &&
                p.inStock === true
        )
        .sort(
            (a,b)=>
                (a.rank ?? Number.MAX_SAFE_INTEGER)
                -
                (b.rank ?? Number.MAX_SAFE_INTEGER)
        )
        .slice(0,8);

    return NextResponse.json(
        bestSellers
    );
}