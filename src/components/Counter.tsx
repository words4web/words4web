import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import type { CounterProps } from "../types/about";

export function Counter({
  value,
  label,
  suffix = "",
  icon,
  glowColor,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.round(stepValue * currentStep));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="relative p-[3px] rounded-3xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
      {/* Glowing Line Tracing Around Border */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, var(--trace-color-1) 340deg, var(--trace-color-2) 350deg, var(--trace-color-3) 360deg)",
          }}
        />
      </div>

      {/* Inner Card Content */}
      <div className="relative flex items-center gap-5 md:gap-6 p-6 md:p-8 bg-[#f7f7f7] dark:bg-[#0c0c0e] rounded-[21px] text-left overflow-hidden h-full shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] border border-black/[0.03] dark:border-white/[0.02]">
        {/* Dynamic Hover Glow */}
        <div
          className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-tr ${glowColor} opacity-5 blur-2xl group-hover:scale-150 group-hover:opacity-20 transition-all duration-700 pointer-events-none rounded-full`}
        />

        {/* Circular Icon Frame */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-center text-[#9d4edd] group-hover:bg-[#9d4edd] group-hover:text-white transition-all duration-500 shrink-0 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:md:w-7 [&>svg]:md:h-7">
          {icon}
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-display text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-none">
            {count}
            {suffix}
          </span>
          <span className="text-[10px] md:text-xs tracking-wider text-[var(--text-secondary)] font-bold uppercase leading-tight truncate">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
