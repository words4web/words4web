import type { NavItem } from "../types/navigation";

export const navData: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Mobile App Development", href: "#services" },
      { label: "Web Designing", href: "#services" },
      { label: "Social Media Optimization", href: "#services" },
      { label: "Graphic Designing", href: "#services" },
      { label: "Search Engine Optimization", href: "#services" },
      { label: "Content Writing", href: "#services" },
      { label: "Amazon Marketing Services", href: "#services" },
    ],
  },
  { label: "Our Works", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Words4Web Education", href: "#education" },
];
