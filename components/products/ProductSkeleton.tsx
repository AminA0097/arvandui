'use client';

export default function ProductGridSkeleton() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <div className="w-32 h-4 bg-stone-200 rounded animate-pulse" />
                <div className="w-20 h-4 bg-stone-200 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white border rounded-xl md:rounded-2xl p-4 space-y-4">
                        <div className="w-full h-32 bg-stone-200 rounded-lg animate-pulse" />
                        <div className="w-3/4 h-4 bg-stone-200 rounded animate-pulse" />
                        <div className="w-1/2 h-3 bg-stone-200 rounded animate-pulse" />
                        <div className="w-1/3 h-5 bg-stone-200 rounded animate-pulse" />
                        <div className="flex gap-2">
                            <div className="w-12 h-4 bg-stone-200 rounded-full animate-pulse" />
                            <div className="w-16 h-4 bg-stone-200 rounded-full animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}