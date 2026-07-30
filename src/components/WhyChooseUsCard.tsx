import { motion } from "framer-motion";
import type { WhyChooseUsCardProps } from "../types/whyChooseUs";

export function WhyChooseUsCard({
  item,
  direction = "left",
  delay = 0,
}: WhyChooseUsCardProps) {
  const initialX = direction === "left" ? -30 : 30;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        y: -5,
        borderColor: "rgba(123, 44, 191, 0.4)",
        boxShadow: "0 20px 40px rgba(123, 44, 191, 0.15)",
      }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className="flex items-center gap-5 p-5 rounded-2xl border border-[var(--glass-border)] bg-white/95 dark:bg-neutral-950/95 shadow-md cursor-pointer text-left select-none group">
      {/* Colored Circular Icon Frame */}
      <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300 shrink-0 shadow-inner">
        {item.icon}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-0.5">
        <h4 className="font-display text-sm md:text-base font-bold text-[var(--text-primary)]">
          {item.title}
        </h4>
        <p className="text-xs md:text-sm text-[var(--text-primary)] leading-relaxed font-light">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
