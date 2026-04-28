"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({ src }: { src: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const sx = useSpring(x, { stiffness: 120, damping: 18 });
    const sy = useSpring(y, { stiffness: 120, damping: 18 });

    function move(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 20);
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * 20);
    }

    return (
        <motion.div
            style={{ x: sx, y: sy }}
            onMouseMove={move}
            className="relative w-48 h-60 rounded-xl overflow-hidden shadow-lg"
        >
            <Image src={src} alt="" fill className="object-cover" />
        </motion.div>
    );
}
