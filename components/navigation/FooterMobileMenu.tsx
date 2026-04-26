"use client";

import Link from 'next/link';
import { House, Search, ShoppingBag, User } from 'lucide-react';

export default function FooterMobileMenu(){
    return (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-stone-200">
            <div className="grid grid-cols-4 text-center py-2">

                <Link href="/" className="flex flex-col items-center gap-1 py-2">
                    <House size={18}/>
                    <span className="text-xs">Home</span>
                </Link>

                <Link href="/search" className="flex flex-col items-center gap-1 py-2">
                    <Search size={18}/>
                    <span className="text-xs">Search</span>
                </Link>

                <Link href="/cart" className="flex flex-col items-center gap-1 py-2">
                    <ShoppingBag size={18}/>
                    <span className="text-xs">Cart</span>
                </Link>

                <Link href="/profile" className="flex flex-col items-center gap-1 py-2">
                    <User size={18}/>
                    <span className="text-xs">Profile</span>
                </Link>

            </div>
        </div>
    )
}