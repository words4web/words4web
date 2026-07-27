import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { faqData } from "../data/faqData";

export function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Section
      id="faqs"
      badge="FAQ"
      title="Frequently Asked Questions"
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqData.map((item, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className="border border-white/5 bg-black/10 dark:bg-white/[0.01] rounded-2xl overflow-hidden glass-panel backdrop-blur-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display font-semibold text-base text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="shrink-0 text-xl font-light text-[var(--text-secondary)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed font-light border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[var(--primary)] hover:text-white transition-colors"
        >
          <span>Still Have Questions? Talk to Us</span>
          <span>→</span>
        </a>
      </div>
    </Section>
  );
}
