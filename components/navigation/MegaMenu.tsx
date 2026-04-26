"use client";

import {useState,useEffect,useRef} from "react";
import Link from "next/link";
import {
    ChevronRight,
    ArrowLeft
} from "lucide-react";

import {
    menuConfig,
    Category,
    MenuItem
} from "@/types/navigation";

type MegaMenuProps={
    isOpen:boolean;
    onClose:()=>void;
    onMouseEnter:()=>void;
    onMouseLeave:()=>void;
    isMobile?:boolean;
};

export default function MegaMenu({
                                     isOpen,
                                     onClose,
                                     onMouseEnter,
                                     onMouseLeave,
                                     isMobile=false
                                 }:MegaMenuProps){

    const [currentLevel,setCurrentLevel]=useState<
        "categories"|"items"|"subitems"
    >("categories");

    const [selectedCategory,setSelectedCategory]=
        useState<Category | null>(null);

    const [selectedItem,setSelectedItem]=
        useState<MenuItem | null>(null);

    const prevIsOpen=useRef(isOpen);

    useEffect(()=>{
        if(prevIsOpen.current && !isOpen){
            setCurrentLevel("categories");
            setSelectedCategory(null);
            setSelectedItem(null);
        }

        prevIsOpen.current=isOpen;
    },[isOpen]);

    if(!isOpen) return null;


    const backCategories=()=>{
        setCurrentLevel("categories");
        setSelectedCategory(null);
    };

    const backItems=()=>{
        setCurrentLevel("items");
        setSelectedItem(null);
    };


    if(isMobile){
        return(
            <div className="
      fixed inset-0
      z-[400]
      bg-white
      h-dvh
    ">

                <div className="
        h-14
        border-b border-stone-100
        px-4
        flex items-center gap-3
      ">

                    {currentLevel!=="categories" ? (
                        <button
                            onClick={
                                currentLevel==="items"
                                    ? backCategories
                                    : backItems
                            }
                        >
                            <ArrowLeft size={16}/>
                        </button>
                    ):(
                        <button onClick={onClose}>
                            ✕
                        </button>
                    )}

                    <span className="text-xs uppercase tracking-[0.15em]">
          Products
        </span>

                </div>


                <div className="px-6 py-6">

                    {currentLevel==="categories" && (
                        <div className="space-y-1">

                            {menuConfig.products.map(cat=>(
                                <button
                                    key={cat.name}
                                    onClick={()=>{
                                        setSelectedCategory(cat);
                                        setCurrentLevel("items");
                                    }}
                                    className="
              w-full
              flex items-center justify-between
              py-3
              text-sm
              border-b border-stone-100
            "
                                >
                                    {cat.name}
                                    <ChevronRight size={14}/>
                                </button>
                            ))}

                        </div>
                    )}


                    {currentLevel==="items" && selectedCategory &&(
                        <div className="space-y-1">

                            {selectedCategory.items.map(item=>(
                                <button
                                    key={item.id}
                                    onClick={()=>{

                                        if(item.subItems?.length){
                                            setSelectedItem(item);
                                            setCurrentLevel('subitems');
                                        }else{
                                            onClose();
                                        }

                                    }}
                                    className="
              w-full
              flex items-center justify-between
              py-3
              text-sm
              border-b border-stone-100
            "
                                >
                                    {item.name}
                                    {item.subItems?.length && (
                                        <ChevronRight size={14}/>
                                    )}
                                </button>
                            ))}

                        </div>
                    )}


                    {currentLevel==="subitems" && selectedItem &&(
                        <div className="space-y-1">

                            {selectedItem.subItems?.map(sub=>(
                                <Link
                                    key={sub.id}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="
               block
               py-3
               text-sm
               border-b border-stone-100
               text-stone-700
               hover:pl-2
               transition-all
             "
                                >
                                    {sub.name}
                                </Link>
                            ))}

                        </div>
                    )}

                </div>

            </div>
        )
    }


    return(
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="
     absolute top-full
     left-0 right-0
     bg-white
     border-t border-stone-100
     shadow-sm
     z-[90]
   "
        >

            <div className="py-2">

                {currentLevel==="categories" &&(
                    <div className="
      flex justify-center
      gap-5
    ">
                        {menuConfig.products.map(cat=>(
                            <button
                                key={cat.name}
                                onClick={()=>{
                                    setSelectedCategory(cat);
                                    setCurrentLevel('items');
                                }}
                                className="
             text-xs
             text-stone-600
             hover:text-black
          "
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                )}


                {currentLevel==="items" && selectedCategory &&(
                    <div className="flex justify-center gap-5">

                        <button
                            onClick={backCategories}
                            className="text-[11px] text-stone-400"
                        >
                            Back
                        </button>

                        {selectedCategory.items.map(item=>(
                            <button
                                key={item.id}
                                onClick={()=>{
                                    if(item.subItems?.length){
                                        setSelectedItem(item);
                                        setCurrentLevel('subitems');
                                    }
                                }}
                                className="
          text-xs
          hover:text-black
        "
                            >
                                {item.name}
                            </button>
                        ))}

                    </div>
                )}


                {currentLevel==="subitems" && selectedItem &&(
                    <div className="flex justify-center gap-5">

                        <button
                            onClick={backItems}
                            className="text-[11px] text-stone-400"
                        >
                            Back
                        </button>

                        {selectedItem.subItems?.map(sub=>(
                            <Link
                                key={sub.id}
                                href={sub.href}
                                onClick={onClose}
                                className="
           text-xs
           text-stone-600
           hover:text-black
         "
                            >
                                {sub.name}
                            </Link>
                        ))}

                    </div>
                )}

            </div>

        </div>
    )
}