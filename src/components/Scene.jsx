import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function AnimatedTorus() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.2 * delta;
    ref.current.rotation.y += 0.4 * delta;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusGeometry args={[1.2, 0.45, 32, 64]} />
      <meshStandardMaterial metalness={0.7} roughness={0.2} color="#60a5fa" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ width: "100%", height: "100vh" }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <Suspense fallback={null}>
        <AnimatedTorus />
        <Stars radius={100} depth={50} count={400} factor={4} saturation={0} />
      </Suspense>

      {/* subtle controls for desktop — user can drag lightly */}
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
