import type { NavItem } from "../types/navigation";

export const navData: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#who-we-are" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { label: "Web Designing", href: "/services/web-development" },
      {
        label: "Social Media Optimization",
        href: "/services/social-media-optimisation",
      },
      { label: "Graphic Designing", href: "/services/graphic-designing" },
      {
        label: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
      },
      { label: "Content Writing", href: "/services/content-writing" },
      {
        label: "Amazon Marketing Services",
        href: "/services/amazon-marketing-services",
      },
    ],
  },
  { label: "Our Works", href: "/our-works" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
