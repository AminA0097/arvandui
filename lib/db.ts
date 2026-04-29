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
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1145,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 23
    },
    {
        "id": "2",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 910,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "3",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 7,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "4",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 101,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 36,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "5",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1345,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "6",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 391,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "7",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1363,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "8",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 169,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 950,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "9",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1470,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "10",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 4,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "11",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 46,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 39
    },
    {
        "id": "12",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 237,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 93,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "13",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 906,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "14",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1260,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "15",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 388,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "16",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 305,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1481,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "17",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1372,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "18",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 455,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "19",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 386,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "20",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 373,
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
        "id": "21",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 299,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 31
    },
    {
        "id": "22",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1123,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "23",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1283,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "24",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 441,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 6,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "25",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 669,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "26",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 552,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "27",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 437,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "28",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 509,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 208,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "29",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 32,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "30",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 47,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "31",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 882,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 14
    },
    {
        "id": "32",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 577,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1285,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "33",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 211,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "34",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 345,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "35",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1060,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "36",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 645,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1376,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "37",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1125,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "38",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 365,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "39",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 653,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "40",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 713,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 416,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "41",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 238,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 25
    },
    {
        "id": "42",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1300,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "43",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 210,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "44",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 781,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1112,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "45",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1205,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "46",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1176,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "47",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 954,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "48",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 849,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 993,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "49",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 220,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "50",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1152,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "51",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 434,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 12
    },
    {
        "id": "52",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 117,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 419,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "53",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1385,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "54",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 129,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "55",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 41,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "56",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 185,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 41,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "57",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 796,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "58",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1299,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "59",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1500,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "60",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 253,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 224,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "61",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 634,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 27
    },
    {
        "id": "62",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 169,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "63",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 805,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "64",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 321,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1424,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "65",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 74,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "66",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 276,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "67",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 769,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "68",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 389,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 59,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "69",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1032,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "70",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 882,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "71",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1135,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 21
    },
    {
        "id": "72",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 457,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1323,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "73",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1052,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "74",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1351,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "75",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 129,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "76",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 525,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 824,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "77",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 202,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "78",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 939,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "79",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 413,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "80",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 593,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1431,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "81",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1125,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 8
    },
    {
        "id": "82",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 452,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "83",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 225,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "84",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 661,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 983,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "85",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1257,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "86",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1293,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "87",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 415,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "88",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 729,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1234,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "89",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 620,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "90",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 610,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "91",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 547,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 28
    },
    {
        "id": "92",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 797,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 551,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "93",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 543,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "94",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 806,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "95",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 318,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "96",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 65,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 289,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "97",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1404,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "98",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1433,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "99",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 35,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "100",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 133,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 101,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "101",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1297,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 39
    },
    {
        "id": "102",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1426,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "103",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 404,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "104",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 201,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 473,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "105",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 773,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "106",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1327,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "107",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 619,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "108",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 269,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 311,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "109",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 920,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "110",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1242,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "111",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1079,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 19
    },
    {
        "id": "112",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 337,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 116,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "113",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 706,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "114",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 378,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "115",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 409,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "116",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 405,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1183,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "117",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1197,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "118",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 290,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "119",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1085,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "120",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 473,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1106,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "121",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 656,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 38
    },
    {
        "id": "122",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1122,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "123",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1307,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "124",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 541,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 181,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "125",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 966,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "126",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 457,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "127",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1468,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "128",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 609,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1449,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "129",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 976,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "130",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 452,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "131",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1380,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 12
    },
    {
        "id": "132",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 677,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1048,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "133",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 421,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "134",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1146,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "135",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 601,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "136",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 745,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1127,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "137",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 789,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "138",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1042,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "139",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 367,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "140",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 813,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 386,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "141",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 945,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "142",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 643,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "143",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 641,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "144",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 81,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 976,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "145",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 436,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "146",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 806,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "147",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 469,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "148",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 149,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 986,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "149",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 600,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "150",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 590,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "151",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1221,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 18
    },
    {
        "id": "152",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 217,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 990,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "153",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1370,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "154",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 79,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "155",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1331,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "156",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 285,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 581,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "157",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1022,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "158",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 624,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "159",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 54,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "160",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 353,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1436,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "161",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1306,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "162",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 851,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "163",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 598,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "164",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 421,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 400,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "165",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 439,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "166",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 220,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "167",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 612,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "168",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 489,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 870,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "169",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 896,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "170",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 848,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "171",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1389,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 19
    },
    {
        "id": "172",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 557,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 867,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "173",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 981,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "174",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 963,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "175",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 231,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "176",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 625,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 778,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "177",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 741,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "178",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 207,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "179",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1134,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "180",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 693,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1040,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "181",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1374,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 18
    },
    {
        "id": "182",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 222,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "183",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 273,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "184",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 761,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1062,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "185",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 597,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "186",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1272,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "187",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 924,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "188",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 829,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 146,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "189",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1237,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "190",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1351,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "191",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1415,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 14
    },
    {
        "id": "192",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 97,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 508,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "193",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 10,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "194",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 887,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "195",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 322,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "196",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 165,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1303,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "197",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 891,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "198",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1432,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "199",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 438,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "200",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 233,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1286,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "201",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 218,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 13
    },
    {
        "id": "202",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 620,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "203",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1464,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "204",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 301,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 709,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "205",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 324,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "206",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 443,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "207",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 223,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "208",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 369,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 299,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "209",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1374,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "210",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1483,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "211",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 434,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 10
    },
    {
        "id": "212",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 437,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 567,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "213",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 869,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "214",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1310,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "215",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 263,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "216",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 505,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1240,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "217",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 687,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "218",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1051,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "219",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 725,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "220",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 573,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 282,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "221",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 601,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 29
    },
    {
        "id": "222",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 684,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "223",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1436,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "224",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 641,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 972,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "225",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 668,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "226",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 758,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "227",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1380,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "228",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 709,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1032,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "229",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 989,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "230",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1288,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "231",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "discount": 38
    },
    {
        "id": "232",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 777,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 766,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "233",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 741,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "234",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1106,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "235",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 292,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "236",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 845,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 209,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "237",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1217,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "238",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1215,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "239",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 403,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "240",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 113,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1395,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "241",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 293,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 7
    },
    {
        "id": "242",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1092,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "243",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1427,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "244",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 181,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1175,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "245",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1250,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "246",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 566,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "247",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1406,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "248",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 249,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 857,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "249",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 620,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "250",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1320,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "251",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 574,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 23
    },
    {
        "id": "252",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 317,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1362,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "253",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1208,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "254",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 255,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "255",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 510,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "256",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 385,
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
        "id": "257",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 563,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "258",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 194,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "259",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 26,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "260",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 453,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1158,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "261",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 496,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "262",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 691,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "263",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 930,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "264",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 521,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1046,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "265",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1228,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "266",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1129,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "267",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 831,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "268",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 589,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 643,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "269",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 207,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "270",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 11,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "271",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 517,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "272",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 657,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 720,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "273",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 830,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "274",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 961,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "275",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1377,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "276",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 725,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 679,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "277",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 957,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "278",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 404,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "279",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 790,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "280",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 793,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1105,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "281",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 570,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 15
    },
    {
        "id": "282",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1284,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "283",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 808,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "284",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 61,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 73,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "285",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1357,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "286",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1342,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "287",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 708,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "288",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 129,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 54,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "289",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 582,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "290",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 393,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "291",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1431,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 22
    },
    {
        "id": "292",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 197,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 926,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "293",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1286,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "294",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 389,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "295",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 698,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "296",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 265,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 443,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "297",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 314,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "298",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 692,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "299",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 414,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "300",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 333,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 130,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "301",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 293,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 27
    },
    {
        "id": "302",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 189,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "303",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 393,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "304",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 401,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 962,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "305",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1290,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "306",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1377,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "307",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 647,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "308",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 469,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1006,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "309",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 469,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "310",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1496,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "311",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 712,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 16
    },
    {
        "id": "312",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 537,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 490,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "313",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 748,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "314",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1106,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "315",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 389,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "316",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 605,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1383,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "317",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 746,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "318",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 61,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "319",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 192,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "320",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 673,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 275,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "321",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 643,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 9
    },
    {
        "id": "322",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 645,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "323",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 956,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "324",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 741,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 554,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "325",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 714,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "326",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 875,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "327",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 256,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "328",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 809,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 841,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "329",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 825,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "330",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1060,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "331",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 411,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 37
    },
    {
        "id": "332",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 77,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 769,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "333",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1098,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "334",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 257,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "335",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 259,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "336",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 145,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 901,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "337",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1443,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "338",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 220,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "339",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 470,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "340",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 213,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 968,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "341",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 605,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 18
    },
    {
        "id": "342",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1246,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "343",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 804,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "344",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 281,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 21,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "345",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 367,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "346",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 256,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "347",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1075,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "348",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 349,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 542,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "349",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1206,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "350",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1274,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "351",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 324,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 7
    },
    {
        "id": "352",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 417,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1158,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "353",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1499,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "354",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 792,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "355",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 893,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "356",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 485,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1062,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "357",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 815,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "358",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 480,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "359",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1391,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "360",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 553,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 915,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "361",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 663,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 34
    },
    {
        "id": "362",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 347,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "363",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 83,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "364",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 621,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 209,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "365",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1163,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "366",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1422,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "367",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1232,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "368",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 689,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1489,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "369",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 379,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "370",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 102,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "371",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 500,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 11
    },
    {
        "id": "372",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 757,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1475,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "373",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 222,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "374",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1245,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "375",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 579,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "376",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 825,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 916,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "377",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 374,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "378",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 794,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "379",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 848,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "380",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 93,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1225,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "381",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1355,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 26
    },
    {
        "id": "382",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 78,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "383",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 272,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "384",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 161,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 818,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "385",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1146,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "386",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 754,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "387",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1186,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "388",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 229,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1319,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "389",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 43,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "390",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 421,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "391",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1129,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 36
    },
    {
        "id": "392",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 297,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 729,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "393",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1461,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "394",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 444,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "395",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1096,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "396",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 365,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 322,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "397",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 623,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "398",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 481,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "399",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 806,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "400",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 433,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 669,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "401",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 339,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 15
    },
    {
        "id": "402",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 377,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "403",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 141,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "404",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 501,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1093,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "405",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 318,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "406",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 504,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "407",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1028,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "408",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 569,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 180,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "409",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 728,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "410",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1052,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "411",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 685,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 18
    },
    {
        "id": "412",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 637,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1313,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "413",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1487,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "414",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 923,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "415",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 668,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "416",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 705,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 1153,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "417",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 707,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "418",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 56,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "419",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1217,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "420",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 773,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1151,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "421",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 493,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 24
    },
    {
        "id": "422",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 401,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "423",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 133,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "424",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 841,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 710,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "425",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 799,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "426",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1164,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "427",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 365,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "428",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 109,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1430,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "429",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 500,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "430",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1356,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "431",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 575,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 9
    },
    {
        "id": "432",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 177,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1299,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "433",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 478,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "434",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 988,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "435",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 602,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "436",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 245,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 61,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "437",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1480,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "438",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 9,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "439",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 95,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "440",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 313,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 403,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "441",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 715,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 39
    },
    {
        "id": "442",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1121,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "443",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 863,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "444",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 381,
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
        "id": "445",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 404,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "446",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1500,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "447",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 753,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "448",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 449,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1152,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "449",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 39,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "450",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 719,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "451",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 584,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 31
    },
    {
        "id": "452",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 517,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 838,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "453",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 968,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "454",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1293,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "455",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1161,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "456",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 585,
        "inStock": true,
        "isNew": true,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 161,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "457",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 421,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "458",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1199,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "459",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 155,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "460",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 653,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 617,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "461",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 656,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 29
    },
    {
        "id": "462",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1225,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "463",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 672,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "464",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 721,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 940,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "465",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 130,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "466",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1212,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "467",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 908,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "468",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 789,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1485,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "469",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 366,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "470",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 757,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "471",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 713,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 28
    },
    {
        "id": "472",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 57,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 764,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "473",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 202,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "474",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 949,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "475",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1051,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "476",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 125,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 476,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "477",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 921,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "478",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1266,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "479",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 343,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "480",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 193,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 517,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "481",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 76,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 29
    },
    {
        "id": "482",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 970,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "483",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 184,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "484",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-1.jpg",
        "category": "accessories",
        "price": 261,
        "inStock": true,
        "isNew": true,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 621,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "485",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 261,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "486",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 844,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "487",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 185,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "488",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/accessory-2.jpg",
        "category": "accessories",
        "price": 329,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1289,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "489",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1264,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "490",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 968,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "491",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 71,
        "createdAt": "2024-01-15T10:00:00Z",
        "discount": 12
    },
    {
        "id": "492",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-1.jpg",
        "category": "accessories",
        "price": 397,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1408,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "493",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1241,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "494",
        "name": "دست کش",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 941,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "495",
        "name": "کاپشن",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 168,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "496",
        "name": "چکمه",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-2.jpg",
        "category": "accessories",
        "price": 465,
        "inStock": true,
        "isNew": false,
        "isBestSeller": true,
        "tags": [
            "women"
        ],
        "views": 925,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "497",
        "name": "جامدارکی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 1288,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "498",
        "name": "کیف پول",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 279,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "499",
        "name": "کوله پشتی",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
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
        "views": 488,
        "createdAt": "2024-01-15T10:00:00Z"
    },
    {
        "id": "500",
        "name": "کمربند",
        "detail": "تمامی محصوات از چرم طبیعی می باشد",
        "imageUrl": "/products/bag-3.jpg",
        "category": "accessories",
        "price": 533,
        "inStock": true,
        "isNew": false,
        "isBestSeller": false,
        "tags": [
            "women"
        ],
        "views": 1079,
        "createdAt": "2024-01-15T10:00:00Z"
    }
];