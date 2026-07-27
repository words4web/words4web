import { motion } from "framer-motion";
import { Section } from "./Section";
import { toolsData } from "../data/toolsData";

export function Tools() {
  return (
    <Section
      id="tools"
      badge="Our Toolkit"
      title="Tools & Platforms We Use"
      description="The right tools for each discipline — chosen for the project, not forced into every one."
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {toolsData.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="p-[1px] rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300 group"
          >
            <div className="p-6 rounded-[15px] bg-black/15 dark:bg-[#0c0c0e] h-full flex flex-col gap-4 text-left relative backdrop-blur-md">
              <h4 className="font-display text-base font-bold text-[var(--text-primary)] border-b border-white/5 pb-3">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.03] dark:bg-white/[0.02] border border-white/5 text-[var(--text-secondary)] hover:text-white hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/30 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
