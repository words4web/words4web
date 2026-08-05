import type { PortfolioItem } from "../types/portfolio";

export function WebsiteCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative w-full max-w-[320px] h-[480px] rounded-3xl border border-black/10 dark:border-white/10 bg-[#12101e]/60 dark:bg-[#0c0a14]/60 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-purple-500/40 transition-all duration-500 overflow-hidden select-none">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title || "Website mockup scroll"}
          className="w-full h-auto absolute top-0 left-0 transition-transform duration-[6s] ease-in-out group-hover:translate-y-[calc(-100%+480px)]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
