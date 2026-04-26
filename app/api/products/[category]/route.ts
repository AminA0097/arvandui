import { NextResponse } from "next/server";
import { products } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ category: string }> }  // 👈 Type as Promise
) {
    const { category } = await params;  // 👈 Await the Promise first
    const filtered = products.filter(
        (p) => p.category === category
    );
    return NextResponse.json(filtered);
}