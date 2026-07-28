import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { industriesData } from "../data/industriesData";
import { Globe } from "lucide-react";

const ANGLES = [-90, -18, 54, 126, 198];
const ORBIT_RADIUS = 300;
const SVG_SIZE = 780;
const CENTER = SVG_SIZE / 2;

export function Industries() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Section
      id="industries"
      badge="Industries We Serve"
      title="Industries We Work With"
      description="We adapt our approach to what matters most in your industry"
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-16">
      <div className="relative flex items-center justify-center w-full">
        <div className="relative w-full max-w-[640px] mx-auto">
          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            className="w-full h-auto"
            aria-hidden="true">
            <style>{`
              @keyframes dashFlow {
                from { stroke-dashoffset: 0; }
                to   { stroke-dashoffset: -36; }
              }
              .spoke-line {
                animation: dashFlow 1.2s linear infinite;
                transition: stroke 0.3s, stroke-width 0.3s;
              }
              .spoke-line-solid {
                transition: stroke 0.3s, stroke-width 0.3s;
              }
            `}</style>

            {/* ── Concentric decorative rings ── */}
            {[90, 195, 300].map((r) => (
              <circle
                key={r}
                cx={CENTER}
                cy={CENTER}
                r={r}
                fill="none"
                stroke="rgba(168,85,247,0.08)"
                strokeWidth="1"
              />
            ))}

            {/* ── Curved connecting spokes ── */}
            {industriesData.map((ind, idx) => {
              const angle = (ANGLES[idx] * Math.PI) / 180;
              const x2 = CENTER + ORBIT_RADIUS * Math.cos(angle);
              const y2 = CENTER + ORBIT_RADIUS * Math.sin(angle);

              const mx = (CENTER + x2) / 2;
              const my = (CENTER + y2) / 2;

              const dx = x2 - CENTER;
              const dy = y2 - CENTER;
              const len = Math.sqrt(dx * dx + dy * dy);
              const nx = -dy / len;
              const ny = dx / len;

              const curve = 32;
              const cx = mx + nx * curve;
              const cy = my + ny * curve;

              const isHovered = hoveredIdx === idx;
              const linePalette = ind.colors || {
                lineNormal: "rgba(168,85,247,0.35)",
                lineActive: "rgba(168,85,247,0.95)",
              };

              return (
                <path
                  key={idx}
                  className={isHovered ? "spoke-line-solid" : "spoke-line"}
                  d={`M ${CENTER} ${CENTER} Q ${cx} ${cy} ${x2} ${y2}`}
                  fill="none"
                  stroke={
                    isHovered ? linePalette.lineActive : linePalette.lineNormal
                  }
                  strokeWidth={isHovered ? "6" : "4"}
                  strokeDasharray={isHovered ? "none" : "6 5"}
                  style={isHovered ? {} : { animationDelay: `${idx * 0.24}s` }}
                />
              );
            })}

            {/* ── Center node ── */}
            <defs>
              <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6d28d9" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle
              cx={CENTER}
              cy={CENTER}
              r={110}
              fill="rgba(168,85,247,0.10)"
            />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={90}
              fill="rgba(168,85,247,0.07)"
            />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={76}
              fill="url(#centerGrad)"
              filter="url(#glow)"
            />
          </svg>

          {/* ── Center label ── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient
                  id="globeGrad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
            <Globe
              className="w-9 h-9 mb-1.5"
              strokeWidth={1.3}
              style={{ stroke: "url(#globeGrad)" }}
            />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
              Industries
            </span>
          </div>

          {/* ── Orbital industry nodes ── */}
          {industriesData.map((ind, idx) => {
            const angle = (ANGLES[idx] * Math.PI) / 180;
            const xPct =
              ((CENTER + ORBIT_RADIUS * Math.cos(angle)) / SVG_SIZE) * 100;
            const yPct =
              ((CENTER + ORBIT_RADIUS * Math.sin(angle)) / SVG_SIZE) * 100;
            const isHovered = hoveredIdx === idx;
            const palette = ind.colors || {
              base: "#a855f7",
              hoverBg: "rgba(168,85,247,0.18)",
              glow: "rgba(168,85,247,0.5)",
              border: "rgba(168,85,247,0.8)",
              borderBase: "rgba(168,85,247,0.3)",
              activeText: "#d8b4fe",
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                animate={isHovered ? { scale: 1.12 } : { scale: 1 }}
                className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${xPct}%`, top: `${yPct}%` }}>
                <motion.div
                  animate={
                    isHovered
                      ? {
                          boxShadow: `0 0 40px ${palette.glow}`,
                          borderColor: palette.border,
                        }
                      : {
                          boxShadow: `0 0 28px ${palette.glow.replace("0.5", "0.13")}`,
                          borderColor: palette.borderBase,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center transition-colors duration-300 [&>svg]:w-10 [&>svg]:h-10"
                  style={{
                    background: isHovered
                      ? palette.hoverBg
                      : "rgba(255,255,255,0.04)",
                    color: isHovered ? palette.activeText : palette.base,
                  }}>
                  {ind.icon}
                </motion.div>
                <span className="text-xs md:text-sm font-semibold text-center transition-colors duration-300 max-w-[110px] leading-tight">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
