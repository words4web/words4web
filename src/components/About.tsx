import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";
import { aboutData, metricsIcons, glowColors } from "../data/aboutData";
import { Counter } from "./Counter";
import { MagneticButton } from "./MagneticButton";

export function About() {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });

  return (
    <Section
      id="about"
      badge={aboutData.badge}
      title={
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-[#7b2cbf]/20 blur-[30px] rounded-full pointer-events-none" />
          <span className="relative">
            Our <span className="text-gradient">Story</span>
          </span>
        </span>
      }
      align="center"
      headerClassName="mb-16 mx-auto text-center"
      hasBorderTop>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-end">
        {/* Left Column (5/12) - CEO Portrait & Multilingual Banner */}
        <div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-center">
          {/* CEO Circular Frame */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center group cursor-pointer">
            {/* Outer Ambient Glow ring that breathes and intensifies on hover */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#7b2cbf]/30 to-[#e0aaff]/30 opacity-40 blur-2xl group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

            {/* Glowing Tracing Border Around CEO Photo */}
            <div className="relative w-48 h-48 rounded-full p-[4px] overflow-hidden shadow-[0_0_40px_var(--trace-glow)] group-hover:shadow-[0_0_60px_var(--trace-glow)] border border-[var(--trace-border)] transition-all duration-500">
              {/* Outer Rotating Arc (Clockwise) */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 240deg, var(--trace-color-1) 280deg, var(--trace-color-2) 320deg, var(--trace-color-3) 360deg)",
                  }}
                />
              </div>
              {/* Inner Rotating Arc (Counter-Clockwise) */}
              <div className="absolute inset-[3px] overflow-hidden rounded-full pointer-events-none z-5">
                <div
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace-reverse"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 200deg, var(--trace-color-3) 250deg, var(--trace-color-2) 300deg, var(--trace-color-1) 360deg)",
                  }}
                />
              </div>
              {/* Inner photo */}
              <div className="w-full h-full rounded-full bg-[var(--background)] flex items-center justify-center relative z-10 overflow-hidden p-[2px]">
                <img
                  src="/assets/ceo.webp"
                  alt={aboutData.ceoName}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mt-4 tracking-tight">
              {aboutData.ceoName}
            </h4>
          </motion.div>

          {/* Multilingual Notice Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[380px] p-6 rounded-2xl glass-panel relative overflow-hidden border border-black/5 dark:border-white/5 flex gap-4 bg-black/[0.01] dark:bg-white/[0.01]">
            <div className="text-[#9d4edd] shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-normal leading-relaxed text-left">
              {aboutData.multilingualNotice}
            </p>
          </motion.div>
        </div>

        {/* Right Column (7/12) - Partner Stats & Standout Card */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left lg:pt-12">
          {/* Description Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4">
            <h3 className="font-display text-2xl md:text-3.5xl font-semibold tracking-tight text-[var(--text-primary)] leading-snug">
              {aboutData.partnerStat}
            </h3>
            <p className="text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
              {aboutData.storyDescription}
            </p>
          </motion.div>

          {/* Standout Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 rounded-2xl glass-panel relative overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] flex flex-col gap-5 shadow-lg">
            {/* CTA Action button */}
            <div className="flex justify-start">
              <a href="#contact">
                <MagneticButton className="rounded-xl px-6 py-2.5 bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] font-bold text-xs flex items-center gap-2 text-white shadow-[0_0_15px_rgba(123,44,191,0.25)] border-none">
                  <span>Contact Now!</span>
                  <span>→</span>
                </MagneticButton>
              </a>
            </div>

            <div className="text-left">
              <h4 className="font-display text-base font-bold text-[var(--text-primary)] mb-2">
                {aboutData.standoutHeading}
              </h4>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9d4edd] mt-2 shrink-0 animate-pulse" />
                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {aboutData.standoutText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Milestones Counters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 w-full">
        <Counter
          value={5}
          label="Years Of Excellence"
          suffix="+"
          icon={metricsIcons[0]}
          glowColor={glowColors[0]}
        />
        <Counter
          value={250}
          label="Projects Done"
          suffix="+"
          icon={metricsIcons[1]}
          glowColor={glowColors[1]}
        />
        <Counter
          value={100}
          label="Success Rate"
          suffix="%"
          icon={metricsIcons[2]}
          glowColor={glowColors[2]}
        />
        <Counter
          value={200}
          label="Happy Clients"
          suffix="+"
          icon={metricsIcons[3]}
          glowColor={glowColors[3]}
        />
      </div>
    </Section>
  );
}
