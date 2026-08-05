import type { PortfolioItem } from "../types/portfolio";

export function WebsiteCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="relative p-[3px] rounded-3xl overflow-hidden group select-none hover:-translate-y-1 transition-all duration-500 max-w-[320px] h-[480px] w-full bg-purple-700/80 group-hover:bg-transparent shadow-[0_0_15px_rgba(168,85,247,0.25)] dark:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
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
      <div className="relative w-full h-full rounded-[21px] overflow-hidden bg-[#12101e]/90 dark:bg-[#0c0a14]/95 backdrop-blur-md z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title || "Website mockup scroll"}
            className="w-full h-auto absolute top-0 left-0 transition-transform duration-[6s] ease-in-out group-hover:translate-y-[calc(-100%+474px)]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
