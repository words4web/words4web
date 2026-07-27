import { motion } from "framer-motion";
import { Section } from "./Section";
import { processData } from "../data/processData";

export function Process() {
  return (
    <Section
      id="process"
      badge="Our Process"
      title="How We Work"
      description="A clear, connected process — whether you need one service or all eight."
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-12 lg:gap-8">
        {/* Continuous Connecting Line for Desktop */}
        <div className="absolute left-[31px] lg:left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[#9d4edd] to-[var(--primary)] opacity-20 hidden lg:block" />

        {/* Process Steps */}
        {processData.map((step, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full gap-8 lg:gap-0 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
              {/* Content Panel (Left or Right depending on alignment) */}
              <div className="w-full lg:w-1/2 px-4 lg:px-12 flex justify-start lg:justify-end text-left lg:text-right">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl glass-panel border border-white/5 bg-black/10 dark:bg-white/[0.01] max-w-md ${
                    isEven ? "lg:text-right" : "lg:text-left lg:mr-auto"
                  }`}>
                  <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Central Badge/Milestone Circle */}
              <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: idx * 0.1,
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[#9d4edd] p-[2px] shadow-[0_0_20px_rgba(157,78,221,0.25)]">
                  <div className="w-full h-full rounded-full bg-[#120826] flex items-center justify-center">
                    <span className="font-display text-base font-black text-white">
                      {step.step}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Empty Spacer Column for Desktop */}
              <div className="w-full lg:w-1/2 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
