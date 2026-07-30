import type { ReactNode } from "react";

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
}

export interface WhyChooseUsCardProps {
  item: WhyChooseUsItem;
  direction?: "left" | "right";
  delay?: number;
}
