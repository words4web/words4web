import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { ServiceItem } from "../types/services";
import { Section } from "./Section";

function FlipCard({ service, index }: { service: ServiceItem; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isVertical = index % 2 === 1;

  // Alternate flip axes: vertical (X-axis) or horizontal (Y-axis) - both perfectly straight
  const animateProps = {
    rotateX: isVertical ? (isFlipped ? 180 : 0) : 0,
    rotateY: !isVertical ? (isFlipped ? 180 : 0) : 0,
  };

  const getBackTransform = () => {
    return isVertical ? "rotateX(180deg)" : "rotateY(180deg)";
  };

  return (
    <div
      className="w-full h-[380px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-full select-none"
        style={{ transformStyle: "preserve-3d" }}
        animate={animateProps}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}>
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden glass-panel flex flex-col justify-end p-8"
          style={{ backfaceVisibility: "hidden" }}>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-90 scale-105 hover:scale-100 transition-all duration-500"
            />
          </div>
          {/* Title */}
          <h3 className="relative z-10 font-display text-2xl md:text-3xl font-bold tracking-tight text-white text-left">
            {service.title}
          </h3>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl p-8 glass-panel flex flex-col justify-between bg-[var(--background-secondary)]"
          style={{
            backfaceVisibility: "hidden",
            transform: getBackTransform(),
          }}>
          <div className="flex flex-col gap-4 text-left">
            <span className="text-[var(--primary)] font-display text-xs uppercase tracking-widest font-semibold">
              Words4Web Brand Solution
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light">
              {service.description}
            </p>
          </div>
          <div className="flex items-center text-sm font-semibold text-[var(--primary)] mt-4">
            Get Started <span className="ml-2">→</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Services() {
  const ref = useRef(null);
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
          <FlipCard key={idx} service={service} index={idx} />
        ))}
      </div>

      {/* CTA Bottom Button */}
      <div className="mt-20 flex justify-center">
        <a href="#work">
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
