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
      headerClassName="max-w-3xl mx-auto text-center mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {whyChooseUsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group relative rounded-3xl p-8 flex flex-col justify-between h-[360px] bg-white/[0.02] dark:bg-white/[0.01] border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[var(--primary)]/30 hover:shadow-[0_20px_50px_rgba(123,44,191,0.15)] transition-all duration-500 overflow-hidden text-left select-none">
            <div className="flex flex-col gap-6">
              {/* Larger Circular Icon Frame (w-16 h-16) */}
              <div className="w-16 h-16 rounded-full bg-black/10 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform duration-300 shrink-0 [&>svg]:w-8 [&>svg]:h-8">
                {item.icon}
              </div>

              {/* Title & Slogan */}
              <div className="flex flex-col gap-3">
                <h4 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors duration-300">
                  {item.title}
                </h4>
                {/* Bigger description text */}
                <p className="text-sm md:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bigger Custom Tag Badge */}
            {item.badge && (
              <div className="self-start">
                <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-xs md:text-sm font-semibold bg-black/10 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300">
                  {item.badge}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
