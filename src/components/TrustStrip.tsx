import { Globe } from "lucide-react";
import { Counter } from "./Counter";

export function TrustStrip() {
  const trustStats = [
    {
      value: 150,
      suffix: "+",
      label: "Brands Served",
      glowColor: "from-[#7b2cbf] to-[#9d4edd]",
    },
    {
      value: 8,
      suffix: "",
      label: "Services, 1 Team",
      glowColor: "from-[#3a86c8] to-[#00f2fe]",
    },
    {
      value: null,
      suffix: "",
      label: "Worldwide Clients",
      icon: <Globe className="w-6 h-6" strokeWidth={1.5} />,
      glowColor: "from-[#00f2fe] to-[#7b2cbf]",
    },
    {
      value: (
        <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-500 via-fuchsia-500 to-[#9d4edd] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(157,78,221,0.55)] font-display leading-none select-none">
          ∞
        </span>
      ),
      suffix: "",
      label: "Long-Term Partnerships",
      glowColor: "from-[#ff007f] to-[#ff7b00]",
    },
  ];

  return (
    <div className="w-full mt-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustStats.map((stat, idx) => (
          <Counter
            key={idx}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            icon={stat.icon}
            glowColor={stat.glowColor}
          />
        ))}
      </div>
    </div>
  );
}
