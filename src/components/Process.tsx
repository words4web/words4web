import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Section } from "./Section";
import { processData } from "../data/homepage/processData";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [stepThresholds, setStepThresholds] = useState<number[]>(
    processData.map((_, i) => i / (processData.length - 1)),
  );

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerH = container.offsetHeight;
      const thresholds = stepRefs.current.map((el) => {
        if (!el) return 0;
        // Centre of the step node relative to the container top
        const centre = el.offsetTop + el.offsetHeight / 2;
        return centre / containerH;
      });
      setStepThresholds(thresholds);
    };

    // Measure after initial paint and on every resize
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // scrollYProgress: 0 when container-top hits viewport-centre, 1 when container-bottom hits viewport-centre
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Live progress value used to decide which steps are "passed"
  const [progressVal, setProgressVal] = useState(0);
  useEffect(() => {
    return scaleY.on("change", (v) => setProgressVal(v));
  }, [scaleY]);

  return (
    <Section
      id="process"
      badge="Our Process"
      title="How We Work"
      description="A clear, connected process — whether you need one service or all eight."
      align="center"
      hasBorderTop
      headerClassName="max-w-3xl mx-auto text-center mb-24">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto flex flex-col gap-24 lg:gap-16">
        {/* Background dim line */}
        <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-neutral-200 dark:bg-white/10 -translate-x-1/2 z-0" />

        {/* Active glowing fill line */}
        <motion.div
          className="absolute left-1/2 top-4 w-[2px] bg-gradient-to-b from-[var(--primary)] to-purple-400 origin-top shadow-[0_0_8px_rgba(168,85,247,0.5)] -translate-x-1/2 z-0"
          style={{ height: "calc(100% - 32px)", scaleY }}
        />

        {/* Floating neon tracker ball */}
        <motion.div
          className="absolute left-1/2 w-4 h-4 rounded-full bg-white border-2 border-[var(--primary)] shadow-[0_0_12px_rgba(168,85,247,0.8)] z-10 -translate-x-1/2"
          style={{
            top: useTransform(scaleY, (v) => `calc(${v * 100}% - 8px)`),
          }}
        />

        {/* Process Steps */}
        {processData.map((step, idx) => {
          const isEven = idx % 2 === 0;
          // Use the real DOM-measured threshold for this step
          const threshold =
            stepThresholds[idx] ?? idx / (processData.length - 1);
          const isPassed = progressVal >= threshold;

          return (
            <div
              key={idx}
              // Attach ref to each step wrapper so we can measure its offsetTop
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className={`relative flex flex-col lg:flex-row items-center w-full gap-0 ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
              {/* Content Panel */}
              <div
                className={`w-full lg:w-1/2 px-4 lg:px-16 flex justify-center mt-24 lg:mt-0 ${
                  isEven ? "lg:justify-end" : "lg:justify-start"
                }`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative z-20 p-8 rounded-3xl border bg-[var(--background)] transition-all duration-500 overflow-hidden group max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
                    isPassed
                      ? "border-[var(--primary)]/30 bg-gradient-to-br from-[var(--background)] to-[var(--primary)]/10 shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
                      : "border-neutral-200 dark:border-white/15 bg-gradient-to-br from-[var(--background)] to-[var(--primary)]/5"
                  }`}>
                  {/* Step Pill */}
                  <div
                    className={`mb-4 flex justify-start ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-lg text-xs font-semibold tracking-wider uppercase border transition-colors duration-500 ${
                        isPassed
                          ? "bg-[var(--primary)]/20 border-[var(--primary)]/40 text-[var(--primary)]"
                          : "bg-[var(--primary)]/10 border-[var(--primary)]/20 text-[var(--primary)]"
                      }`}>
                      Step {step.step}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3 text-left">
                    {step.title}
                  </h4>
                  <p
                    className={`text-base leading-relaxed font-normal text-left transition-colors duration-500 ${
                      isPassed
                        ? "text-[var(--text-primary)]/90"
                        : "text-[var(--text-secondary)]"
                    }`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Central Badge/Milestone Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${
                    isPassed
                      ? "bg-[#120826] border-2 border-[var(--primary)] shadow-[0_0_28px_rgba(168,85,247,0.4)] scale-110"
                      : "bg-[#120826]/90 border-2 border-[var(--primary)]/30 shadow-[0_0_24px_rgba(157,78,221,0.15)] hover:border-[var(--primary)]/60"
                  }`}>
                  <span
                    className={`text-[10px] font-bold tracking-wider mb-0.5 select-none leading-none transition-colors duration-500 ${
                      isPassed ? "text-purple-300" : "text-[var(--primary)]"
                    }`}>
                    {step.step}
                  </span>
                  <div
                    className={`transition-all duration-500 ${
                      isPassed
                        ? "text-purple-300 scale-110"
                        : "text-[var(--primary)]"
                    }`}>
                    {step.icon}
                  </div>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="w-full lg:w-1/2 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
