import type { PortfolioItem } from "../types/portfolio";

export function StandardCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative w-full max-w-[560px] aspect-video mx-auto rounded-3xl overflow-hidden glass-panel border border-black/[0.08] dark:border-white/[0.08] bg-[var(--background-secondary)] shadow-lg hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 select-none">
      {/* Tech stack mini badges in top right */}
      {item?.technologies && item?.technologies?.length > 0 && (
        <div className="absolute top-4 right-4 z-20 flex gap-1.5">
          {item?.technologies?.map((tech) => (
            <div
              key={tech?.name}
              className="w-8 h-8 rounded-full bg-[#0c0a14] border border-white/10 flex items-center justify-center p-1.5 shadow-lg transition-all duration-300"
              title={tech?.name}>
              <img
                src={
                  tech?.iconUrl ||
                  `https://cdn.simpleicons.org/${tech?.name?.toLowerCase()}`
                }
                alt={tech?.name}
                className="w-5 h-5 object-contain"
                style={{ filter: "brightness(1.3) contrast(1.2)" }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden bg-black/10 z-0">
        <img
          src={item?.image}
          alt={item?.title || "Project showcase"}
          className="w-full h-full object-cover object-top select-none group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Hover Bottom Details Sheet */}
      {item.title && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[80%] z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end text-left"
          style={{
            background:
              "linear-gradient(to top, rgba(5,2,15,0.98) 40%, rgba(5,2,15,0.75) 70%, transparent 100%)",
          }}>
          <div className="px-5 pb-5 flex flex-col gap-3">
            <span className="text-purple-400 text-[12px] font-bold uppercase tracking-[0.18em]">
              {item?.services}
            </span>
            <h3 className="text-lg font-semibold text-white leading-snug">
              {item?.title}
            </h3>
            <p className="text-[14px] text-white leading-relaxed line-clamp-2">
              {item?.description}
            </p>
            <a
              href={item?.link}
              className="mt-1 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-purple-600 hover:border-purple-600 text-white text-[12px] font-semibold tracking-wide transition-all duration-300 backdrop-blur-sm">
              View Project <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
