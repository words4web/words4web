import { ReactNode } from "react";
import { MotionValue } from "framer-motion";

export interface SectionProps {
  id?: string;
  badge?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  innerClassName?: string;
  headerClassName?: string;
  y?: MotionValue<number>;
  hasBorderTop?: boolean;
  hasBackground?: boolean;
  children: ReactNode;
}
