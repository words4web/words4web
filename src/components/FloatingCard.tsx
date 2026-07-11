import { motion } from "framer-motion";
import type { FloatingCardProps } from "../types/hero";

export const FloatingCard = ({
  title,
  delay,
  className,
  isGlowing,
  cardRef,
}: FloatingCardProps) => {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isGlowing ? 1.1 : 1,
        boxShadow: isGlowing
          ? "0 0 35px 12px rgba(157, 78, 221, 0.65), inset 0 0 15px rgba(157, 78, 221, 0.3)"
          : "0 8px 32px 0 rgba(0, 0, 0, 0.05)",
        borderColor: isGlowing
          ? "rgba(157, 78, 221, 0.8)"
          : "var(--glass-border)",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 15 },
        boxShadow: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
      className={`absolute z-10 glass-panel px-6 py-4 rounded-2xl flex items-center gap-3 interactive overflow-hidden ${className}`}
      style={{ isolation: "isolate" }}
      data-cursor="Explore">
      {/* Sliding background fill from left to right */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isGlowing ? "0%" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-[rgba(157,78,221,0.22)] to-[rgba(123,44,191,0.4)] z-0"
      />

      <div
        className={`w-2 h-2 rounded-full relative z-10 transition-all duration-300 ${isGlowing ? "bg-purple-300 animate-ping" : "bg-[var(--primary)]"}`}
      />
      <span className="font-medium text-sm whitespace-nowrap relative z-10">
        {title}
      </span>
    </motion.div>
  );
};
