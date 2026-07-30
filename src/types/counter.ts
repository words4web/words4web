import type { ReactNode } from "react";

export interface CounterProps {
  value: ReactNode;
  label: string;
  suffix?: string;
  icon?: ReactNode;
  glowColor: string;
}
