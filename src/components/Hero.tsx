import { lazy, Suspense, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { MagneticButton } from "./MagneticButton";
import { LeadForm } from "./LeadForm";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

export function Hero() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-36 md:pt-32 pb-16 px-4 md:px-8">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--background-secondary)_0%,_var(--background)_100%)] opacity-50" />

      {!isMobile && (
        <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
          <Suspense fallback={null}>
            <HeroCanvas theme={theme} />
          </Suspense>
        </motion.div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 pointer-events-auto interactive">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              Digital Agency Built For Growth
            </span>
          </motion.div>

          <h1 className="font-display font-bold text-4xl md:text-7xl tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]">
            Build Your Brand <br />
            <span className="text-gradient">with Words4Web</span>
          </h1>

          <motion.p
            className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl font-light mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            Words4Web builds websites and apps, runs your SEO and social media,
            manages your paid ads and handles your ecommerce storefront — all
            under one roof, with a real team behind every campaign.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <MagneticButton
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto rounded-xl px-6 py-4 min-h-[48px] bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-base sm:text-sm text-white shadow-[0_0_20px_rgba(123,44,191,0.3)] border-none flex items-center justify-center">
              Book a Free Strategy Call →
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto rounded-xl px-6 py-4 min-h-[48px] glass-panel font-bold text-base sm:text-sm text-[var(--text-primary)] border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center">
              See Our Work →
            </MagneticButton>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-[var(--text-secondary)] dark:text-gray-300 font-medium border-l-2 border-[var(--primary)] pl-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Trusted by{" "}
            <span className="text-[var(--primary)] dark:text-purple-400 font-semibold">
              150+ brands
            </span>{" "}
            across India, the UK, Europe, and beyond since 2020.
          </motion.p>
        </div>

        {/* Right Column: Lead Form (6/12) */}
        <motion.div
          className="lg:col-span-6 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
