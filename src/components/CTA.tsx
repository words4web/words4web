import { motion } from "framer-motion";
import { Section } from "./Section";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  return (
    <Section id="cta" hasBorderTop className="py-24">
      <div className="max-w-5xl mx-auto rounded-3xl p-8 md:p-16 glass-panel border border-white/5 relative overflow-hidden bg-gradient-to-tr from-black/20 to-[var(--primary)]/10 dark:from-[#0c0c0e]/80 dark:to-[var(--primary)]/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-center flex flex-col items-center gap-6">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#9d4edd]/10 blur-[60px] rounded-full pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
        >
          Ready to Build your Brand with{" "}
          <span className="text-gradient">Words4Web?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl"
        >
          Whether you need Website Development, mobile app development, Social
          media management, SEO, Content Writing or Paid Ads Management,
          Words4Web handles it all. Let's build a plan around what your business
          actually needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          <a href="#contact">
            <MagneticButton className="rounded-xl px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-sm text-white shadow-[0_0_20px_rgba(123,44,191,0.3)] border-none">
              Book a Free Strategy Call →
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
