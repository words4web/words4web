import { motion } from "framer-motion";
import { Section } from "./Section";
import { MagneticButton } from "./MagneticButton";

export function WhoWeAre() {
  return (
    <Section
      id="who-we-are"
      badge="Who We Are"
      title={
        <span>
          A Full-Service <span className="text-gradient">Digital Agency</span>
        </span>
      }
      align="center"
      hasBorderTop
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-[var(--text-primary)] font-medium leading-relaxed"
        >
          Words4Web is a full-service digital marketing agency working with
          businesses worldwide, building their online presence through web and
          app development, SEO, content, social media, design, Amazon marketing,
          and paid ads, with branches in India and the UK.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed"
        >
          Whether you need a new website built from scratch, a mobile app your
          customers would love, stronger search rankings, a social media
          presence that feels alive, or an Amazon storefront that converts
          browsers into buyers, we handle it all.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4"
        >
          <a href="#contact">
            <MagneticButton className="rounded-xl px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-sm text-white shadow-[0_0_20px_rgba(123,44,191,0.3)] border-none">
              Talk to Our Team →
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
