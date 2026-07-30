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
      headerClassName="max-w-3xl mx-auto text-center mb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {countriesData.map((country, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0 15px 30px rgba(123, 44, 191, 0.15)",
            }}
            className="relative p-[2px] rounded-2xl overflow-hidden cursor-pointer select-none group h-full">
            {/* Glowing Line Tracing Around Border (Always Active) */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, #a855f7 340deg, #c084fc 350deg, #e9d5ff 360deg)",
                }}
              />
            </div>

            {/* Inner Card Content */}
            <div className="relative flex flex-col items-center gap-3 p-5 bg-white dark:bg-[#0c0a12] border border-black/5 dark:border-white/5 rounded-[14px] text-center h-full z-10">
              <span
                className={`fi fi-${country.code.toLowerCase()} text-5xl rounded shadow-sm group-hover:scale-110 transition-transform duration-300`}
              />
              <span className="text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] tracking-wide text-center">
                {country.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
