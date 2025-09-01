import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef, useState, useEffect } from "react";
import * as THREE from 'three';

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const controls = useRef();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ touchAction: 'none' }}
      gl={{ antialias: true, alpha: true }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />
      
      <OrbitControls
        ref={controls}
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={!isTouchDevice}
        autoRotateSpeed={0.5}
        rotateSpeed={isMobile ? 0.5 : 1}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        maxDistance={20}
        minDistance={5}
        // Enable touch controls
        touchAction="pan-y"
        touches={{
          ONE: isTouchDevice ? 'rotate' : 'none',
          TWO: 'none'
        }}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 100 : 300} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
