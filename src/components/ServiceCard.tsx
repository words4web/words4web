import { motion } from "framer-motion";
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
}

export function ServiceCard({ service }: ServiceCardProps) {
  const icon = service.iconKey ? iconMap[service.iconKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className="relative p-[2px] rounded-3xl overflow-hidden cursor-pointer select-none group h-full">
      {/* Glowing Line Tracing Around Border (Always Active - Purple Shiny) */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, #a855f7 340deg, #c084fc 350deg, #e9d5ff 360deg)",
          }}
        />
      </div>

      {/* Inner Card Content */}
      <div className="relative flex flex-col justify-between min-h-[300px] p-8 bg-white dark:bg-[#0c0a12] border border-black/5 dark:border-white/5 rounded-[22px] text-left h-full z-10 overflow-hidden">
        <div className="flex flex-col items-start gap-4">
          {/* Circular Icon Frame (Purple) */}
          {icon && (
            <div className="w-14 h-14 rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)] shrink-0 shadow-sm">
              {icon}
            </div>
          )}

          {/* Details */}
          <div className="flex flex-col gap-2 mt-2">
            <h4 className="font-display text-xl font-bold text-[var(--text-primary)] tracking-tight">
              {service.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Capsule Badge (Purple) */}
        {service.badge && (
          <div className="bg-[var(--primary)]/10 dark:bg-[var(--primary)]/15 border border-[var(--primary)]/20 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-semibold w-fit mt-6 select-none shadow-sm">
            {service.badge}
          </div>
        )}
      </div>
    </motion.div>
  );
}
