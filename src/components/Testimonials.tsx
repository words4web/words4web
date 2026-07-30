import { useRef, useState } from "react";
import { Globe, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { testimonialsData } from "../data/testimonialsData";
import { TestimonialCard } from "./TestimonialCard";
import { TrustStrip } from "./TrustStrip";

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
      headerClassName="max-w-4xl mx-auto text-center">
      {/* 3-Column, 2-Row Grid of Testimonials */}
      <div className="relative w-full max-w-7xl mx-auto px-4 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              aria-label="Previous page">
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/10 bg-transparent flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-white/5 active:scale-95 transition-all text-[var(--text-primary)] cursor-pointer"
              aria-label="Next page">
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Pagination Slider Indicator */}
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
      <TrustStrip />
    </Section>
  );
}
