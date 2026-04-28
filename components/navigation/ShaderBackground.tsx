"use client";

import { Canvas } from "@react-three/fiber";
import ShaderPlane from "./ShaderPlane";

export default function ShaderBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas>
                <ShaderPlane />
            </Canvas>
        </div>
    );
}
