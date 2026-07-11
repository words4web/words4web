import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { tickerItems } from "../data/tickerData";
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
      badge="Client Stories"
      title={
        <>
          Client <span className="text-gradient">Perspectives</span>
        </>
      }
      align="center"
      hasBackground>
      {/* Infinite Marquee Ticker */}
      <div className="w-full overflow-hidden relative py-6 border-y border-white/5 bg-white/[0.01] mt-8 mb-12 select-none">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          <div className="flex shrink-0 items-center justify-around gap-8 min-w-full">
            {tickerItems.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--text-secondary)] font-semibold font-display">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 animate-pulse" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-around gap-8 min-w-full">
            {tickerItems.map((item, idx) => (
              <span
                key={`dup-${idx}`}
                className="flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--text-secondary)] font-semibold font-display">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

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
    </Section>
  );
}
