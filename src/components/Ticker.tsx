import { Section } from "./Section";

export function Ticker() {
  const clients = [
    "Imperial Lounge",
    "Filipe Carrera",
    "Desi Spice Co.",
    "Grainful India",
    "Box2Box Sports",
    "Dadoos",
    "PARAGON-eduTech",
    "DSF Group",
    "Lathi Industries",
  ];

  return (
    <Section
      id="trusted-by"
      badge="Trusted By"
      title="Trusted by Businesses Across Industries and Countries"
      description="From local restaurants to e-commerce brands and education providers, businesses across India, the UK, and beyond rely on Words4Web to build and grow their online presence."
      align="center"
      headerClassName="max-w-4xl mx-auto text-center"
      hasBorderTop
    >
      <div className="w-full overflow-hidden relative py-8 border-y border-white/5 bg-black/10 dark:bg-white/[0.01] rounded-2xl select-none backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          <div className="flex shrink-0 items-center justify-around gap-12 min-w-full">
            {clients.map((client, idx) => (
              <span
                key={idx}
                className="flex items-center gap-3 text-sm md:text-base uppercase tracking-widest text-[var(--text-primary)] font-bold font-display opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />
                {client}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-around gap-12 min-w-full">
            {clients.map((client, idx) => (
              <span
                key={`dup-${idx}`}
                className="flex items-center gap-3 text-sm md:text-base uppercase tracking-widest text-[var(--text-primary)] font-bold font-display opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] shrink-0" />
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
