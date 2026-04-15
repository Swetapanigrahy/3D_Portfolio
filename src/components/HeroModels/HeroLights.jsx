import * as THREE from "three";
import { useRef } from "react";

const HeroLights = () => {
  const mainLight = useRef();

  return (
    <>

      <directionalLight
        ref={mainLight}
        position={[5, 5, 5]}
        intensity={2}
      />

      {/* lamp light */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={40}
      />

      {/* blue light */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={20}
        color="#4cc9f0"
      />

      {/* purple fill */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={30}
        color="#9d4edd"
      />

      {/* area light */}
      <primitive
        object={new THREE.RectAreaLight("#a259ff", 5, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* soft atmosphere */}
      <pointLight position={[0, 1, 0]} intensity={3} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={3} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
