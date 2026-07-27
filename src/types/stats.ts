import type { ReactNode } from "react";

export interface StatItem {
  value: number;
  label: string;
  suffix: string;
  glowColor: string;
  icon: ReactNode;
}
