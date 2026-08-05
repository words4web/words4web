import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { PortfolioTabs } from "./PortfolioTabs";
import { PortfolioCards } from "./PortfolioCards";
import { cn } from "@/src/lib/utils";

const socialSubTabs = [
  "Accounts",
  "Static",
  "Reels",
  "Motion Graphics",
  "Flyers",
  "Banners",
  "CGI Ads",
  "Logo Animation",
];

export function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState<string>("Case Studies");
  const [activeSubTab, setActiveSubTab] = useState<string>("Accounts");
  const subTabsContainerRef = useRef<HTMLDivElement>(null);

  const currentSubTabIdx = socialSubTabs.indexOf(activeSubTab);
  const showLeftSubArrow = currentSubTabIdx > 0;
  const showRightSubArrow = currentSubTabIdx < socialSubTabs.length - 1;

  useEffect(() => {
    if (activeTab === "Social Media Marketing") {
      setActiveSubTab("Accounts");
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "Social Media Marketing") {
      const activeBtn = document.getElementById(
        `subtab-title-${currentSubTabIdx}`,
      );
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }
  }, [activeSubTab]);

  const filteredItems = portfolioData?.filter((item) => {
    if (item?.category !== activeTab) return false;
    if (activeTab === "Social Media Marketing") {
      return item?.subCategory === activeSubTab;
    }
    return true;
  });

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Scrollable Tabs Header Component */}
      <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Social Media Sub Tabs */}
      {activeTab === "Social Media Marketing" && (
        <div className="relative w-full max-w-4xl mx-auto flex items-center px-4 -mt-4 mb-4">
          {/* Left Sub-Tab Scroll Arrow */}
          {showLeftSubArrow && (
            <button
              onClick={() => {
                if (currentSubTabIdx > 0) {
                  setActiveSubTab(socialSubTabs[currentSubTabIdx - 1]);
                }
              }}
              className="absolute left-0 z-20 w-8 h-8 rounded-full bg-white dark:bg-[#181524] text-black dark:text-white border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#201d30] active:scale-95 transition-all duration-300 shadow-md"
              aria-label="Scroll sub-tabs left">
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Sub-Tabs Scrollable Wrapper */}
          <div
            ref={subTabsContainerRef}
            role="tablist"
            className="w-full flex gap-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-1.5 px-8 justify-start md:justify-center"
            style={{ scrollbarWidth: "none" }}>
            {socialSubTabs?.map((subTab, idx) => {
              const isSelected = activeSubTab === subTab;
              return (
                <button
                  key={subTab}
                  id={`subtab-title-${idx}`}
                  onClick={() => setActiveSubTab(subTab)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
                    isSelected
                      ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                      : "bg-black/[0.04] dark:bg-white/[0.06] text-black/80 dark:text-white/80 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10",
                  )}>
                  {subTab}
                </button>
              );
            })}
          </div>

          {/* Right Sub-Tab Scroll Arrow */}
          {showRightSubArrow && (
            <button
              onClick={() => {
                if (currentSubTabIdx < socialSubTabs.length - 1) {
                  setActiveSubTab(socialSubTabs[currentSubTabIdx + 1]);
                }
              }}
              className="absolute right-0 z-20 w-8 h-8 rounded-full bg-white dark:bg-[#181524] text-black dark:text-white border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-[#201d30] active:scale-95 transition-all duration-300 shadow-md"
              aria-label="Scroll sub-tabs right">
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      )}

      {/* Grid Cards Component */}
      <PortfolioCards
        filteredItems={filteredItems}
        activeTab={activeTab}
        activeSubTab={activeSubTab}
      />
    </div>
  );
}
