import type { ReactNode } from "react";

export interface IndustryItemColor {
  base: string;
  hoverBg: string;
  glow: string;
  border: string;
  borderBase: string;
  activeText: string;
  lineNormal: string;
  lineActive: string;
}

export interface IndustryItem {
  name: string;
  icon: ReactNode;
  colors?: IndustryItemColor;
}
