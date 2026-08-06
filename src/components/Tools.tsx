import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { toolsData } from "../data/homepage/toolsData";

const getIconUrl = (name: string) => {
  const localMapping: Record<string, string> = {
    WordPress: "/tools/wordpress.svg",
    Shopify: "/tools/shopify.svg",
    React: "/tools/react.svg",
    "React Native": "/tools/react-native.svg",
    "Node.js": "/tools/node-js.svg",
    MongoDB: "/tools/mongodb.svg",
    Figma: "/tools/figma.svg",
    "Google Search Console": "/tools/google-search-console.svg",
    "Google Analytics": "/tools/google-analytics.svg",
    "Ahrefs/SEMrush": "/tools/ahrefs-semrush.svg",
    "Meta Business Suite": "/tools/meta-business-suite.svg",
    Buffer: "/tools/buffer.svg",
    Hootsuite: "/tools/hootsuite.svg",
    "Etsy Seller Central": "/tools/etsy-seller-central.svg",
    "Google Ads": "/tools/google-ads.svg",
    "Meta Ads Manager": "/tools/meta-ads-manager.svg",
    "Other Paid media platforms": "/tools/other-paid-media-platforms.svg",
    "Adobe Creative Suite": "/tools/adobe-creative-suite.png",
    Canva: "/tools/canva.png",
    "Amazon Seller Central": "/tools/amazon-seller-central.png",
    "Amazon Advertising Console": "/tools/amazon-advertising-console.png",
    "LinkedIn Ads": "/tools/linkedin-ads.png",
  };

  return localMapping[name] || "/tools/wordpress.svg";
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
        <div className="flex flex-nowrap gap-1 p-1 sm:p-1.5 rounded-full bg-white/[0.02] border border-purple-500/30 max-w-full overflow-x-auto no-scrollbar shadow-[0_0_25px_rgba(123,44,191,0.1)] px-2 sm:px-3">
          {toolsData?.map((cat) => {
            const isActive = cat?.category === activeTab;
            return (
              <button
                key={cat?.category}
                onClick={() => setActiveTab(cat?.category)}
                className={`relative px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}>
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-purple-500 border border-white/25 shadow-[0_4px_20px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">{cat?.category}</span>
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
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(123, 44, 191, 0.15)",
                }}
                transition={{ duration: 0.4 }}
                className="relative p-[2px] rounded-3xl overflow-hidden cursor-pointer select-none group aspect-square">
                {/* Glowing Line Tracing Around Border (Visible on Hover Only) */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, #a855f7 340deg, #c084fc 350deg, #e9d5ff 360deg)",
                    }}
                  />
                </div>

                {/* Inner Card Content */}
                <div className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-[#0c0a12] border border-black/5 dark:border-white/5 rounded-[22px] text-center h-full w-full z-10 overflow-hidden">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={getIconUrl(tool)}
                      alt={tool}
                      className="w-12 h-12 object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                      style={{ filter: "contrast(1.3) brightness(1.3)" }}
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
