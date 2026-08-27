import type { FooterData } from "../../types/footer";

export const footerData: FooterData = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#who-we-are" },
    { label: "Our Works", href: "/#work" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  services: [
    {
      label: "Amazon Marketing Services",
      href: "/amazon-marketing-services",
    },
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
    { label: "SEO Services", href: "/search-engine-optimization" },
    { label: "Content Writing", href: "/content-writing" },
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
