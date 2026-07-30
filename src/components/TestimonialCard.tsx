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
        boxShadow: "0 15px 30px rgba(123, 44, 191, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="relative p-[2px] rounded-[2.25rem] overflow-hidden cursor-pointer select-none group">
      {/* Glowing Line Tracing Around Border (Visible on Hover Only) */}
      <div className="absolute inset-0 rounded-[2.25rem] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, var(--trace-color-1) 340deg, var(--trace-color-2) 350deg, var(--trace-color-3) 360deg)",
          }}
        />
      </div>

      {/* Inner Card Content - Using solid background to mask the spinning gradient behind it */}
      <div className="relative flex flex-col justify-between min-h-[280px] p-8 bg-white dark:bg-[#13111c] border border-black/5 dark:border-white/5 rounded-[34px] text-left h-full z-10">
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
                <span
                  key={i}
                  className="drop-shadow-[0_1px_3px_rgba(245,158,11,0.2)]">
                  ★
                </span>
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
      </div>
    </motion.div>
  );
}
