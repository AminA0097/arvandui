"use client";

import Link from "next/link";
import {
    Search,
    User,
    Phone,
    ShoppingBag,
    ChevronLeft
} from "lucide-react";

import {useState} from "react";
import {useCart} from "@/context/CartContext";
import {useRouter} from "next/navigation";

import {menuConfig} from "@/types/navigation";

export default function Navbar(){

    const {itemCount}=useCart();

    const router=useRouter();

    const [searchQuery,setSearchQuery]=useState("");

    const [productsOpen,setProductsOpen]=
        useState(false);

    const handleSearch=(e:React.FormEvent)=>{
        e.preventDefault();

        if(!searchQuery.trim()) return;

        router.push(
            `/search?q=${encodeURIComponent(
                searchQuery
            )}`
        );

        setSearchQuery("");
    };


    return(

        <header className="
 sticky top-0 z-[100]
 bg-[#faf9f7]/95
 backdrop-blur-xl
 border-b border-stone-200/40
">

            <nav className="
 max-w-7xl mx-auto
 h-14 md:h-16
 px-5 md:px-10
 flex items-center
">

                {/* mobile */}
                <button
                    className="
 md:hidden
 text-[11px]
 uppercase
 tracking-[0.18em]
"
                >
                    Products
                </button>


                {/* brand */}
                <div className="
 mx-auto
 md:mx-0
 shrink-0
">

                    <Link
                        href="/"
                        className="
 text-xs md:text-lg
 uppercase
 tracking-[0.28em]
 font-light
"
                    >
                        Leather House
                    </Link>

                </div>



                {/* DESKTOP CENTER NAV */}
                <div className="
 hidden md:flex
 flex-1
 justify-center
">

                    {!productsOpen ? (

                        <button
                            onClick={()=>
                                setProductsOpen(true)
                            }
                            className="
  text-[12px]
  uppercase
  tracking-[0.18em]
  text-stone-700
  hover:text-black
  transition
 "
                        >
                            Products
                        </button>

                    ):(

                        <div className="
 flex items-center
 gap-6
">

                            <button
                                onClick={()=>
                                    setProductsOpen(false)
                                }
                                className="
 flex items-center gap-1
 text-[11px]
 text-stone-400
 hover:text-stone-700
"
                            >
                                <ChevronLeft size={12}/>
                                Back
                            </button>


                            {menuConfig.products.map(item=>(

                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="
   text-[12px]
   uppercase
   tracking-[0.14em]
   text-stone-700
   hover:text-black
   transition
 "
                                >
                                    {item.name}
                                </Link>

                            ))}

                        </div>

                    )}

                </div>



                {/* right */}
                <div className="
 hidden md:flex
 ml-auto
 items-center
 gap-5
">

                    <form
                        onSubmit={handleSearch}
                    >
                        <div className="
 relative
 w-48
">

                            <Search
                                size={14}
                                className="
 absolute left-3
 top-1/2
 -translate-y-1/2
 text-stone-400
"
                            />

                            <input
                                value={searchQuery}
                                onChange={(e)=>
                                    setSearchQuery(
                                        e.target.value
                                    )
                                }
                                placeholder="Search"
                                className="
  w-full
  h-9
  rounded-full
  border border-stone-200
  bg-white
  pl-9 pr-4
  text-xs
  outline-none
  focus:border-stone-400
 "
                            />

                        </div>
                    </form>


                    <Link href="/account">
                        <User
                            size={16}
                            strokeWidth={1.3}
                        />
                    </Link>


                    <Link href="/contact">
                        <Phone
                            size={16}
                            strokeWidth={1.3}
                        />
                    </Link>


                    <Link
                        href="/cart"
                        className="relative"
                    >

                        <ShoppingBag
                            size={16}
                            strokeWidth={1.3}
                        />

                        {itemCount>0 &&(
                            <span className="
 absolute
 -top-2
 -right-2
 w-4 h-4
 rounded-full
 bg-stone-900
 text-white
 text-[9px]
 flex items-center justify-center
">
{itemCount}
</span>
                        )}

                    </Link>

                </div>

            </nav>

        </header>

    )
}