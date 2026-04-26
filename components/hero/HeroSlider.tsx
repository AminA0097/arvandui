"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides=[
    {
        image:'/hero-1.jpg',
        label:'Handcrafted Leather Goods',
        line1:'Timeless Pieces',
        line2:'Built To Last.',
        text:'Premium leather shoes, bags and coats designed with quiet luxury.'
    },
    {
        image:'/hero-2.jpg',
        label:'Winter Collection',
        line1:'Refined',
        line2:'Leather Essentials.',
        text:'Quiet luxury silhouettes shaped for everyday use.'
    },
    {
        image:'/hero-3.jpg',
        label:'Signature Accessories',
        line1:'Crafted',
        line2:'To Endure.',
        text:'Full-grain leather accessories built around durability.'
    }
]

export default function HeroSlider(){
    const [index,setIndex]=useState(0)

    useEffect(()=>{
        const t=setInterval(()=>{
            setIndex(v=>(v+1)%slides.length)
        },5000)
        return ()=>clearInterval(t)
    },[])

    const slide=slides[index]

    return (
        <section className="relative min-h-[92vh] overflow-hidden bg-[#f7f4ef]">

            <div
                className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-700"
                style={{backgroundImage:`url(${slide.image})`}}
            />

            <div className="absolute inset-0 bg-white/35" />

            <div className="relative z-10 max-w-7xl mx-auto min-h-[92vh] px-6 grid md:grid-cols-2 items-center gap-12">

                <div className="space-y-8">

                    <p className="uppercase tracking-[0.35em] text-xs text-stone-600">
                        {slide.label}
                    </p>

                    <h1 className="text-5xl md:text-7xl leading-[0.95] font-light tracking-tight">
                        {slide.line1}
                        <br/>
                        {slide.line2}
                    </h1>

                    <p className="max-w-lg text-stone-600 leading-8">
                        {slide.text}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <Link
                            href="/products"
                            className="rounded-2xl px-8 py-4 bg-stone-900 text-white"
                        >
                            Shop Collection
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-2xl px-8 py-4 border border-stone-300 bg-white/70"
                        >
                            Our Craft
                        </Link>

                    </div>
                </div>

                <div className="hidden md:flex justify-end">
                    <div className="w-[420px] rounded-[28px] bg-white/80 border border-stone-200 p-8">

                        <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                            <img
                                src="/featured-bag.jpg"
                                alt="featured"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-2xl font-light">Signature Bag</h3>
                        <p className="text-stone-500 mt-2">Full-grain leather</p>

                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_,i)=>(
                    <button
                        key={i}
                        onClick={()=>setIndex(i)}
                        className={i===index?'w-10 h-[2px] bg-stone-900':'w-6 h-[2px] bg-stone-400'}
                    />
                ))}
            </div>

        </section>
    )
}