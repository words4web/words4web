import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";

function ParticleSphere({ theme }: { theme: "light" | "dark" }) {
  const count = 3000;
  const mesh = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2; // radius
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  const particleColor = theme === "dark" ? "#ffffff" : "#7b2cbf";

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color={particleColor}
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const FloatingCard = ({
  title,
  delay,
  className,
}: {
  title: string;
  delay: number;
  className: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, type: "spring" }}
      className={`absolute z-10 glass-panel px-6 py-4 rounded-2xl flex items-center gap-3 interactive ${className}`}
      data-cursor="Explore">
      <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
      <span className="font-medium text-sm whitespace-nowrap">{title}</span>
    </motion.div>
  );
};

export function Hero() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--background-secondary)_0%,_var(--background)_100%)] opacity-50" />

      {/* 3D Canvas */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <ParticleSphere theme={theme} />
          <Environment preset="city" />
        </Canvas>
      </motion.div>

      {/* Floating UI Cards */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full">
        <div className="relative w-full h-full">
          <FloatingCard
            title="Amazon Marketing Services"
            delay={0.2}
            className="top-[22%] left-[5%] md:left-[15%]"
          />
          <FloatingCard
            title="Mobile App Development"
            delay={0.4}
            className="top-[60%] left-[2%] md:left-[10%]"
          />
          <FloatingCard
            title="Web Designing"
            delay={0.6}
            className="top-[15%] right-[5%] md:right-[15%]"
          />
          <FloatingCard
            title="Social Media Optimization"
            delay={0.8}
            className="top-[52%] right-[2%] md:right-[10%]"
          />
          <FloatingCard
            title="Graphic Designing"
            delay={1.0}
            className="bottom-[18%] left-[25%]"
          />
          <FloatingCard
            title="SEO Services"
            delay={1.1}
            className="bottom-[28%] right-[20%]"
          />
          <FloatingCard
            title="Content Writing"
            delay={1.2}
            className="bottom-[8%] right-[40%]"
          />
        </div>
      </div>

      {/* Hero Typography */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="glass-panel px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 pointer-events-auto interactive">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
          </span>
          <span className="text-xs font-medium uppercase tracking-wider">
            Best Digital Marketing Agency
          </span>
        </motion.div>

        <motion.h1
          className="font-display font-bold text-5xl md:text-8xl tracking-tight leading-[1.1] mb-6 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          We blend strategy, <br />
          <span className="text-gradient">storytelling, & smart design.</span>
        </motion.h1>

        <motion.p
          className="text-md md:text-lg text-[var(--text-secondary)] max-w-3xl font-light pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}>
          At Words4Web, we turn your brand's potential into real, measurable
          growth.
          <br className="hidden md:inline" />
          <span className="text-[var(--text-primary)] font-normal block mt-2 text-sm md:text-base">
            Good News! We are now multilingual as we present to you
            international and national language web content, blogging, and SEO
            services, encouraging businesses to reach every nook and corner of
            the nation.
          </span>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}>
        <span className="text-xs uppercase tracking-widest font-medium text-[var(--text-secondary)]">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-[var(--border)] overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-[var(--primary)]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
