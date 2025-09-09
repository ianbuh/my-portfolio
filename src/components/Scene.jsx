import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 2]} intensity={0.6} />

      {/* Wireframe object */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>

      {/* Minimal stars (white) */}
      <Stars radius={80} depth={40} count={2000} factor={3} fade />

      {/* Controls (optional: no zoom, slow rotate) */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
