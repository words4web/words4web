import type { PortfolioItem } from "../types/portfolio";

export function AmazonCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative w-full max-w-[500px] rounded-2xl overflow-hidden select-none transition-transform duration-500 hover:scale-[1.02]">
      <img
        src={item?.image}
        alt={item?.title || "Amazon marketing showcase"}
        className="w-full h-auto object-contain block"
        loading="lazy"
      />
    </div>
  );
}
