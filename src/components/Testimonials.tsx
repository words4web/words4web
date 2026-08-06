import { useRef, useState, useEffect } from "react";
import { Globe, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { testimonialsData } from "../data/homepage/testimonialsData";
import { TestimonialCard } from "./TestimonialCard";
import { TrustStrip } from "./TrustStrip";

export function Testimonials() {
  const containerRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Limit pageIndex when changing viewports
  useEffect(() => {
    if (!isMobile && pageIndex > 1) {
      setPageIndex(0);
    }
  }, [isMobile, pageIndex]);

  const displayedItems = isMobile
    ? [testimonialsData[pageIndex]]
    : pageIndex === 0
      ? testimonialsData.slice(0, 6)
      : testimonialsData.slice(4, 10);

  const totalPages = isMobile ? testimonialsData.length : 2;

  const handlePrev = () => {
    setPageIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
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
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-[200px] sm:max-w-none">
            {Array.from({ length: totalPages }, (_, i) => i).map((idx) => {
              const isActive = idx === pageIndex;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setPageIndex(idx)}
                  layoutId={`pill-${idx}`}
                  animate={{
                    width: isActive ? 24 : 6,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`h-1.5 rounded-full cursor-pointer transition-colors duration-300 ${
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
