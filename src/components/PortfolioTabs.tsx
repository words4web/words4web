import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioCategories } from "../data/portfolio/portfolioData";
import type { PortfolioTabsProps } from "../types/portfolio";
import { cn } from "@/src/lib/utils";
import { ScrollArrow } from "./ScrollArrow";

export function PortfolioTabs({ activeTab, setActiveTab }: PortfolioTabsProps) {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const currentIndex = portfolioCategories.indexOf(activeTab as any);
  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < portfolioCategories.length - 1;

  useEffect(() => {
    const activeButton = document.getElementById(`tab-title-${currentIndex}`);
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center px-10">
      {/* Left Arrow Button */}
      {showLeftArrow && (
        <ScrollArrow
          direction="left"
          onClick={() => {
            if (currentIndex > 0) {
              setActiveTab(portfolioCategories[currentIndex - 1]);
            }
          }}
          ariaLabel="Scroll left"
          className="w-10 h-10 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <ChevronLeft size={22} className="stroke-[2.5]" />
        </ScrollArrow>
      )}

      {/* Tabs Container */}
      <div
        ref={tabsContainerRef}
        role="tablist"
        className="w-full flex gap-3 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-2 px-4 rounded-full"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}>
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
                "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 cursor-pointer select-none touch-manipulation",
                isSelected
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_2px_8px_rgba(123,44,191,0.3)]"
                  : "bg-black/[0.06] dark:bg-white/[0.08] text-black/90 dark:text-white/90 border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/15 hover:border-black/40 dark:hover:border-white/40",
              )}>
              <span className="e-n-tab-title-text">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Right Arrow Button */}
      {showRightArrow && (
        <ScrollArrow
          direction="right"
          onClick={() => {
            if (currentIndex < portfolioCategories.length - 1) {
              setActiveTab(portfolioCategories[currentIndex + 1]);
            }
          }}
          ariaLabel="Scroll right"
          className="w-10 h-10 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <ChevronRight size={22} className="stroke-[2.5]" />
        </ScrollArrow>
      )}
    </div>
  );
}
