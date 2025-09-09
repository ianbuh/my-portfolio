import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { useRef } from "react";

export default function Background() {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled>
          <PointMaterial transparent color="white" size={0.005} sizeAttenuation />
        </Points>
      </Canvas>
    </div>
  );
}
