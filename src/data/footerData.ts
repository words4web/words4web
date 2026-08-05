import type { FooterData } from "../types/footer";

export const footerData: FooterData = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#who-we-are" },
    { label: "Our Works", href: "/#work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  services: [
    {
      label: "Amazon Marketing Services",
      href: "/services/amazon-marketing-services",
    },
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
    { label: "SEO Services", href: "/services/search-engine-optimization" },
    { label: "Content Writing", href: "/services/content-writing" },
  ],
  mainOffice: {
    email: "info@words4web.com",
    phone: "+917020207611",
    address: "5037, SSRF, Near City Center Mall, Lavate Nagar, Nashik 422002",
  },
  branchOffice: {
    email: "info@words4web.com",
    phone: "+447344861555",
    address: "56, Morgan drive, Greenhithe, Dartford DA9 9DT, United Kingdom",
  },
};
