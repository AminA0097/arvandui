// export type MenuItem = {
//     id: string;
//     name: string;
//     href: string;
//     subItems?: MenuItem[];
// };
//
// export type Category = {
//     name: string;
//     href: string;
//     items: MenuItem[];
// };
//
// export type MegaMenuData = {
//     products: Category[];
// };
//
// // Clean, minimal menu configuration
// export const menuConfig: MegaMenuData = {
//     products: [
//         {
//             name: "Shoes",
//             href: "/products/boots",
//             items: [
//                 {
//                     id: "boats",
//                     name: "Boats",
//                     href: "/products/boots?type=boats"
//                 },
//                 { id: "sport", name: "Sport", href: "/products/boots?type=sport" },
//                 { id: "other-shoes", name: "Other", href: "/products/boots?type=other" }
//             ]
//         },
//         {
//             name: "Bags",
//             href: "/products/bags",
//             items: [
//                 { id: "files", name: "Files", href: "/products/bags?category=files" },
//                 { id: "trip", name: "Trip", href: "/products/bags?category=trip" },
//                 { id: "school", name: "School", href: "/products/bags?category=school" },
//                 { id: "money", name: "Money", href: "/products/accessories?category=money" }
//             ]
//         },
//         {
//             name: "Accessory",
//             href: "/products/accessories",
//             items: [
//                 { id: "belt", name: "Belt", href: "/products/accessories?category=belt" },
//                 { id: "key-bag", name: "Key Bag", href: "/products/accessories?category=key-bag" }
//             ]
//         },
//         {
//             name: "Other",
//             href: "/products",
//             items: [
//                 { id: "coats", name: "Coats", href: "/products/coats" },
//                 { id: "care", name: "Care", href: "/products/accessories?category=care" }
//             ]
//         }
//     ]
// };
export type Category = {
    name: string;
    href: string;
};

export const menuConfig = {
    products: [
        {
            name: "Bags",
            href: "/products/bags"
        },
        {
            name: "Shoes",
            href: "/products/shoes"
        },
        {
            name: "Clothing",
            href: "/products/clothing"
        },
        {
            name: "Accessories",
            href: "/products/accessories"
        },
        {
            name: "All Products",
            href: "/products"
        }
    ]
};