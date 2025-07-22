import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TechIcon3D = ({ position = [0, 0, 0], color = '#0ea5e9' }) => {
  const mesh = useRef();
  const time = useRef(0);
  
  // Animation loop with requestAnimationFrame
  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    time.current += delta;
    
    // Smooth rotation animation
    mesh.current.rotation.x = Math.sin(time.current * 0.5) * 0.5;
    mesh.current.rotation.y = time.current * 0.3;
    
    // Subtle floating effect
    mesh.current.position.y = position[1] + Math.sin(time.current * 1.5) * 0.1;
  });
  
  // Create geometry and material only once
  const geometry = new THREE.IcosahedronGeometry(0.7, 1);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.3,
    metalness: 0.8,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide
  });
  
  return (
    <group position={position}>
      <mesh
        ref={mesh}
        geometry={geometry}
        material={material}
        castShadow
        receiveShadow
      />
    </group>
  );
};

export default TechIcon3D;
