import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ParticleSphere } from "./ParticleSphere";

interface HeroCanvasProps {
  theme: "light" | "dark";
}

export default function HeroCanvas({ theme }: HeroCanvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 } as any}>
      <ambientLight intensity={0.5} />
      <ParticleSphere theme={theme} />
      <Environment preset="city" />
    </Canvas>
  );
}
