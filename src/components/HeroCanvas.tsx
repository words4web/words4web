import { Canvas } from "@react-three/fiber";
import { ParticleSphere } from "./ParticleSphere";

interface HeroCanvasProps {
  theme: "light" | "dark";
}

export default function HeroCanvas({ theme }: HeroCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 } as any}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <ParticleSphere theme={theme} />
    </Canvas>
  );
}
