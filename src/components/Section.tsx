import { forwardRef } from "react";
import { motion } from "framer-motion";
import { SectionProps } from "../types/section";

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      id,
      badge,
      title,
      description,
      align = "left",
      className = "",
      innerClassName = "",
      headerClassName = "",
      y,
      hasBorderTop = false,
      hasBackground = false,
      children,
    },
    ref,
  ) => {
    const alignClass =
      align === "center"
        ? "items-center text-center mx-auto"
        : "items-start text-left";
    const borderClass = hasBorderTop
      ? "border-t border-[var(--text-secondary)]/5"
      : "";

    const headerContent = (badge || title || description) && (
      <div
        className={`flex flex-col ${alignClass} ${y ? "" : headerClassName}`}>
        {badge && (
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
              {badge}
            </span>
          </div>
        )}

        {title && (
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h2>
        )}

        {description && (
          <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>
    );

    const header = y ? (
      <motion.div style={{ y }} className={`w-full mb-20 ${headerClassName}`}>
        {headerContent}
      </motion.div>
    ) : (
      headerContent && (
        <div className={`w-full mb-20 ${headerClassName}`}>{headerContent}</div>
      )
    );

    return (
      <section
        id={id}
        ref={ref}
        className={`py-16 md:py-24 px-6 md:px-12 relative overflow-hidden bg-transparent ${borderClass} ${className}`}>
        {hasBackground && (
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--background-secondary)_0%,_var(--background)_100%)] opacity-50" />
        )}

        <div className={`w-full relative z-10 ${innerClassName}`}>
          {header}
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = "Section";
