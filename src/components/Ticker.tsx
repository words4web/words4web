import { useState } from "react";
import { Section } from "./Section";

export function Ticker() {
  const clients = [
    "Imperial Lounge",
    "Filipe Carrera",
    "Desi Spice Co.",
    "Grainful India",
    "Box2Box Sports",
    "Dadoos",
    "PARAGON-eduTech",
    "DSF Group",
    "Lathi Industries",
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const items = [...clients, ...clients];

  return (
    <Section
      id="trusted-by"
      badge="Trusted By"
      title="Trusted by Businesses Across Industries and Countries"
      description="From local restaurants to e-commerce brands and education providers, businesses across India, the UK, and beyond rely on Words4Web to build and grow their online presence."
      align="center"
      headerClassName="max-w-4xl mx-auto text-center"
      hasBorderTop>
      <div className="w-full overflow-hidden relative py-12 border-y border-white/5 bg-black/10 dark:bg-white/[0.01] rounded-2xl select-none backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          <div
            className="flex shrink-0 items-center justify-around gap-12 min-w-[200%] py-4"
            onMouseLeave={() => setHoveredIdx(null)}>
            {items.map((client, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;
              const scaleClass = isHovered
                ? "scale-110 z-10 border-[var(--primary)] shadow-[0_0_30px_rgba(123,44,191,0.35)]"
                : isAnyHovered
                  ? "scale-95"
                  : "scale-100";

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 dark:border-white/5 bg-black/50 backdrop-blur-md transition-all duration-500 cursor-default font-mono text-base md:text-lg tracking-wide ${scaleClass}`}>
                  <span className="text-white font-medium transition-colors duration-300">
                    {client}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
