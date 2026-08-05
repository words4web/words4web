import type { PortfolioItem } from "../types/portfolio";

export const caseStudiesPortfolioData: PortfolioItem[] = [
  {
    id: "eu-education-isle-project",
    title: "EU Commission ISLE Project",
    category: "Case Studies",
    services: "Social Media + Newsletters + Logo Design",
    description:
      "Words4Web powers the EU’s ISLE project with social media campaigns, multilingual newsletters, and corporate identity design to establish a collaborative voice for primary school redesign across Europe.",
    image: "/case_studies/isle_project.png",
    link: "/our-works/eu-education-isle-project",
    technologies: [
      { name: "Figma", iconUrl: "/tools/figma.svg" },
      { name: "LinkedIn", iconUrl: "/tools/linkedin.svg" },
      { name: "Facebook", iconUrl: "/tools/facebook.svg" },
      { name: "Instagram", iconUrl: "/tools/instagram.svg" },
      { name: "Mailchimp", iconUrl: "/tools/mailchimp.svg" },
    ],
  },
];
