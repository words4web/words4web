import { motion } from "framer-motion";
import { Section } from "./Section";
import { industriesData } from "../data/industriesData";

export function Industries() {
  return (
    <Section
      id="industries"
      badge="Industries We Serve"
      title="Industries We Work With"
      description="We adapt our approach to what matters most in your industry"
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {industriesData.map((ind, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl glass-panel border border-white/5 bg-black/10 dark:bg-white/[0.01] hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-black/10 dark:bg-white/[0.02] border border-white/5 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-white group-hover:bg-[var(--primary)] transition-all duration-500">
              {ind.icon}
            </div>
            <span className="text-sm font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] tracking-wide text-center">
              {ind.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
