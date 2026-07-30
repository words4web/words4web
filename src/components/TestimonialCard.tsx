import { motion } from "framer-motion";
import type { TestimonialItem } from "../types/testimonial";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      whileHover={{
        scale: 1.03,
        y: -5,
        borderColor: "rgba(168, 85, 247, 0.6)",
        boxShadow: "0 15px 30px rgba(123, 44, 191, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="rounded-[2.25rem] p-8 flex flex-col justify-between min-h-[280px] bg-white/95 dark:bg-[#13111c]/60 border border-black/10 dark:border-white/10 shadow-sm backdrop-blur-md select-none hover:z-10 cursor-pointer"
    >
      <div className="flex flex-col gap-6">
        {/* Top Section: Avatar bubble & Stars */}
        <div className="flex items-center justify-between">
          {/* Avatar Ring with gradient border and custom text initials */}
          <div className="relative w-13 h-13 rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
              <span className="text-sm font-display font-black text-white tracking-tight">
                {testimonial.initials}
              </span>
            </div>
          </div>
          
          {/* 5 Golden Stars */}
          <div className="flex gap-1 text-amber-400 text-lg">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="drop-shadow-[0_1px_3px_rgba(245,158,11,0.2)]">★</span>
            ))}
          </div>
        </div>

        {/* Quote Content */}
        <p className="text-[15px] md:text-[16px] text-[var(--text-primary)] font-light leading-relaxed text-left">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author Profile */}
      <div className="mt-8 text-left">
        <h4 className="font-display text-base font-bold text-[var(--text-primary)] leading-tight">
          {testimonial.name}
        </h4>
        <p className="text-xs text-[var(--text-primary)] opacity-70 mt-1 font-medium">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}
