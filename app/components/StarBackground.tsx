"use client";
import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
//@ts-ignore;
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useMountedTheme } from "@lib/hook";

const StarBackground: React.FC<React.ComponentPropsWithoutRef<"group">> = (
  props
) => {
  const ref = useRef<THREE.Points>(null);

  const [sphere] = useState<Float32Array>(() => {
    const positions = random.inSphere(new Float32Array(5001), { radius: 1.2 });
    return new Float32Array(positions);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const { currentTheme } = useMountedTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update the canvas rendering when the theme changes
  useEffect(() => {
    setIsDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  if (!isDarkMode) {
    return null; // Do not render the component if the theme is not dark
  }

  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
