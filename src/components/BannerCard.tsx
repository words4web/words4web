import type { PortfolioItem } from "../types/portfolio";

export function BannerCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative w-full max-w-[360px] h-[220px] rounded-2xl overflow-hidden flex items-center justify-center select-none">
      <img
        src={item?.image}
        alt={item?.title || "Banner showcase"}
        className="max-w-full max-h-full object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
}
