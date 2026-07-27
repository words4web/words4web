import { Counter } from "./Counter";
import { statsData } from "../data/statsData";

export function StatsBar() {
  return (
    <div className="relative w-full py-12 bg-black/10 dark:bg-white/[0.01] border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <Counter
              key={idx}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
              glowColor={stat.glowColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
