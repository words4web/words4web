import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { heroCardsData } from "../data/heroCardsData";
import { ParticleSphere } from "./ParticleSphere";
import { FloatingCard } from "./FloatingCard";
import type { ShootingStar } from "../types/hero";

export function Hero() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [glowingCards, setGlowingCards] = useState<Record<number, boolean>>({});
  const [stars, setStars] = useState<ShootingStar[]>([]);

  // Fisher-Yates shuffled target index queue ref
  const targetQueueRef = useRef<number[]>([]);

  useEffect(() => {
    const triggerShootingStar = () => {
      const container = containerRef.current;
      if (!container) return;

      // Refill the queue if empty
      if (targetQueueRef.current.length === 0) {
        const indexes = Array.from(
          { length: heroCardsData.length },
          (_, i) => i,
        );
        // Shuffle indexes
        for (let i = indexes.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
        }
        targetQueueRef.current = indexes;
      }

      // Pop the next target index from the shuffled queue
      const targetIndex = targetQueueRef.current.pop()!;
      const targetCard = cardRefs.current[targetIndex];

      if (targetCard) {
        const containerRect = container.getBoundingClientRect();
        const cardRect = targetCard.getBoundingClientRect();

        // Calculate card center coordinates relative to the container
        const endX = cardRect.left - containerRect.left + cardRect.width / 2;
        const endY = cardRect.top - containerRect.top + cardRect.height / 2;

        // If card is on the left half of the screen, shoot from top-right.
        // If card is on the right half of the screen, shoot from top-left.
        const isLeftCard = endX < containerRect.width / 2;
        const startX = isLeftCard ? containerRect.width + 100 : -100;
        const startY = -100;

        // Calculate travel angle using trigonometry
        const dx = endX - startX;
        const dy = endY - startY;
        const tailAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

        setStars((prev) => [
          ...prev,
          {
            startX,
            startY,
            endX,
            endY,
            tailAngle,
            id: Date.now() + Math.random(), // Unique ID key
          },
        ]);

        // Set card glowing state right when the star hits (takes 1.5 seconds to travel)
        const hitTimeout = setTimeout(() => {
          setGlowingCards((prev) => ({ ...prev, [targetIndex]: true }));
          // Card remains glowing for 2 seconds
          const glowTimeout = setTimeout(() => {
            setGlowingCards((prev) => ({ ...prev, [targetIndex]: false }));
          }, 2000);

          return () => clearTimeout(glowTimeout);
        }, 1500);

        return () => clearTimeout(hitTimeout);
      }
    };

    // Trigger every 5 seconds
    const interval = setInterval(triggerShootingStar, 5000);
    // Trigger initial run after 3 seconds so user sees it quickly on load
    const initialTimeout = setTimeout(triggerShootingStar, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

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

      {/* Floating UI Cards & Shooting Star overlay */}
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none z-10 w-full overflow-hidden">
        <div className="relative w-full h-full">
          {heroCardsData.map((card, idx) => (
            <FloatingCard
              key={idx}
              title={card.title}
              delay={card.delay}
              className={card.className}
              isGlowing={!!glowingCards[idx]}
              cardRef={(el) => {
                cardRefs.current[idx] = el;
              }}
            />
          ))}

          {/* Animated Shooting Stars */}
          {stars.map((s) => (
            <motion.div
              key={s.id}
              initial={{
                x: s.startX,
                y: s.startY,
                opacity: 0,
                scale: 0.1,
              }}
              animate={{
                x: s.endX,
                y: s.endY,
                opacity: [0, 1, 1, 0],
                scale: [0.1, 1.2, 1.2, 0.1],
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onAnimationComplete={() => {
                setStars((prev) => prev.filter((item) => item.id !== s.id));
              }}
              className="absolute z-20 w-10 h-10 flex items-center justify-center pointer-events-none"
              style={{
                translateX: "-50%",
                translateY: "-50%",
              }}>
              {/* Outer massive purple glow envelope */}
              <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-40 blur-md scale-150" />

              {/* Sparkle Star Head - Diamond shape */}
              <div className="w-3.5 h-3.5 bg-white rotate-[45deg] shadow-[0_0_15px_6px_#fff,0_0_35px_12px_rgba(157,78,221,0.8)] relative z-10" />

              {/* Sparkle Star Flare Cross lines */}
              <div className="absolute w-8 h-[1.5px] bg-white opacity-85 blur-[0.5px]" />
              <div className="absolute h-8 w-[1.5px] bg-white opacity-85 blur-[0.5px]" />

              {/* Long glowing tail dynamically aligned opposite to the direction of travel */}
              <div
                className="absolute right-1/2 w-52 h-[8px] bg-gradient-to-l from-white via-[var(--primary)] to-transparent origin-right blur-[1.5px] opacity-90"
                style={{
                  clipPath: "polygon(0 35%, 100% 0, 100% 100%, 0 65%)",
                  transform: `rotate(${s.tailAngle}deg)`,
                }}
              />
            </motion.div>
          ))}
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
    </section>
  );
}
