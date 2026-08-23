import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";

function Emblem() {
  const group = useRef();
  useFrame(({ clock, pointer }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.18 + pointer.x * 0.35;
    group.current.rotation.x = pointer.y * 0.18;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.7}>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusKnotGeometry args={[1.25, 0.14, 190, 28, 2, 3]} />
          <MeshDistortMaterial
            color="#e8e8e8"
            metalness={1}
            roughness={0.16}
            distort={0.12}
            speed={1.8}
          />
        </mesh>
        <mesh scale={0.68}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#151515"
            metalness={0.9}
            roughness={0.28}
            wireframe
          />
        </mesh>
        <pointLight position={[2, 3, 3]} intensity={18} color="#fff" />
        <pointLight position={[-3, -1, 2]} intensity={7} color="#9a9a9a" />
      </group>
    </Float>
  );
}
export default function Hero3DScene() {
  return (
    <div className="hero-canvas">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.45} />
        <Emblem />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
