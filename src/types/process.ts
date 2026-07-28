import type { ReactNode } from "react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: ReactNode;
}
