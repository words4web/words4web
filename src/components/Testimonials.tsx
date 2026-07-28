import { useRef, useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { testimonialsData } from "../data/testimonialsData";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play cycling every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const active = testimonialsData[activeIndex];

  return (
    <Section
      ref={containerRef}
      id="testimonials"
      badge="Client Spotlight"
      title="Hear directly from businesses we've worked with, in their own words."
      align="center"
      hasBackground
      hasBorderTop
      headerClassName="max-w-4xl mx-auto text-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto mt-12 px-2 md:px-6">
        {/* Left Column: Premium Interactive Art Backdrop */}
        <div className="lg:col-span-3 flex justify-center relative min-h-[300px] lg:min-h-[400px]">
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer dotted ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-dashed border-white/10"
            />
            {/* Middle glowing blurred backdrop */}
            <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-[var(--primary)]/10 to-transparent blur-[50px] transition-all duration-1000" />

            {/* Direct dynamic color glow behind active initials */}
            <motion.div
              key={activeIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.25 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1 }}
              className={`absolute w-40 h-40 rounded-full bg-gradient-to-tr ${active.color} blur-[30px]`}
            />
          </div>

          {/* Central Glassmorphic Avatar Panel */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full glass-panel border border-white/10 flex items-center justify-center p-6 shadow-2xl backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center">
                <span
                  className={`text-5xl md:text-6xl font-display font-black bg-gradient-to-tr ${active.color} bg-clip-text text-transparent tracking-tight`}>
                  {active.initials}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[var(--text-secondary)] mt-3">
                  Verified Client
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Quote & Transition Showcase */}
        <div className="lg:col-span-9 flex flex-col justify-center text-left min-h-[300px]">
          <AnimatePresence mode="wait">
            <TestimonialCard key={activeIndex} testimonial={active} />
          </AnimatePresence>

          {/* Slide Controls & Progress */}
          <div className="flex items-center gap-6 mt-8 border-t border-white/5 pt-6">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-[var(--text-secondary)]/30 bg-[var(--background-secondary)] shadow-md flex items-center justify-center interactive hover:scale-105 active:scale-95 transition-all text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] z-30"
                aria-label="Previous testimonial">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-[var(--text-secondary)]/30 bg-[var(--background-secondary)] shadow-md flex items-center justify-center interactive hover:scale-105 active:scale-95 transition-all text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] z-30"
                aria-label="Next testimonial">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-[var(--primary)] w-6"
                      : "bg-[var(--text-secondary)]/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full mt-20 rounded-2xl glass-panel border border-white/10 bg-black/30 dark:bg-white/[0.02] shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-3xl md:text-4xl font-bold text-[#a855f7] dark:text-[#c084fc] font-display leading-none">
              150+
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/60 mt-1">
              Brands Served
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-3xl md:text-4xl font-bold text-[#a855f7] dark:text-[#c084fc] font-display leading-none">
              8
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/60 mt-1">
              Services, 1 Team
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-white/[0.03] transition-colors duration-300">
            <Globe
              className="w-9 h-9 md:w-10 md:h-10 text-[#a855f7] dark:text-[#c084fc]"
              strokeWidth={1.5}
            />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/60 mt-1">
              Worldwide Clients
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl md:text-6xl font-bold text-[#a855f7] dark:text-[#c084fc] font-display leading-none">
              ∞
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/60 mt-1">
              Long-Term Partnerships
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
