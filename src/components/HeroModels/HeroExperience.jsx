import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const AutoRotateModel = () => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Room />
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const controls = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ touchAction: 'pan-y' }}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={!isMobile}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        maxDistance={20}
        minDistance={5}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 100 : 300} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
        >
          {isMobile ? <AutoRotateModel /> : <Room />}
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
