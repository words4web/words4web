export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MobileMenuProps {
  isOpen?: boolean;
  onClose: () => void;
  navData: NavItem[];
  getHref: (href: string) => string;
  isMobile: boolean;
}
