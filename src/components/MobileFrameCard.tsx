import type { PortfolioItem } from "../types/portfolio";
import { Play } from "lucide-react";

export function MobileFrameCard({
  item,
  forcePortrait = false,
}: {
  item: PortfolioItem;
  forcePortrait?: boolean;
}) {
  const isVideoOrReel = forcePortrait || item?.video || item?.link;

  const cardContent = (
    <div
      className={`group relative w-full ${forcePortrait ? "max-w-[360px]" : "max-w-[260px]"} rounded-3xl overflow-hidden transition-all duration-500 select-none ${
        isVideoOrReel && !forcePortrait
          ? "aspect-[9/16]"
          : forcePortrait
            ? "aspect-[3/4]"
            : "aspect-square"
      }`}>
      <div className="w-full h-full relative overflow-hidden">
        {item?.video ? (
          <video
            src={item?.video}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={item?.image}
            alt={item?.title || "Social media mock"}
            className={`w-full h-full ${forcePortrait ? "object-contain" : "object-cover"} group-hover:scale-[1.03] transition-transform duration-500`}
            loading="lazy"
          />
        )}

        {/* Watch Reel overlay */}
        {item?.link && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-20">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
              <Play size={20} fill="white" className="ml-0.5" />
            </div>
            <span className="text-white text-[11px] font-semibold tracking-wider bg-purple-600/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
              Watch Reel
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (item?.link) {
    return (
      <a
        href={item?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
