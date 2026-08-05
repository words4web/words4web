import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (activeTab === "Social Media Marketing") {
      setActiveSubTab("Accounts");
    }
  }, [activeTab]);

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
        <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto px-4 -mt-4 mb-4">
          {socialSubTabs?.map((subTab) => {
            const isSelected = activeSubTab === subTab;
            return (
              <button
                key={subTab}
                onClick={() => setActiveSubTab(subTab)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer select-none",
                  isSelected
                    ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_4px_12px_rgba(123,44,191,0.3)]"
                    : "bg-black/[0.04] dark:bg-white/[0.06] text-black/80 dark:text-white/80 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10",
                )}>
                {subTab}
              </button>
            );
          })}
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
