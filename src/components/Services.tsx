import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { Section } from "./Section";
import { FlipCard } from "./FlipCard";
import { MagneticButton } from "./MagneticButton";

export function Services() {
  const ref = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <Section
      id="services"
      ref={ref}
      badge="What we do"
      title={
        <>
          Our <span className="text-gradient">Services</span>
        </>
      }
      description="We provide a dynamic range of services designed to elevate your brand’s success. Whether it’s cutting-edge digital marketing, bespoke web development, or innovative design solutions, we craft strategies that align with your unique business goals, ensuring impactful and lasting results."
      headerClassName="max-w-3xl text-left"
      y={y}>
      {/* Highlight EU Commission ISLE Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="flex flex-col gap-6 max-w-2xl">
          <span className="text-[var(--primary)] font-display text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            Featured Case Study
          </span>
          <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-gradient">
            Words4Web × EU Commission - ISLE Project
          </h3>
          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light">
            Words4Web powers EU’s ISLE project with social media, newsletters,
            and logo design to redefine primary education with innovative,
            inclusive learning environments in Europe.
          </p>
        </div>

        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white p-4 flex items-center justify-center shrink-0 shadow-lg interactive hover:scale-105 transition-transform duration-300">
          <img
            src="/services/eu_isle_logo.png"
            alt="Logo of EU ISLE project digital PR and branding by Words4Web"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* 3D Flip Card Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => (
          <FlipCard
            key={idx}
            service={service}
            index={idx}
            hoveredIdx={hoveredIdx}
            setHoveredIdx={setHoveredIdx}
          />
        ))}
      </div>

      {/* CTA Bottom Button */}
      <div className="mt-20 flex justify-center">
        <a href="#work">
          <MagneticButton
            variant="primary"
            className="px-10 py-5 text-base flex items-center gap-2">
            <span>See Our Works</span>
            <span className="group-hover:translate-x-1 duration-300">→</span>
          </MagneticButton>
        </a>
      </div>
    </Section>
  );
}
