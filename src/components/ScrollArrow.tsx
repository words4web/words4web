import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ScrollArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}

export function ScrollArrow({
  direction,
  onClick,
  ariaLabel,
  children,
  className,
}: ScrollArrowProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute z-20 w-11 h-11 rounded-full bg-neutral-950 dark:bg-neutral-50 text-neutral-100 dark:text-neutral-900 border border-neutral-800 dark:border-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-900 dark:hover:bg-neutral-100 active:scale-90 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.25)] touch-manipulation",
        direction === "left" ? "left-0" : "right-0",
        className,
      )}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
}
