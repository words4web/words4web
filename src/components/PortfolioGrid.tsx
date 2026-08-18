import { useState, useEffect } from "react";
import { portfolioData, clientMapping } from "../data/portfolio/portfolioData";
import { PortfolioTabs } from "./PortfolioTabs";
import { PortfolioCards } from "./PortfolioCards";
import { StandardCard } from "./StandardCard";
import { cn } from "@/src/lib/utils";

export function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState<string>("RKB");
  const [activeOtherCategory, setActiveOtherCategory] = useState<string>("All");

  const clientItems = portfolioData?.filter((item) => {
    const mappedClient = clientMapping[item?.id] || "Other Projects";
    return mappedClient === activeTab;
  });

  const caseStudyItem = clientItems?.find(
    (item) => item?.category === "Case Studies",
  );

  const deliverables = clientItems?.filter(
    (item) => item?.category !== "Case Studies",
  );

  const filteredDeliverables = deliverables?.filter((item) => {
    if (activeTab === "Other Projects" && activeOtherCategory !== "All") {
      return item.category === activeOtherCategory;
    }
    return true;
  });

  useEffect(() => {
    setActiveOtherCategory("All");
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-10 w-full">
      <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {caseStudyItem && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-[1200px] mx-auto px-4 mt-4 text-left">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-purple-400">
              Featured Case Study
            </span>
            <div className="w-full flex justify-center lg:justify-start">
              <StandardCard item={caseStudyItem} />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)]">
                Project Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-extralight text-[var(--text-primary)] leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent font-normal">
                  {caseStudyItem?.title}
                </span>
              </h2>
              <p className="text-sm font-light leading-relaxed text-[var(--text-secondary)]">
                {caseStudyItem?.description}
              </p>
            </div>

            {caseStudyItem?.technologies &&
              caseStudyItem?.technologies.length > 0 && (
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)]">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {caseStudyItem?.technologies?.map((tech) => (
                      <div
                        key={tech?.name}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.05] dark:border-white/[0.05] bg-white/[0.02] dark:bg-white/[0.01]">
                        {tech?.iconUrl && (
                          <img
                            src={tech?.iconUrl}
                            alt={tech?.name}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        <span className="text-[10px] font-semibold text-[var(--text-primary)]">
                          {tech?.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      )}

      {deliverables && deliverables?.length > 0 && (
        <div className="flex flex-col gap-8 w-full max-w-[1200px] mx-auto px-4 mt-8">
          <div className="flex items-center gap-6 w-full">
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-gradient whitespace-nowrap">
              Visual Deliverables & Assets
            </h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/25 via-indigo-500/10 to-transparent" />
          </div>

          {activeTab === "Other Projects" && (
            <div className="flex justify-center gap-2 flex-wrap max-w-4xl mx-auto px-4 -mt-2 mb-2">
              {[
                "All",
                "Website Design",
                "Logos",
                "Social Media Marketing",
                "Packaging",
                "Amazon Marketing",
              ].map((cat) => {
                const isSelected = activeOtherCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveOtherCategory(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer select-none",
                      isSelected
                        ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_2px_8px_rgba(123,44,191,0.3)]"
                        : "bg-black/[0.04] dark:bg-white/[0.06] text-black/85 dark:text-white/85 border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10",
                    )}>
                    {cat === "Social Media Marketing"
                      ? "Social Media"
                      : cat === "Amazon Marketing"
                        ? "Amazon"
                        : cat}
                  </button>
                );
              })}
            </div>
          )}

          <PortfolioCards
            filteredItems={filteredDeliverables}
            isMasonry={true}
          />
        </div>
      )}
    </div>
  );
}
