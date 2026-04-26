import { NextResponse } from "next/server";

type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
};

type Cart = {
    items: CartItem[];
    total: number;
};

// In-memory store (replace with database in production)
let carts: Record<string, Cart> = {};

function getCartId(req: Request): string {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/cartId=([^;]+)/);
    if (match) return match[1];
    return `cart_${Date.now()}_${Math.random()}`;
}

export async function GET(req: Request) {
    const cartId = getCartId(req);
    const cart = carts[cartId] || { items: [], total: 0 };
    return NextResponse.json(cart);
}

export async function POST(req: Request) {
    const cartId = getCartId(req);
    const { productId, quantity, product } = await req.json();

    if (!carts[cartId]) {
        carts[cartId] = { items: [], total: 0 };
    }

    const existing = carts[cartId].items.find((i) => i.id === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        carts[cartId].items.push({
            id: productId,
            name: product.name,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity,
        });
    }

    carts[cartId].total = carts[cartId].items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
    );

    const response = NextResponse.json(carts[cartId]);
    response.headers.set("Set-Cookie", `cartId=${cartId}; Path=/; HttpOnly`);
    return response;
}

export async function DELETE(req: Request) {
    const cartId = getCartId(req);
    const { productId } = await req.json();

    if (carts[cartId]) {
        carts[cartId].items = carts[cartId].items.filter((i) => i.id !== productId);
        carts[cartId].total = carts[cartId].items.reduce(
            (sum, i) => sum + i.price * i.quantity,
            0
        );
    }

    return NextResponse.json(carts[cartId] || { items: [], total: 0 });
}

export async function PUT(req: Request) {
    const cartId = getCartId(req);
    const { productId, quantity } = await req.json();

    if (carts[cartId]) {
        const item = carts[cartId].items.find((i) => i.id === productId);
        if (item) {
            item.quantity = quantity;
            carts[cartId].total = carts[cartId].items.reduce(
                (sum, i) => sum + i.price * i.quantity,
                0
            );
        }
    }

    return NextResponse.json(carts[cartId] || { items: [], total: 0 });
}