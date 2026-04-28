import { NextResponse } from "next/server";
import { products } from "@/lib/db";
import { redis } from "@/lib/redis";

export async function POST() {
    try {
        const masterKey = "products:master";
        const countKey = "products:count";

        // STANDARDIZED PAYLOAD (single source of truth)
        const payload = {
            items: products,
            count: products.length,
            cachedAt: new Date().toISOString(),
            version: 1,
        };

        // store master dataset بدون EXPIRE (تا ابد بمونه)
        await redis.set(masterKey, JSON.stringify(payload));

        // store lightweight metadata بدون EXPIRE
        await redis.set(countKey, String(products.length));

        return NextResponse.json({
            success: true,
            message: "Redis seeded successfully (no expiration)",
            count: products.length,
        });
    } catch (error) {
        console.error("Seed error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to seed products",
            },
            { status: 500 }
        );
    }
}