export interface ShootingStar {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  tailAngle: number;
  id: number;
}

export interface HeroCardItem {
  title: string;
  delay: number;
  className: string;
}

export interface FloatingCardProps {
  title: string;
  delay: number;
  className: string;
  isGlowing?: boolean;
  cardRef?: (el: HTMLDivElement | null) => void;
}
