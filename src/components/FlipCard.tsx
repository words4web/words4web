import { useState } from "react";
import { motion } from "framer-motion";
import type { FlipCardProps } from "../types/services";

export function FlipCard({
  service,
  index,
  hoveredIdx,
  setHoveredIdx,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isVertical = index % 2 === 1;

  // Alternate flip axes: vertical (X-axis) or horizontal (Y-axis) - both perfectly straight
  const animateProps = {
    rotateX: isVertical ? (isFlipped ? 180 : 0) : 0,
    rotateY: !isVertical ? (isFlipped ? 180 : 0) : 0,
  };

  const getBackTransform = () => {
    return isVertical ? "rotateX(180deg)" : "rotateY(180deg)";
  };

  const isHovered = hoveredIdx === index;
  const isAnyHovered = hoveredIdx !== null;
  const scale = isHovered ? 1.12 : isAnyHovered ? 0.85 : 1;

  return (
    <div
      className="w-full h-[380px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => {
        setIsFlipped(true);
        setHoveredIdx(index);
      }}
      onMouseLeave={() => {
        setIsFlipped(false);
        setHoveredIdx(null);
      }}
      onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full"
        animate={{ scale }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
        <motion.div
          className="relative w-full h-full select-none"
          style={{ transformStyle: "preserve-3d" }}
          animate={animateProps}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}>
          {/* Front Side Wrapper with Glass Reflection Sweep */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden glass-panel border border-black/5 dark:border-white/5 transition-all duration-300"
            style={{ backfaceVisibility: "hidden" }}>
            {/* Background Image (Slow Breathing Zoom) */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-90 animate-image-breathe"
              />
            </div>

            {/* Loop-animated Color-Shifting Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7b2cbf]/30 to-transparent mix-blend-color-dodge opacity-60 z-15 pointer-events-none animate-hue-loop" />

            {/* Dual Impulse Diagonal Waves (top-left to bottom-right) */}
            <div className="absolute inset-0 z-12 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-2 border-white/25 dark:border-[var(--primary)]/25 bg-white/5 dark:bg-[var(--primary)]/5 animate-impulse" />
              <div 
                className="absolute top-0 left-0 w-48 h-48 rounded-full border-2 border-white/25 dark:border-[var(--primary)]/25 bg-white/5 dark:bg-[var(--primary)]/5 animate-impulse"
                style={{ animationDelay: "2s" }}
              />
            </div>

            {/* Dark vignette to overlay on background image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent z-10 pointer-events-none" />

            {/* Title Content */}
            <div className="relative w-full h-full flex flex-col justify-end p-8 z-20">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white text-left">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Back Side Wrapper with Dynamic Liquid Flow Background */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl p-8 glass-panel border border-black/5 dark:border-white/5 flex flex-col justify-between bg-gradient-to-br from-[#7b2cbf]/5 via-[#f7f7f7] to-[#9d4edd]/5 dark:from-[#7b2cbf]/10 dark:via-[#0c0c0e] dark:to-[#9d4edd]/10 bg-[length:200%_200%] animate-liquid-flow transition-all duration-300"
            style={{
              backfaceVisibility: "hidden",
              transform: getBackTransform(),
            }}>
            <div className="flex flex-col gap-4 text-left">
              <span className="text-[var(--primary)] font-display text-xs uppercase tracking-widest font-semibold">
                Words4Web Brand Solution
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            {/* Stable Get Started Button */}
            <div className="flex items-center text-sm font-semibold text-[var(--primary)] mt-4">
              Get Started <span className="ml-2">→</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
