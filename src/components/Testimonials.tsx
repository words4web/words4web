import { useRef, useState } from "react";
import { Globe, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { testimonialsData } from "../data/testimonialsData";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  const containerRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0); // 0 or 1

  // Page 1: items 0 to 5. Page 2: items 4 to 9 (so both show exactly 6 items)
  const displayedItems =
    pageIndex === 0
      ? testimonialsData.slice(0, 6)
      : testimonialsData.slice(4, 10);

  const handlePrev = () => {
    setPageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <Section
      ref={containerRef}
      id="testimonials"
      badge="Client Spotlight"
      title="What Our Clients Say"
      align="center"
      hasBackground
      hasBorderTop
      headerClassName="max-w-4xl mx-auto text-center"
    >
      {/* 3-Column, 2-Row Grid of Testimonials */}
      <div className="relative w-full max-w-7xl mx-auto px-4 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedItems.map((item, idx) => (
              <TestimonialCard
                key={item.name + idx}
                testimonial={item}
                index={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation & Progress Slider Bar at the bottom of the section */}
        <div className="flex items-center justify-center gap-6 mt-12 w-full">
          {/* Arrow Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/10 bg-transparent flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/5 active:scale-95 transition-all text-[var(--text-primary)] cursor-pointer"
              aria-label="Previous page"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/10 bg-transparent flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/5 active:scale-95 transition-all text-[var(--text-primary)] cursor-pointer"
              aria-label="Next page"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {[0, 1].map((idx) => {
              const isActive = idx === pageIndex;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setPageIndex(idx)}
                  layoutId={`pill-${idx}`}
                  animate={{
                    width: isActive ? 28 : 8,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`h-2 rounded-full cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "bg-[var(--primary)]"
                      : "bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full mt-16 rounded-2xl glass-panel border border-[var(--glass-border)] bg-black/[0.02] dark:bg-white/[0.02] shadow-[0_15px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-[var(--glass-border)]">
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-black/[0.01] dark:hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-3xl md:text-4xl font-bold text-[#a855f7] dark:text-[#c084fc] font-display leading-none">
              150+
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)] mt-1">
              Brands Served
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-black/[0.01] dark:hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-3xl md:text-4xl font-bold text-[#a855f7] dark:text-[#c084fc] font-display leading-none">
              8
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)] mt-1">
              Services, 1 Team
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-black/[0.01] dark:hover:bg-white/[0.03] transition-colors duration-300">
            <Globe
              className="w-9 h-9 md:w-10 md:h-10 text-[#a855f7] dark:text-[#c084fc]"
              strokeWidth={1.5}
            />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)] mt-1">
              Worldwide Clients
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-6 py-8 hover:bg-black/[0.01] dark:hover:bg-white/[0.03] transition-colors duration-300">
            <span className="text-5xl md:text-6xl font-bold text-[#a855f7] dark:text-[#c084fc] font-display leading-none">
              ∞
            </span>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)] mt-1">
              Long-Term Partnerships
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
