import type { PortfolioItem } from "../types/portfolio";

export function AmazonCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative w-full max-w-[500px] h-[220px] sm:h-[350px] rounded-3xl overflow-hidden flex items-center justify-center select-none hover:scale-[1.02] transition-transform duration-500">
      <img
        src={item?.image}
        alt={item?.title || "Amazon marketing showcase"}
        className="max-w-full max-h-full object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
}
