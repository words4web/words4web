import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "glass";
}

export function MagneticButton({ children, className, variant = "primary", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[var(--primary)] text-white hover:brightness-110 shadow-lg shadow-[var(--primary)]/20",
    ghost: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--primary)]/5",
    glass: "glass-panel text-[var(--text-primary)] hover:bg-[var(--primary)]/10",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative overflow-hidden px-8 py-4 rounded-full font-medium transition-colors duration-300 interactive group",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Ripple/Glow effect on hover */}
      <div className="absolute inset-0 z-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out origin-center" />
    </motion.button>
  );
}
