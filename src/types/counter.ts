import type { ReactNode } from "react";

export interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  icon: ReactNode;
  glowColor: string;
}
