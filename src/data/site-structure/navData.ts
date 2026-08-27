import type { NavItem } from "../../types/navigation";

export const navData: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#who-we-are" },
  {
    label: "Services",
    href: "/#services",
    children: [
      {
        label: "Mobile App Development",
        href: "/mobile-app-development",
      },
      { label: "Web Designing", href: "/web-development" },
      {
        label: "Social Media Optimization",
        href: "/social-media-optimisation",
      },
      { label: "Graphic Designing", href: "/graphic-designing" },
      {
        label: "Search Engine Optimization",
        href: "/search-engine-optimization",
      },
      { label: "Content Writing", href: "/content-writing" },
      {
        label: "Amazon Marketing Services",
        href: "/amazon-marketing-services",
      },
      {
        label: "Paid Ads Management",
        href: "/paid-ads-management",
      },
      {
        label: "View All Services →",
        href: "/#services",
      },
    ],
  },
  { label: "Our Works", href: "/our-works" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];
