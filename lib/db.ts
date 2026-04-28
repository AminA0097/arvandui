// lib/db.ts
import { Product } from "@/types/product";

/**
 * Product database with sample leather goods
 * In production, this would be replaced with a real database
 */
export const products: Product[] = [
    // New Arrivals
    {
        "id": "1",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 50,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1383,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 20
    },
    {
        "id": "2",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 67,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 81,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "3",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 84,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 225,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "4",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 101,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 454,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "5",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 118,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 713,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "6",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 135,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1167,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "7",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 152,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 553,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "8",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 169,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 72,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "9",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 186,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 8,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "10",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 203,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 177,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "11",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 220,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 970,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 8
    },
    {
        "id": "12",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 237,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 46,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "13",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 254,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1200,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "14",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 271,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 79,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "15",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 288,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 600,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "16",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 305,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 762,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "17",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 322,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1350,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "18",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 339,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1061,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "19",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 356,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 845,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "20",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 373,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 934,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "21",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 390,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 77,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 10
    },
    {
        "id": "22",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 407,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 435,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "23",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 424,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 430,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "24",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 441,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1178,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "25",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 458,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 325,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "26",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 475,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1405,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "27",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 492,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1061,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "28",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 509,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1307,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "29",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 526,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1295,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "30",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 543,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1486,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "31",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 560,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 204,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 33
    },
    {
        "id": "32",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 577,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1148,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "33",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 594,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1282,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "34",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 611,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 18,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "35",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 628,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1017,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "36",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 645,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 319,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "37",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 662,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 674,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "38",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 679,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 266,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "39",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 696,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1456,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "40",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 713,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 389,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "41",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 730,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 776,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 35
    },
    {
        "id": "42",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 747,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 72,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "43",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 764,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1313,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "44",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 781,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 873,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "45",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 798,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 805,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "46",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 815,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 575,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "47",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 832,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 715,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "48",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 849,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1050,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "49",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 66,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 110,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "50",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 83,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1148,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "51",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 100,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 499,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 17
    },
    {
        "id": "52",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 117,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 794,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "53",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 134,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 905,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "54",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 151,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1289,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "55",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 168,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 203,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "56",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 185,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1221,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "57",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 202,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 753,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "58",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 219,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1281,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "59",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 236,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1035,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "60",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 253,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 241,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "61",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 270,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 91,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 32
    },
    {
        "id": "62",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 287,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1052,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "63",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 304,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1009,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "64",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 321,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1041,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "65",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 338,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 82,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "66",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 355,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 150,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "67",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 372,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 515,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "68",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 389,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1385,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "69",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 406,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1499,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "70",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 423,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1014,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "71",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 440,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1080,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 10
    },
    {
        "id": "72",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 457,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 413,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "73",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 474,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1118,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "74",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 491,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 972,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "75",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 508,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 728,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "76",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 525,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 992,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "77",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 542,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 438,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "78",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 559,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 755,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "79",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 576,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 531,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "80",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 593,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 306,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "81",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 610,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 247,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 30
    },
    {
        "id": "82",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 627,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 963,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "83",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 644,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 373,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "84",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 661,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1385,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "85",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 678,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1476,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "86",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 695,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 475,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "87",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 712,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1017,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "88",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 729,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 354,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "89",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 746,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 126,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "90",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 763,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 281,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "91",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 780,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1455,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 21
    },
    {
        "id": "92",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 797,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 852,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "93",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 814,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 949,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "94",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 831,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 307,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "95",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 848,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 79,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "96",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 65,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 262,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "97",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 82,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 573,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "98",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 99,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1348,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "99",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 116,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1001,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "100",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 133,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 474,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "101",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 150,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 883,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 24
    },
    {
        "id": "102",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 167,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1411,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "103",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 184,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1372,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "104",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 201,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 555,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "105",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 218,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1060,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "106",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 235,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 73,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "107",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 252,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 988,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "108",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 269,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 67,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "109",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 286,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 964,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "110",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 303,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 725,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "111",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 320,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 720,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 16
    },
    {
        "id": "112",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 337,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1217,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "113",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 354,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 259,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "114",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 371,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 848,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "115",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 388,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1066,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "116",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 405,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 193,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "117",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 422,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 603,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "118",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 439,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 654,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "119",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 456,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1323,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "120",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 473,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 397,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "121",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 490,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 53,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 5
    },
    {
        "id": "122",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 507,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 191,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "123",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 524,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1317,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "124",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 541,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1349,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "125",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 558,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1036,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "126",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 575,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 273,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "127",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 592,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1341,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "128",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 609,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 246,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "129",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 626,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 711,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "130",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 643,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1473,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "131",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 660,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1229,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 10
    },
    {
        "id": "132",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 677,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 254,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "133",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 694,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 175,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "134",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 711,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1341,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "135",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 728,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1169,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "136",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 745,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1379,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "137",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 762,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1210,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "138",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 779,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1029,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "139",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 796,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1018,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "140",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 813,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1110,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "141",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 830,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 488,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 10
    },
    {
        "id": "142",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 847,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 396,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "143",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 64,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1166,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "144",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 81,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 203,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "145",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 98,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1138,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "146",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 115,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 241,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "147",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 132,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 13,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "148",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 149,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 901,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "149",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 166,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 654,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "150",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 183,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 255,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "151",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 200,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 740,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 17
    },
    {
        "id": "152",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 217,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 187,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "153",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 234,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 902,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "154",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 251,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 842,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "155",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 268,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 321,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "156",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 285,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1034,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "157",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 302,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 10,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "158",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 319,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 239,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "159",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 336,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 972,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "160",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 353,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 259,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "161",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 370,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1399,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 9
    },
    {
        "id": "162",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 387,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1269,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "163",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 404,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1130,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "164",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 421,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 417,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "165",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 438,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 543,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "166",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 455,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 797,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "167",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 472,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 579,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "168",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 489,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 804,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "169",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 506,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 295,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "170",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 523,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1408,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "171",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 540,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1055,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 18
    },
    {
        "id": "172",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 557,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 488,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "173",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 574,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1437,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "174",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 591,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 993,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "175",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 608,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 587,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "176",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 625,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 911,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "177",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 642,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1279,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "178",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 659,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 293,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "179",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 676,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 45,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "180",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 693,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 533,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "181",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 710,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1174,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 5
    },
    {
        "id": "182",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 727,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1148,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "183",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 744,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1468,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "184",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 761,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 989,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "185",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 778,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1138,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "186",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 795,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 367,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "187",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 812,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 587,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "188",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 829,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 951,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "189",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 846,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1018,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "190",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 63,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 338,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "191",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 80,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 164,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 40
    },
    {
        "id": "192",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 97,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1030,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "193",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 114,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1074,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "194",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 131,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1428,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "195",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 148,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 248,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "196",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 165,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 498,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "197",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 182,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 5,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "198",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 199,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 727,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "199",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 216,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 160,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "200",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 233,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 144,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "201",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 250,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 132,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 33
    },
    {
        "id": "202",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 267,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 321,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "203",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 284,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 468,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "204",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 301,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 323,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "205",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 318,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 665,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "206",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 335,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 408,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "207",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 352,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1422,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "208",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 369,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1403,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "209",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 386,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 39,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "210",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 403,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 426,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "211",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 420,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 773,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 8
    },
    {
        "id": "212",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 437,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1162,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "213",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 454,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 168,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "214",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 471,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1031,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "215",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 488,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 48,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "216",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 505,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1391,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "217",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 522,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1445,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "218",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 539,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 979,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "219",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 556,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1317,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "220",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 573,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1438,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "221",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 590,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 310,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 14
    },
    {
        "id": "222",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 607,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 174,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "223",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 624,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 809,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "224",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 641,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 136,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "225",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 658,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 866,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "226",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 675,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 656,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "227",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 692,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1151,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "228",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 709,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1335,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "229",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 726,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1109,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "230",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 743,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1393,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "231",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 760,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 684,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 19
    },
    {
        "id": "232",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 777,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 307,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "233",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 794,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 203,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "234",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 811,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 20,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "235",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 828,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 757,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "236",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 845,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1094,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "237",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 62,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 621,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "238",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 79,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 713,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "239",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 96,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 985,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "240",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 113,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 293,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "241",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 130,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 985,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 8
    },
    {
        "id": "242",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 147,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 78,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "243",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 164,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1105,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "244",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 181,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 592,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "245",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 198,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 584,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "246",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 215,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 798,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "247",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 232,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 228,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "248",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 249,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1474,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "249",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 266,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 430,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "250",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 283,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 112,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "251",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 300,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1205,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 27
    },
    {
        "id": "252",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 317,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 684,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "253",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 334,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 478,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "254",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 351,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 82,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "255",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 368,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1300,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "256",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 385,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 442,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "257",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 402,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1307,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "258",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 419,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1246,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "259",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 436,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1469,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "260",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 453,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 8,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "261",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 470,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 98,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 17
    },
    {
        "id": "262",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 487,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1363,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "263",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 504,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 415,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "264",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 521,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 576,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "265",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 538,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1233,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "266",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 555,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 513,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "267",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 572,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 437,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "268",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 589,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1043,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "269",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 606,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 631,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "270",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 623,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 109,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "271",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 640,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 737,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "272",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 657,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 858,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "273",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 674,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 586,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "274",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 691,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1155,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "275",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 708,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1039,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "276",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 725,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1211,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "277",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 742,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 574,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "278",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 759,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1407,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "279",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 776,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 797,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "280",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 793,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 606,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "281",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 810,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 421,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 28
    },
    {
        "id": "282",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 827,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 419,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "283",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 844,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 346,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "284",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 61,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1417,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "285",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 78,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1407,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "286",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 95,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1174,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "287",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 112,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 26,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "288",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 129,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1416,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "289",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 146,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 538,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "290",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 163,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 72,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "291",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 180,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 403,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 6
    },
    {
        "id": "292",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 197,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 836,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "293",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 214,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 373,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "294",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 231,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1480,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "295",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 248,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 557,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "296",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 265,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 626,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "297",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 282,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 89,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "298",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 299,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1061,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "299",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 316,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 162,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "300",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 333,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1292,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "301",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 350,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 466,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 38
    },
    {
        "id": "302",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 367,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 403,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "303",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 384,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 348,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "304",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 401,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 410,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "305",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 418,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 889,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "306",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 435,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1441,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "307",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 452,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 219,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "308",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 469,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1378,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "309",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 486,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1076,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "310",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 503,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 185,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "311",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 520,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1127,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 33
    },
    {
        "id": "312",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 537,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1119,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "313",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 554,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1352,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "314",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 571,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 52,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "315",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 588,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 991,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "316",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 605,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 511,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "317",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 622,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1075,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "318",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 639,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1014,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "319",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 656,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 765,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "320",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 673,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1030,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "321",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 690,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1289,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "322",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 707,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 970,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "323",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 724,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1452,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "324",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 741,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 37,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "325",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 758,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 641,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "326",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 775,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1041,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "327",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 792,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 384,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "328",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 809,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 304,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "329",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 826,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 869,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "330",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 843,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 634,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "331",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 60,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 471,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 31
    },
    {
        "id": "332",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 77,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 978,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "333",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 94,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1242,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "334",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 111,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 318,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "335",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 128,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1008,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "336",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 145,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1077,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "337",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 162,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 511,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "338",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 179,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 993,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "339",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 196,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 253,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "340",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 213,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 669,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "341",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 230,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1181,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 25
    },
    {
        "id": "342",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 247,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 791,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "343",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 264,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 684,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "344",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 281,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1439,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "345",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 298,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 381,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "346",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 315,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 666,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "347",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 332,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 184,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "348",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 349,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 919,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "349",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 366,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1373,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "350",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 383,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 277,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "351",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 400,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 998,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 14
    },
    {
        "id": "352",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 417,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 454,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "353",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 434,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1141,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "354",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 451,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 659,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "355",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 468,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 301,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "356",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 485,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1357,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "357",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 502,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 314,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "358",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 519,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 752,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "359",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 536,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1265,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "360",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 553,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 65,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "361",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 570,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 666,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 15
    },
    {
        "id": "362",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 587,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 957,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "363",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 604,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 252,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "364",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 621,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 199,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "365",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 638,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 513,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "366",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 655,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1123,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "367",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 672,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 107,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "368",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 689,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 501,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "369",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 706,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 290,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "370",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 723,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 682,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "371",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 740,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1441,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 34
    },
    {
        "id": "372",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 757,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 160,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "373",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 774,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 368,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "374",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 791,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1093,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "375",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 808,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 771,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "376",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 825,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 583,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "377",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 842,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 614,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "378",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 59,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 756,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "379",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 76,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 320,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "380",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 93,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 833,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "381",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 110,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1289,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 5
    },
    {
        "id": "382",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 127,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 301,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "383",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 144,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1362,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "384",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 161,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 876,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "385",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 178,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 851,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "386",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 195,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 597,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "387",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 212,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1121,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "388",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 229,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1153,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "389",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 246,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 903,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "390",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 263,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1219,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "391",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 280,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 249,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 27
    },
    {
        "id": "392",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 297,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 402,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "393",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 314,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1198,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "394",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 331,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 798,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "395",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 348,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 727,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "396",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 365,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 766,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "397",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 382,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1060,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "398",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 399,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 548,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "399",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 416,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1428,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "400",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 433,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1373,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "401",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 450,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1157,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 21
    },
    {
        "id": "402",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 467,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 302,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "403",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 484,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 373,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "404",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 501,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 559,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "405",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 518,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1440,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "406",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 535,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 187,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "407",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 552,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 606,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "408",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 569,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 766,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "409",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 586,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1302,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "410",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 603,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 428,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "411",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 620,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 1425,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 29
    },
    {
        "id": "412",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 637,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 562,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "413",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 654,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 127,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "414",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 671,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1328,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "415",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 688,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1484,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "416",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 705,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 192,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "417",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 722,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 825,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "418",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 739,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 844,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "419",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 756,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 1177,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "420",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 773,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 478,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "421",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 790,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 31,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 22
    },
    {
        "id": "422",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 807,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 128,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "423",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 824,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 499,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "424",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 841,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 319,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "425",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 58,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 591,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "426",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 75,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 215,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "427",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 92,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 98,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "428",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 109,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 725,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "429",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 126,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 489,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "430",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 143,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 406,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "431",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 160,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 830,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 14
    },
    {
        "id": "432",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 177,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 944,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "433",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 194,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 361,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "434",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 211,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1328,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "435",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 228,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 316,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "436",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 245,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1111,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "437",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 262,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1007,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "438",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 279,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1433,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "439",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 296,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 995,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "440",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 313,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 546,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "441",
        "name": "Leather Messenger",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 330,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 1145,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 11
    },
    {
        "id": "442",
        "name": "Genuine Satchel",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 347,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 176,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "443",
        "name": "Full-grain Purse",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 364,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 618,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "444",
        "name": "Vintage Pouch",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 381,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 238,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "445",
        "name": "Modern Wallet",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 398,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 50,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "446",
        "name": "Classic Bag",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 415,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 543,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "447",
        "name": "Rugged Belt",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 432,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 770,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "448",
        "name": "Elegant Gloves",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 449,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1496,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "449",
        "name": "Slim Jacket",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 466,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1329,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "450",
        "name": "Luxury Boots",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 483,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1059,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "451",
        "name": "Leather Card Holder",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 500,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 964,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 18
    },
    {
        "id": "452",
        "name": "Genuine Backpack",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 517,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1458,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "453",
        "name": "Full-grain Messenger",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 534,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 383,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "454",
        "name": "Vintage Satchel",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 551,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 1265,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "455",
        "name": "Modern Purse",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 568,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 571,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "456",
        "name": "Classic Pouch",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 585,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1110,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "457",
        "name": "Rugged Wallet",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 602,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1089,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "458",
        "name": "Elegant Bag",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 619,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 823,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "459",
        "name": "Slim Belt",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 636,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 826,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "460",
        "name": "Luxury Gloves",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 653,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1275,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "461",
        "name": "Leather Jacket",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 670,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 878,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 7
    },
    {
        "id": "462",
        "name": "Genuine Boots",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 687,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 771,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "463",
        "name": "Full-grain Card Holder",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 704,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 331,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "464",
        "name": "Vintage Backpack",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 721,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 163,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "465",
        "name": "Modern Messenger",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 738,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 465,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "466",
        "name": "Classic Satchel",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 755,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 1197,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "467",
        "name": "Rugged Purse",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 772,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 811,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "468",
        "name": "Elegant Pouch",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 789,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 444,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "469",
        "name": "Slim Wallet",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 806,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1068,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "470",
        "name": "Luxury Bag",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 823,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 582,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "471",
        "name": "Leather Belt",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 840,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 662,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 34
    },
    {
        "id": "472",
        "name": "Genuine Gloves",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 57,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1057,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "473",
        "name": "Full-grain Jacket",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 74,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 338,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "474",
        "name": "Vintage Boots",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 91,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 527,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "475",
        "name": "Modern Card Holder",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 108,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 292,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "476",
        "name": "Classic Backpack",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 125,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 958,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "477",
        "name": "Rugged Messenger",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 142,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 230,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "478",
        "name": "Elegant Satchel",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 159,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 963,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "479",
        "name": "Slim Purse",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 176,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 3,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "480",
        "name": "Luxury Pouch",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 193,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1096,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "481",
        "name": "Leather Wallet",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "boots",
        "price": 210,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women",
            "men"
        ],
        "views": 44,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "482",
        "name": "Genuine Bag",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "bags",
        "price": 227,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 317,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "483",
        "name": "Full-grain Belt",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "coats",
        "price": 244,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 834,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "484",
        "name": "Vintage Gloves",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 261,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 838,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "485",
        "name": "Modern Jacket",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "boots",
        "price": 278,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 533,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "486",
        "name": "Classic Boots",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "bags",
        "price": 295,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "accessories"
        ],
        "views": 544,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "487",
        "name": "Rugged Card Holder",
        "detail": "Durable stitching and premium hardware. Perfect for everyday use.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "coats",
        "price": 312,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 490,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "488",
        "name": "Elegant Backpack",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 329,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 262,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "489",
        "name": "Slim Messenger",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "boots",
        "price": 346,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1149,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "490",
        "name": "Luxury Satchel",
        "detail": "High-quality materials built to last. Perfect for everyday use.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "bags",
        "price": 363,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 766,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "491",
        "name": "Leather Purse",
        "detail": "Handcrafted from premium leather. Ideal for any occasion.",
        "imageUrl": "/products/boot-1.jpg",
        "category": "coats",
        "price": 380,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "men"
        ],
        "views": 725,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 11
    },
    {
        "id": "492",
        "name": "Genuine Pouch",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 397,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 958,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "493",
        "name": "Full-grain Wallet",
        "detail": "Timeless design that complements any outfit. Perfect for everyday use.",
        "imageUrl": "/products/jacket-1.jpg",
        "category": "boots",
        "price": 414,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 465,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "494",
        "name": "Vintage Bag",
        "detail": "Everyday essential with a modern touch. Ideal for any occasion.",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "bags",
        "price": 431,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 395,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "495",
        "name": "Modern Belt",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/boot-2.jpg",
        "category": "coats",
        "price": 448,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 604,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "496",
        "name": "Classic Gloves",
        "detail": "Handcrafted from premium leather. Perfect for everyday use.",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 465,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 882,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "497",
        "name": "Rugged Jacket",
        "detail": "Durable stitching and premium hardware. Ideal for any occasion.",
        "imageUrl": "/products/jacket-2.jpg",
        "category": "boots",
        "price": 482,
        "inStock": true,
        "sizes": [
            "40",
            "41",
            "42",
            "43",
            "44"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women",
            "men"
        ],
        "views": 1361,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "498",
        "name": "Elegant Boots",
        "detail": "Timeless design that complements any outfit. Ideal for any occasion.",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "bags",
        "price": 499,
        "inStock": true,
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "accessories"
        ],
        "views": 74,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "499",
        "name": "Slim Card Holder",
        "detail": "Everyday essential with a modern touch. Perfect for everyday use.",
        "imageUrl": "/products/accessory-3.jpg",
        "category": "coats",
        "price": 516,
        "inStock": true,
        "sizes": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "men"
        ],
        "views": 25,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "500",
        "name": "Luxury Backpack",
        "detail": "High-quality materials built to last. Ideal for any occasion.",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 533,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1077,
        "createdAt": "2024-01-15T10:00:00Z"
    }
];