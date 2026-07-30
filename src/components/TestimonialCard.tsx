import { motion } from "framer-motion";
import type { TestimonialCardProps } from "../types/testimonial";

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6">
      <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[var(--text-primary)] italic">
        "{testimonial.quote}"
      </blockquote>

      <div className="border-t border-white/5 pt-4 flex items-center justify-between">
        <div>
          <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
            {testimonial.name}
          </h4>
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
