import { OrbitControls, PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [dpr, setDpr] = useState(1);
  const [perfSucks, degrade] = useState(false);

  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={dpr}
      gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
      performance={{ min: 0.8 }}
      frameloop={!isMobile ? 'always' : 'demand'}
    >
      <PerformanceMonitor 
        onIncline={() => setDpr(1.5)} 
        onDecline={() => {
          setDpr(1);
          degrade(true);
        }} 
      />
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        dampingFactor={0.1}
        enabled={!isMobile} // Disable orbit controls on mobile for better performance
        enableDamping={!isMobile}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 100 : perfSucks ? 150 : 300} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;