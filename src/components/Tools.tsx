import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { toolsData } from "../data/toolsData";

const getIconUrl = (name: string) => {
  const simpleIconsMapping: { [key: string]: string } = {
    WordPress: "wordpress",
    Shopify: "shopify",
    React: "react",
    "React Native": "react",
    "Node.js": "nodedotjs",
    MongoDB: "mongodb",
    Figma: "figma",
    "Google Search Console": "googlesearchconsole",
    "Google Analytics": "googleanalytics",
    "Ahrefs/SEMrush": "semrush",
    "Meta Business Suite": "meta",
    Buffer: "buffer/FFF",
    Hootsuite: "hootsuite/FFF",
    "Etsy Seller Central": "etsy",
    "Google Ads": "googleads",
    "Meta Ads Manager": "meta",
    "Other Paid media platforms": "googlemarketingplatform",
  };

  const hunterMapping: { [key: string]: string } = {
    "Adobe Creative Suite": "adobe.com",
    Canva: "canva.com",
    "Amazon Seller Central": "amazon.com",
    "Amazon Advertising Console": "amazon.com",
    "LinkedIn Ads": "linkedin.com",
  };

  if (hunterMapping[name]) {
    return `https://logos.hunter.io/${hunterMapping[name]}`;
  }

  const slug = simpleIconsMapping[name] || "google";
  return `https://cdn.simpleicons.org/${slug}`;
};

export function Tools() {
  const [activeTab, setActiveTab] = useState(toolsData[0].category);

  const activeCategoryData =
    toolsData.find((cat) => cat.category === activeTab) || toolsData[0];

  return (
    <Section
      id="tools"
      badge="Our Toolkit"
      title="Tools & Platforms We Use"
      description="The right tools for each discipline — chosen for the project, not forced into every one."
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-12">
      <div className="flex justify-center mb-16 px-4">
        <div className="flex flex-wrap md:flex-nowrap gap-1 p-1.5 rounded-full bg-white/[0.02] border border-white/5 max-w-4xl overflow-x-auto no-scrollbar justify-center shadow-inner">
          {toolsData.map((cat) => {
            const isActive = cat.category === activeTab;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(cat.category)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}>
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-purple-500 shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">{cat.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 min-h-[250px]">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          <AnimatePresence mode="popLayout">
            {activeCategoryData.tools.map((tool) => (
              <motion.div
                key={tool}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 15 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col items-center justify-center p-6 rounded-3xl border border-[var(--glass-border)] bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.02] dark:hover:bg-white/[0.03] hover:border-[var(--primary)]/30 hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer aspect-square">
                <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={getIconUrl(tool)}
                    alt={tool}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://cdn.simpleicons.org/simpleicons";
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 text-center px-1 leading-snug">
                  {tool}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
