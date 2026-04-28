"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({
                                     children,
                                 }: {
    children: React.ReactNode;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 220, damping: 18 });
    const springY = useSpring(y, { stiffness: 220, damping: 18 });

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.30);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.30);
    }

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            onMouseMove={handleMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
}
