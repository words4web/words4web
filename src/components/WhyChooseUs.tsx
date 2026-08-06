import { Section } from "./Section";
import { WhyChooseUsCard } from "./WhyChooseUsCard";
import { whyChooseUsData } from "../data/homepage/whyChooseUsData";

export function WhyChooseUs() {
  // Split data: 3 items on the left, 3 items on the right
  const leftItems = whyChooseUsData.slice(0, 3);
  const rightItems = whyChooseUsData.slice(3, 6);

  return (
    <Section
      id="why-choose-us"
      badge="Why Choose Us"
      title={
        <>
          Why Do Businesses Choose{" "}
          <span className="text-gradient">Words4Web</span>?
        </>
      }
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-20"
      description="One connected team powering every part of your product — design, development, QA, and long-term support, all under one roof.">
      <div className="relative max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Decorative Dotted Radial Lines (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 1152 500" fill="none">
            {/* Left Connectors */}
            <path
              d="M 280 100 Q 420 180 576 250"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-25"
            />
            <path
              d="M 280 250 Q 420 250 576 250"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-25"
            />
            <path
              d="M 280 400 Q 420 320 576 250"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-25"
            />

            {/* Right Connectors */}
            <path
              d="M 872 100 Q 732 180 576 250"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-25"
            />
            <path
              d="M 872 250 Q 732 250 576 250"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-25"
            />
            <path
              d="M 872 400 Q 732 320 576 250"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="opacity-25"
            />

            {/* Traveling glowing particles (Staggered one by one) */}
            <circle
              r="4"
              fill="var(--primary)"
              className="filter drop-shadow-[0_0_4px_var(--primary)]">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                path="M 280 100 Q 420 180 576 250"
                begin="0s"
              />
            </circle>
            <circle
              r="4"
              fill="var(--primary)"
              className="filter drop-shadow-[0_0_4px_var(--primary)]">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                path="M 872 100 Q 732 180 576 250"
                begin="0.6s"
              />
            </circle>
            <circle
              r="4"
              fill="var(--primary)"
              className="filter drop-shadow-[0_0_4px_var(--primary)]">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                path="M 280 250 Q 420 250 576 250"
                begin="1.2s"
              />
            </circle>
            <circle
              r="4"
              fill="var(--primary)"
              className="filter drop-shadow-[0_0_4px_var(--primary)]">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                path="M 872 250 Q 732 250 576 250"
                begin="1.8s"
              />
            </circle>
            <circle
              r="4"
              fill="var(--primary)"
              className="filter drop-shadow-[0_0_4px_var(--primary)]">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                path="M 280 400 Q 420 320 576 250"
                begin="2.4s"
              />
            </circle>
            <circle
              r="4"
              fill="var(--primary)"
              className="filter drop-shadow-[0_0_4px_var(--primary)]">
              <animateMotion
                dur="3.6s"
                repeatCount="indefinite"
                path="M 872 400 Q 732 320 576 250"
                begin="3s"
              />
            </circle>
          </svg>
        </div>

        {/* Left Column Cards */}
        <div className="w-full lg:w-[35%] flex flex-col gap-8 z-10">
          {leftItems.map((item, idx) => (
            <WhyChooseUsCard
              key={idx}
              item={item}
              direction="left"
              delay={idx * 0.15}
            />
          ))}
        </div>

        {/* Center Glowing 3D-Look Sphere/Orb Container */}
        <div className="relative w-72 h-72 flex items-center justify-center z-20">
          {/* Outer Pulsing Glow */}
          <div className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-3xl animate-pulse" />

          {/* Dotted orbits */}
          <div className="absolute w-80 h-80 border border-dashed border-[var(--primary)]/30 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-96 h-96 border border-dashed border-[var(--primary)]/15 rounded-full animate-[spin_60s_linear_infinite_reverse]" />

          {/* Central Sphere */}
          <div className="relative w-52 h-52 rounded-full bg-gradient-to-tr from-[var(--primary)] to-purple-400 p-1 shadow-[0_20px_50px_rgba(123,44,191,0.5)] flex items-center justify-center overflow-hidden">
            {/* Sphere Highlight/Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 pointer-events-none rounded-full" />
            <div className="absolute top-2 left-6 right-6 h-12 bg-gradient-to-b from-white/25 to-transparent rounded-full blur-[2px]" />

            {/* Inner Content */}
            <div className="flex flex-col items-center justify-center text-center text-white z-10 px-4">
              <img
                src="/logo/logo_white.png"
                alt="Words4Web Logo"
                className="w-32 h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
              />
              <span className="text-[11px] font-bold uppercase tracking-widest text-purple-100 mt-2 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                1 Team. ∞ Results.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column Cards */}
        <div className="w-full lg:w-[35%] flex flex-col gap-8 z-10">
          {rightItems.map((item, idx) => (
            <WhyChooseUsCard
              key={idx}
              item={item}
              direction="right"
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
