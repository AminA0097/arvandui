import { NextResponse } from "next/server";
import { products } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ category: string; id: string }> }
) {
    const { category, id } = await params;
    const product = products.find(p => p.category === category && p.id === id);
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
}