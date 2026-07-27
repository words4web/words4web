import { motion } from "framer-motion";
import { Section } from "./Section";
import { whyChooseUsData } from "../data/whyChooseUsData";

export function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      badge="Why Choose Us"
      title="Why Do Businesses Choose Words4Web?"
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {whyChooseUsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-[1px] rounded-3xl overflow-hidden group bg-white/5 border border-white/10 hover:border-[var(--primary)]/40 transition-colors duration-500"
          >
            <div className="p-8 rounded-[23px] bg-black/10 dark:bg-[#0c0c0e] h-full flex flex-col gap-4 text-left relative overflow-hidden backdrop-blur-md">
              {/* Animated corner glow */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-[var(--primary)] to-[#9d4edd] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full" />

              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse" />
                <h4 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
