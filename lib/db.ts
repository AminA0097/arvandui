import { Product } from "@/types/product";

export const products: Product[] = [
    // NEW ARRIVALS (isNew: true)
    {
        id: "1",
        name: "Heritage Leather Boots",
        detail: "Handcrafted full-grain leather boots with Goodyear welt construction.",
        imageUrl: "/p1.jpg",
        category: "boots",
        price: 389,
        inStock: true,
        sizes: ["40", "41", "42", "43", "44"],
        isNew: true,
        isBestSeller: false,
        rank:16
    },
    {
        id: "2",
        name: "Weekender Travel Bag",
        detail: "Full-grain leather carry essentials. Spacious main compartment.",
        imageUrl: "/p2.jpg",
        category: "bags",
        price: 529,
        inStock: true,
        isNew: true,
        isBestSeller: false,
        rank:49
    },
    {
        id: "3",
        name: "Leather Bomber Jacket",
        detail: "Classic silhouette meets modern comfort. Lined with soft viscose.",
        imageUrl: "/p3.jpg",
        category: "coats",
        price: 899,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isNew: true,
        isBestSeller: true,
        rank:19
    },
    {
        id: "4",
        name: "Minimalist Card Holder",
        detail: "Slim profile, 4 card slots, and a center compartment.",
        imageUrl: "/p4.jpg",
        category: "accessories",
        price: 89,
        inStock: true,
        isNew: true,
        isBestSeller: true,
        rank:36
    },
    {
        id: "5",
        name: "Field Messenger Bag",
        detail: "Versatile crossbody bag with adjustable strap.",
        imageUrl: "/p5.jpg",
        category: "bags",
        price: 449,
        inStock: true,
        isNew: true
    },
    {
        id: "6",
        name: "Chelsea Boots",
        detail: "Elastic side panels and pull tab. Elegant and timeless.",
        imageUrl: "/p6.jpg",
        category: "boots",
        price: 359,
        inStock: true,
        sizes: ["40", "41", "42", "43"],
        isNew: false,
        isBestSeller: true,
        rank:163
    },
    {
        id: "7",
        name: "Leather Backpack",
        detail: "Modern silhouette with vintage leather finish.",
        imageUrl: "/p7.jpg",
        category: "bags",
        price: 479,
        inStock: true,
        isNew: false,
        isBestSeller: true,
        rank:36
    },
    {
        id: "8",
        name: "Leather Gloves",
        detail: "Lined with cashmere for ultimate warmth.",
        imageUrl: "/p8.jpg",
        category: "accessories",
        price: 129,
        inStock: true,
        sizes: ["S", "M", "L"],
        isNew: false
    },
    {
        id: "9",
        name: "Motorcycle Jacket",
        detail: "Asymmetric zip with quilted shoulders.",
        imageUrl: "/p9.jpg",
        category: "coats",
        price: 749,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isNew: false
    },
    {
        id: "10",
        name: "Leather Belt",
        detail: "Full-grain leather with brass buckle.",
        imageUrl: "/p10.jpg",
        category: "accessories",
        price: 79,
        inStock: true,
        sizes: ["30", "32", "34", "36", "38"],
        isNew: false
    },
    {
        id: "11",
        name: "Desert Boots",
        detail: "Suede leather with crepe sole.",
        imageUrl: "/p11.jpg",
        category: "boots",
        price: 279,
        inStock: true,
        sizes: ["40", "41", "42", "43"],
        isNew: false
    },
    {
        id: "12",
        name: "Tote Bag",
        detail: "Minimalist design, perfect for everyday.",
        imageUrl: "/p12.jpg",
        category: "bags",
        price: 359,
        inStock: true,
        isNew: false
    },
    {
        id: "13",
        name: "Leather Wallet",
        detail: "6 card slots + bill compartment.",
        imageUrl: "/p13.jpg",
        category: "accessories",
        price: 69,
        inStock: true,
        isNew: false
    },
    {
        id: "14",
        name: "Double Rider Jacket",
        detail: "Classic biker style with silver hardware.",
        imageUrl: "/p14.jpg",
        category: "coats",
        price: 899,
        inStock: false,
        sizes: ["M", "L", "XL"],
        isNew: false
    },
    {
        id: "15",
        name: "Lace-up Boots",
        detail: "Vintage finish with contrast stitching.",
        imageUrl: "/p15.jpg",
        category: "boots",
        price: 399,
        inStock: true,
        sizes: ["41", "42", "43", "44"],
        isNew: false
    },
    {
        id: "16",
        name: "Crossbody Bag",
        detail: "Compact and secure for daily essentials.",
        imageUrl: "/p16.jpg",
        category: "bags",
        price: 289,
        inStock: true,
        isNew: false
    },
    {
        id: "17",
        name: "Key Holder",
        detail: "Keep your keys organized in style.",
        imageUrl: "/p17.jpg",
        category: "accessories",
        price: 39,
        inStock: true,
        isNew: false
    },
    {
        id: "18",
        name: "Parka Coat",
        detail: "Waxed cotton and leather trim.",
        imageUrl: "/p18.jpg",
        category: "coats",
        price: 649,
        inStock: true,
        sizes: ["S", "M", "L", "XL"],
        isNew: false
    },
    {
        id: "19",
        name: "Chukka Boots",
        detail: "Two-eyelet design with crepe sole.",
        imageUrl: "/p19.jpg",
        category: "boots",
        price: 309,
        inStock: true,
        sizes: ["40", "41", "42", "43", "44"],
        isNew: false
    },
    {
        id: "20",
        name: "Laptop Bag",
        detail: "Fits 15-inch laptop with padded compartment.",
        imageUrl: "/p20.jpg",
        category: "bags",
        price: 399,
        inStock: true,
        isNew: true
    }
];