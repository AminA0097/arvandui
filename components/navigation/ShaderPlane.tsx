"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function ShaderPlane() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const materialRef = useRef<THREE.ShaderMaterial>(null!);

    const { mouse, viewport } = useThree();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        materialRef.current.uniforms.uTime.value = t;
        materialRef.current.uniforms.uMouse.value = new THREE.Vector2(
            mouse.x * viewport.width,
            mouse.y * viewport.height
        );
    });

    return (
        <mesh ref={meshRef} scale={[12, 6, 1]}>
            <planeGeometry args={[1, 1, 256, 256]} />
            <shaderMaterial
                ref={materialRef}
                transparent
                uniforms={{
                    uTime: { value: 0 },
                    uMouse: { value: new THREE.Vector2(0, 0) },
                    uNoiseIntensity: { value: 0.2 },
                    uGlowPower: { value: 0.7 },
                }}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    );
}

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;

  varying vec2 vUv;
  varying float vDepth;

  float wave(vec2 uv) {
    return sin(uv.x * 5.0 + uTime * 1.5) * 0.03
         + sin(uv.y * 3.0 + uTime * 2.0) * 0.02;
  }

  void main() {
    vUv = uv;
    float d = wave(uv);
    vec3 pos = position;
    pos.z += d * 0.4;
    pos.x += uMouse.x * 0.015;
    pos.y += uMouse.y * 0.01;
    vDepth = pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uNoiseIntensity;
  uniform float uGlowPower;

  varying vec2 vUv;
  varying float vDepth;

  float noise(vec2 p){
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
  }

  float smoothNoise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);

    float a = noise(ip);
    float b = noise(ip + vec2(1.0, 0.0));
    float c = noise(ip + vec2(0.0, 1.0));
    float d = noise(ip + vec2(1.0, 1.0));

    vec2 uu = u*u*(3.0 - 2.0*u);

    return mix(a, b, uu.x) +
           (c - a)*uu.y*(1.0 - uu.x) +
           (d - b)*uu.x*uu.y;
  }

  void main() {
    float n = smoothNoise(vUv * 8.0 + uTime * 0.1);
    float liq = sin(vUv.x * 6.0 + uTime) * 0.05 +
                sin(vUv.y * 5.0 + uTime * 1.3) * 0.04;

    float final = liq + n * uNoiseIntensity;

    vec3 base = vec3(0.92 + final, 0.93, 0.98);
    float glow = smoothstep(0.0, 0.4, vDepth) * uGlowPower;

    gl_FragColor = vec4(base + glow, 1.0);
  }
`;
