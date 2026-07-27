import { motion } from "framer-motion";
import { Section } from "./Section";
import { countriesData } from "../data/countriesData";

export function Countries() {
  return (
    <Section
      id="countries"
      badge="Global Reach"
      title="Countries We Have Served"
      description="Connecting brands to customers worldwide. We'll be putting their flags to highlight our global foot-print."
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
        {countriesData.map((country, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl glass-panel border border-white/5 bg-black/10 dark:bg-white/[0.01] hover:border-[var(--primary)]/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-4xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] group-hover:scale-110 transition-transform duration-300">
              {country.flag}
            </span>
            <span className="text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] tracking-wide text-center">
              {country.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
