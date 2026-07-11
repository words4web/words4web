import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";
import { aboutData, metricsIcons, glowColors } from "../data/aboutData";
import { Counter } from "./Counter";

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
            className="relative flex flex-col items-center">
            {/* Glowing Tracing Border Around CEO Photo */}
            <div className="relative w-48 h-48 rounded-full p-[4px] overflow-hidden shadow-[0_0_40px_rgba(123,44,191,0.5)]">
              {/* Rotating Arc */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 330deg, #9d4edd 345deg, #ffffff 355deg, #9d4edd 360deg)",
                  }}
                />
              </div>
              {/* Inner photo */}
              <div className="w-full h-full rounded-full bg-[#0c0c0e] flex items-center justify-center relative z-10">
                <img
                  src="/assets/ceo.webp"
                  alt={aboutData.ceoName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <h4 className="font-display text-lg font-bold text-white mt-4 tracking-tight">
              {aboutData.ceoName}
            </h4>
          </motion.div>

          {/* Multilingual Notice Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[380px] p-6 rounded-2xl glass-panel relative overflow-hidden border border-white/5 flex gap-4 bg-white/[0.01]">
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
            className="p-6 rounded-2xl glass-panel relative overflow-hidden border border-white/5 bg-white/[0.01] flex flex-col gap-5 shadow-lg">
            {/* CTA Action button */}
            <div className="flex justify-start">
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-xl px-6 py-2.5 bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] font-bold interactive text-xs flex items-center gap-2 text-white shadow-[0_0_15px_rgba(123,44,191,0.25)]">
                  <span>Contact Now!</span>
                  <span>→</span>
                </motion.button>
              </a>
            </div>

            <div className="text-left">
              <h4 className="font-display text-base font-bold text-white mb-2">
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
