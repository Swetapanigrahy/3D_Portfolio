import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

const techIcons = [
  { name: "react", color: "#61DAFB" },
  { name: "javascript", color: "#F7DF1E" },
  { name: "nodejs", color: "#68A063" },
  { name: "python", color: "#3776AB" },
  { name: "git", color: "#F05032" },
  { name: "css3", color: "#1572B6" },
];

function Icon({ position, color, index }) {
  const mesh = useRef();
  const time = useRef(0);

  const initialPosition = useMemo(
    () => [
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20,
    ],
    []
  );

  useFrame((state) => {
    if (!mesh.current) return;

    time.current += 0.01;
    const t = time.current * 0.5;

    mesh.current.rotation.x = Math.sin(t * 0.7) * 0.5;
    mesh.current.rotation.y = Math.cos(t * 0.9) * 0.5;
    mesh.current.rotation.z = Math.sin(t * 1.1) * 0.5;

    mesh.current.position.y =
      initialPosition[1] + Math.sin(time.current * 0.8) * 0.5;
    mesh.current.position.x =
      initialPosition[0] + Math.cos(time.current * 0.6) * 0.5;

    const scale = 1 + Math.sin(time.current * 0.5) * 0.2;
    mesh.current.scale.set(scale, scale, scale);
  });

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = Math.floor(Math.random() * 4) + 5;
    const radius = 0.5;

    for (let i = 0; i <= sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }

    const extrudeSettings = {
      steps: 1,
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 2,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  return (
    <mesh ref={mesh} position={initialPosition} castShadow receiveShadow>
      <primitive object={geometry} attach="geometry" />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.4}
        metalness={0.7}
      />
    </mesh>
  );
}

function FloatingIcons() {
  const { camera } = useThree();
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((icon) => {
        icon.lookAt(camera.position);
      });
    }
  });

  return (
    <group ref={group}>
      {techIcons.map((icon, i) => (
        <Icon
          key={i}
          position={[
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20,
          ]}
          color={icon.color}
          index={i}
        />
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 30],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.8}
          color="#8b5cf6"
        />
        <pointLight position={[0, 15, 0]} intensity={0.5} color="#ec4899" />

        <Suspense fallback={null}>
          <FloatingIcons />
          <EffectComposer multisampling={0}>
            <SelectiveBloom
              lights={[]} // Add your light refs here if needed
              selection={[]} // Add your mesh refs here if needed
              intensity={1.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
              kernelSize={2}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
