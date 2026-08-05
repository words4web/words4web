import type { PortfolioItem } from "../types/portfolio";
import { ExternalLink } from "lucide-react";

export function CatalogCard({ item }: { item: PortfolioItem }) {
  const cardContent = (
    <div className="relative p-[3px] rounded-3xl overflow-hidden group select-none hover:-translate-y-1 transition-all duration-500 max-w-[320px] aspect-[819/1024] w-full bg-purple-700/80 group-hover:bg-transparent shadow-[0_0_15px_rgba(168,85,247,0.25)] dark:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
      {/* Glowing Line Tracing Around Border (Visible on hover only) */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
          style={{
            transform: "translate(-50%, -50%)",
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 280deg, #a855f7 320deg, #d8b4fe 340deg, #ffffff 360deg)",
          }}
        />
      </div>

      {/* Inner Card Content (No padding, offset rounded) */}
      <div className="relative w-full h-full rounded-[21px] overflow-hidden bg-white/[0.04] dark:bg-white/[0.02] flex items-center justify-center z-10">
        <img
          src={item?.image}
          alt={item?.title || "Catalog showcase"}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
        {item?.link && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0c0a14]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={14} />
          </div>
        )}
      </div>
    </div>
  );

  if (item?.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-[320px]">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
