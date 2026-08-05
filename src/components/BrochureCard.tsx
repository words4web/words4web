import type { PortfolioItem } from "../types/portfolio";

export function BrochureCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative w-full max-w-[360px] h-[360px] rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/[0.04] dark:bg-white/[0.02] hover:bg-white/[0.08] dark:hover:bg-white/[0.04] backdrop-blur-xl flex items-center justify-center p-4 shadow-lg hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 select-none">
      <img
        src={item.image}
        alt={item.title || "Brochure showcase"}
        className="max-w-full max-h-full object-contain rounded-2xl shadow-md group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
}
