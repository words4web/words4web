export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export interface FlipCardProps {
  service: ServiceItem;
  index: number;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
}
