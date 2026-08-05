export interface ServiceSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  badge?: string;
  number?: string;
  iconKey?: string;
  slug?: string;
  heroTagline?: string;
  sections?: ServiceSection[];
  ctaHeading?: string;
  ctaLabel?: string;
}

export interface FlipCardProps {
  service: ServiceItem;
  index: number;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
}
