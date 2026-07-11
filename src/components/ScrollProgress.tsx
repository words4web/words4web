import { useScroll, useSpring, motion, useTransform } from "framer-motion";

const WAVE_PATH = [
  "M 20 0",
  "C 4 55, 4 110, 20 165",
  "S 36 220, 20 275",
  "S 4 330, 20 385",
  "S 36 440, 20 495",
  "S 4 550, 20 605",
  "S 36 660, 20 715",
  "S 4 770, 20 825",
  "S 36 880, 20 935",
  "S 4 990, 20 1000",
].join(" ");

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-2 top-0 h-screen z-50 pointer-events-none select-none hidden lg:block">
      <svg
        width="40"
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
        className="h-full w-10"
        style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#9d4edd" />
            <stop offset="100%" stopColor="#7b2cbf" />
          </linearGradient>
        </defs>

        {/* Faint track — always visible */}
        <path
          d={WAVE_PATH}
          fill="none"
          className="scroll-track"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Glowing filled line (drawn on scroll) */}
        <motion.path
          d={WAVE_PATH}
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{
            pathLength: smoothProgress,
            filter: "drop-shadow(0 0 4px rgba(157, 78, 221, 0.6))",
          }}
        />
      </svg>
    </div>
  );
}
