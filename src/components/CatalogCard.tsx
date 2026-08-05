import type { PortfolioItem } from "../types/portfolio";
import { ExternalLink } from "lucide-react";

export function CatalogCard({ item }: { item: PortfolioItem }) {
  const cardContent = (
    <div className="group relative w-full max-w-[320px] aspect-[819/1024] rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 select-none">
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
  );

  if (item?.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-[360px]">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
