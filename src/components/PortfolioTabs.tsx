import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioCategories } from "../data/portfolio/portfolioData";
import type { PortfolioTabsProps } from "../types/portfolio";
import { cn } from "@/src/lib/utils";

export function PortfolioTabs({ activeTab, setActiveTab }: PortfolioTabsProps) {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const currentIndex = portfolioCategories.indexOf(activeTab as any);
  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < portfolioCategories.length - 1;

  useEffect(() => {
    const activeIdx = portfolioCategories.indexOf(activeTab as any);
    const activeButton = document.getElementById(`tab-title-${activeIdx}`);
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center px-4">
      {/* Left Arrow Button */}
      {showLeftArrow && (
        <button
          onClick={() => {
            const currentIndex = portfolioCategories.indexOf(activeTab as any);
            if (currentIndex > 0) {
              setActiveTab(portfolioCategories[currentIndex - 1]);
            }
          }}
          className="absolute left-0 z-20 w-9 h-9 rounded-full bg-white dark:bg-[#181524] text-black dark:text-white border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#201d30] active:scale-95 transition-all duration-300 shadow-md"
          aria-label="Scroll left">
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Tabs Container */}
      <div
        ref={tabsContainerRef}
        role="tablist"
        className="w-full flex gap-3 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-2 px-10"
        style={{ scrollbarWidth: "none" }}>
        {portfolioCategories?.map((category, idx) => {
          const isSelected = activeTab === category;
          return (
            <button
              key={category}
              id={`tab-title-${idx}`}
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 cursor-pointer select-none",
                isSelected
                  ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                  : "bg-black/[0.06] dark:bg-white/[0.08] text-black/90 dark:text-white/90 border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/15 hover:border-black/40 dark:hover:border-white/40",
              )}>
              <span className="e-n-tab-title-text">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Right Arrow Button */}
      {showRightArrow && (
        <button
          onClick={() => {
            const currentIndex = portfolioCategories.indexOf(activeTab as any);
            if (currentIndex < portfolioCategories.length - 1) {
              setActiveTab(portfolioCategories[currentIndex + 1]);
            }
          }}
          className="absolute right-0 z-20 w-9 h-9 rounded-full bg-white dark:bg-[#181524] text-black dark:text-white border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#201d30] active:scale-95 transition-all duration-300 shadow-md"
          aria-label="Scroll right">
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
