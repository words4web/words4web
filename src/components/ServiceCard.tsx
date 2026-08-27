import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ServiceItem } from "../types/services";
import {
  Monitor,
  Smartphone,
  Globe,
  Edit3,
  Share2,
  Palette,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  web: <Monitor className="w-6 h-6" />,
  mobile: <Smartphone className="w-6 h-6" />,
  seo: <Globe className="w-6 h-6" />,
  content: <Edit3 className="w-6 h-6" />,
  social: <Share2 className="w-6 h-6" />,
  design: <Palette className="w-6 h-6" />,
  ecommerce: <ShoppingCart className="w-6 h-6" />,
  ads: <TrendingUp className="w-6 h-6" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  isHovered?: boolean;
  isAnyHovered?: boolean;
}

export function ServiceCard({
  service,
  isHovered = false,
  isAnyHovered = false,
}: ServiceCardProps) {
  const icon = service.iconKey ? iconMap[service.iconKey] : null;
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: "1000px" }} className="h-full w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={
          isHovered
            ? { scale: 1.05, opacity: 1, zIndex: 10 }
            : isAnyHovered
              ? { scale: 0.95, opacity: 0.65, zIndex: 0 }
              : { scale: 1, opacity: 1, zIndex: 0 }
        }
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative p-[2px] rounded-3xl overflow-hidden cursor-pointer select-none group h-full">
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, #a855f7 340deg, #c084fc 350deg, #e9d5ff 360deg)",
            }}
          />
        </div>

        <div
          style={{ transform: "translateZ(30px)" }}
          className={`relative flex flex-col min-h-[300px] p-8 border rounded-[22px] text-left h-full z-10 overflow-hidden transition-colors duration-300 ${
            isHovered
              ? "bg-purple-50 dark:bg-[#150a26] border-purple-500/60"
              : "bg-white dark:bg-[#0c0a12] border-purple-500/40 dark:border-purple-500/40"
          }`}>
          {/* Top content */}
          <div className="flex flex-col items-start gap-4 flex-1">
            {icon && (
              <div className="w-14 h-14 rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)] shrink-0 shadow-sm">
                {icon}
              </div>
            )}

            <div className="flex flex-col gap-2 mt-2">
              <h4 className="font-display text-xl font-bold text-[var(--text-primary)] tracking-tight">
                {service.title}
              </h4>
              <p
                className={`text-sm ${isHovered ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"} font-light leading-relaxed`}>
                {service.description}
              </p>
            </div>
          </div>

          {/* Bottom: badge + Learn More button — always on one line */}
          <div className="flex items-center justify-between mt-6 gap-3">
            {service.badge && (
              <div className="min-w-0 truncate bg-gradient-to-r from-purple-500/20 via-fuchsia-500/25 to-indigo-500/20 border border-purple-400/40 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold select-none shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                {service.badge}
              </div>
            )}

            {service.slug && (
              <a
                href={`/${service.slug}`}
                className="shrink-0 ml-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/5 hover:bg-purple-500 hover:border-purple-500 hover:text-white text-[var(--primary)] text-xs font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                onClick={(e) => e.stopPropagation()}>
                Learn More
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
