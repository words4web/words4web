import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";
import { founderData } from "../data/founderData";
import { MagneticButton } from "./MagneticButton";

export function Founder() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <Section
      id="founder"
      ref={containerRef}
      badge="Meet Our Founder"
      title="Priya Khatod — Founder of Words4Web"
      align="center"
      hasBorderTop
      headerClassName="max-w-4xl mx-auto text-center mb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto text-left">
        {/* CEO Portrait Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center group cursor-pointer"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#7b2cbf]/30 to-[#e0aaff]/30 opacity-40 blur-2xl group-hover:opacity-80 group-hover:scale-115 transition-all duration-700 pointer-events-none" />

            {/* Glowing Border Arc Photo Box */}
            <div className="relative w-56 h-56 rounded-full p-[4px] overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(123,44,191,0.2)] hover:shadow-[0_0_60px_rgba(123,44,191,0.4)] transition-all duration-500">
              {/* Spinning Trace line */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #7b2cbf 280deg, #9d4edd 320deg, #e0aaff 360deg)",
                  }}
                />
              </div>

              {/* Photo wrapper */}
              <div className="w-full h-full rounded-full bg-[#120826] flex items-center justify-center relative z-10 overflow-hidden p-[2px]">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback placeholder in case photo is missing
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>
            </div>

            <h4 className="font-display text-xl font-bold text-[var(--text-primary)] mt-4 tracking-tight">
              {founderData.name}
            </h4>
            <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-medium mt-1">
              {founderData.role}
            </span>
          </motion.div>
        </div>

        {/* Biography text */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Bridging Tech, Strategy & Creative Vision
            </h3>
            <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
              {founderData.description}
            </p>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              Under Priya's leadership, Words4Web has grown from a local
              boutique agency to an international full-service partner serving
              businesses across Spain, Greece, Estonia, Portugal, Germany,
              Japan, the UK, and beyond. We focus on long-term client relations,
              custom plans, and measurable, data-driven outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-2"
          >
            <a href="#contact">
              <MagneticButton className="rounded-xl px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-xs text-white shadow-[0_0_15px_rgba(123,44,191,0.25)] border-none">
                Get in Touch with Priya
              </MagneticButton>
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
