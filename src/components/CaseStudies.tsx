import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { workData } from "../data/workData";
import { WorkItem } from "../types/work";
import { Section } from "./Section";

function ProjectCard({ project, index }: { project: WorkItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for cursor alignment
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });

  // Map values to tilt rotations (-12 to 12 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;

    // Normalize coordinates around center (0,0) from -0.5 to 0.5
    x.set(mouseXVal / width - 0.5);
    y.set(mouseYVal / height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{ perspective: "1000px" }}
      className="group relative flex flex-col gap-6">
      {/* 3D Tilting Browser Mockup */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 20px 45px -10px rgba(123, 44, 191, 0.25)"
            : "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
          borderColor: isHovered
            ? "rgba(123, 44, 191, 0.4)"
            : "rgba(255, 255, 255, 0.08)",
          transition:
            "box-shadow 0.5s ease-in-out, border-color 0.5s ease-in-out",
        }}
        className="w-full rounded-3xl overflow-hidden glass-panel border select-none bg-[var(--background-secondary)]">
        {/* Address bar/header */}
        <div className="h-8 w-full bg-[var(--background-secondary)] px-4 flex items-center gap-2 border-b border-[var(--border)]">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="mx-auto w-40 h-4 rounded bg-[var(--background)]/80 flex items-center justify-center text-[8px] text-[var(--text-secondary)] font-mono truncate px-2">
            words4web.com/showcase
          </div>
        </div>

        {/* Screenshot Viewport Container */}
        <div className="relative w-full h-[450px] overflow-hidden bg-black/10">
          <img
            src={project.image}
            alt={project.title}
            style={{
              transform: isHovered
                ? "translateY(calc(-100% + 450px))"
                : "translateY(0)",
              transition: "transform 6s ease-in-out",
            }}
            className="w-full h-auto object-top select-none"
          />
        </div>
      </motion.div>

      {/* Slogan Details */}
      <div className="flex flex-col text-left px-2">
        <span className="text-[var(--primary)] text-xs uppercase tracking-widest font-semibold mb-1">
          Website Showcase
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <Section
      id="work"
      ref={containerRef}
      badge="Our projects"
      title={
        <>
          Selected <span className="text-gradient">Works</span>
        </>
      }
      align="center"
      headerClassName="max-w-3xl mx-auto"
      y={y}>
      {/* 3-Column Portfolio Mockup Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      {/* Bottom CTA Action */}
      <div className="mt-20 flex justify-center">
        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full px-10 py-5 glass-panel font-medium interactive text-base flex items-center gap-2">
            <span className="relative z-10 text-[var(--text-primary)] transition-colors group-hover:text-white">
              See Our Works
            </span>
            <span className="relative z-10 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
              →
            </span>
            <div className="absolute inset-0 bg-[var(--primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          </motion.button>
        </a>
      </div>
    </Section>
  );
}
