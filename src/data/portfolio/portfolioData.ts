import type { PortfolioItem } from "../../types/portfolio";
import { caseStudiesData } from "../case-studies/caseStudiesData";
import { websiteDesignData } from "./websiteDesignData";
import { brochureData } from "./brochureData";
import { catalogData } from "./catalogData";
import { logosData } from "./logosData";
import { socialMediaData } from "./socialMediaData";
import { tataData } from "./tataData";
import { amazonData } from "./amazonData";
import { mobileAppData } from "./mobileAppData";
import { packagingData } from "./packagingData";

const mappedCaseStudies: PortfolioItem[] = caseStudiesData?.map((study) => ({
  id: study?.slug,
  title: study?.title?.replace("Words4Web × ", ""),
  category: "Case Studies",
  services: study?.services,
  description: study?.description,
  image: study?.image,
  link: study?.link,
  technologies: study?.technologies?.map((tech) => ({
    name: tech?.name,
    iconUrl: tech?.iconUrl,
  })),
}));

export const portfolioCategories = [
  "Case Studies",
  "Website Design",
  "Brochure",
  "Catalog",
  "Logos",
  "Social Media Marketing",
  "For TATA Consumers Pvt. Ltd.",
  "Amazon Marketing",
  "Mobile App Development",
  "Packaging",
] as const;

export const clientMapping: Record<string, string> = {
  // RKB
  "eu-education-isle-project": "EU Commission (ISLE)",
  "words4web-rkb-website-application-development": "RKB",
  "dadoos-same-day-grocery-delivery-greater-london": "Dadoos",
  "box2box-sports-football-academy-journey": "Box2Box Sports",
  "filipe-carrera-leadership-speaker-digital-hub": "Filipe Carrera",
  "words4web-powers-digital-growth-german-qsr-brand": "German QSR Brand",
  "rkb-kent-concrete": "RKB",
  "rkb-logo": "RKB",
  "mobileapp-divinego": "RKB",
  "social-acc-rkb": "RKB",
  "social-reel-rkb-1": "RKB",
  "social-reel-rkb-2": "RKB",
  "social-logoanim-rkb": "RKB",

  // Dadoos
  "dadoos-groceries": "Dadoos",
  "dadoos-logo": "Dadoos",
  "dadoos-trifold": "Dadoos",
  "social-acc-dadoos": "Dadoos",
  "social-reel-dadoos-1": "Dadoos",
  "social-reel-dadoos-2": "Dadoos",
  "social-motion-dadoos": "Dadoos",
  "social-motion-dadoos-2": "Dadoos",

  // Box2Box
  "box2box-academy": "Box2Box Sports",
  "box2box-logo": "Box2Box Sports",
  "football-app-banner": "Box2Box Sports",
  "mobileapp-box2box": "Box2Box Sports",
  "social-acc-box2box": "Box2Box Sports",

  // ISLE
  "social-acc-isle": "EU Commission (ISLE)",
  "social-reel-isle": "EU Commission (ISLE)",
  "social-reel-isle-2": "EU Commission (ISLE)",
  "social-logoanim-isle": "EU Commission (ISLE)",

  // Masala Guru
  "masala-guru": "Masala Guru",
  "masalaguru-menu-1": "Masala Guru",
  "masalaguru-menu-2": "Masala Guru",
  "masalaguru-flyer": "Masala Guru",
  "masalaguru-catering": "Masala Guru",
  "social-acc-masalaguru": "Masala Guru",
  "social-reel-masalaguru": "Masala Guru",
  "social-flyer-masalaguru-1": "Masala Guru",
  "social-flyer-masalaguru-2": "Masala Guru",
  "social-banner-masalaguru": "Masala Guru",
  "social-motion-masalaguru": "Masala Guru",
  "social-cgi-masalaguru": "Masala Guru",

  // DSF
  "dsf-logo": "DSF (Deccan Spices)",
  "dsf-brochure": "DSF (Deccan Spices)",
  "dsf-catalogue": "DSF (Deccan Spices)",
  "spices-catalogue": "DSF (Deccan Spices)",
  "packaging-dsf": "DSF (Deccan Spices)",
  "packaging-dsf-sambhar": "DSF (Deccan Spices)",
  "social-banner-dsf": "DSF (Deccan Spices)",
  "social-banner-dsf-spices": "DSF (Deccan Spices)",
  "social-cgi-desispices": "DSF (Deccan Spices)",
  "amazon-dsf": "DSF (Deccan Spices)",

  // TATA Consumers
  "tata-consumer-brochure": "TATA Consumers",
  "tata-consumer-products": "TATA Consumers",
  "tata-tea": "TATA Consumers",
  "tata-organic-india": "TATA Consumers",
  "tata-himalayan": "TATA Consumers",

  // Hansons
  "hansons-groceries": "Hansons",
  "hansons-catalogue": "Hansons",
  "packaging-hansons": "Hansons",
  "packaging-hansons-desidaliya": "Hansons",

  // Filipe Carrera
  "felipe-carrera": "Filipe Carrera",

  // Vepura
  "social-acc-vepura": "Vepura",
  "social-reel-vepura": "Vepura",
  "social-motion-vepura": "Vepura",
  "social-cgi-vepura": "Vepura",
  "social-cgi-vepura-2": "Vepura",
  "vezyrouglou-farm-logo": "Vepura",

  // Sartaaj
  "mobileapp-sartaaj": "Sartaaj",
  "amazon-sartaaj": "Sartaaj",

  // Grainful
  "grainful-exports": "Other Projects",
  "grainful-logo": "Other Projects",

  // Divine Aura
  "divine-aura-healing": "Other Projects",
  "divine-aura-logo": "Other Projects",

  // Live Constructions
  "live-constructions": "Other Projects",
  "live-constructions-logo": "Other Projects",

  // Paragon
  "paragon-edutech": "Other Projects",
  "social-static-paragon": "Other Projects",

  // Others/Misc
  "sharmaji-logo": "Other Projects",
  "social-logoanim-sharmaji": "Other Projects",
  "amazon-rajah": "Other Projects",
  "amazon-spicy-world": "Other Projects",
  "packaging-bombaychef": "Other Projects",
  "packaging-couscous": "Other Projects",
  "social-video-1": "Other Projects",
  "social-video-2": "Other Projects",
  "social-video-3": "Other Projects",
  "social-banner-quicksigner-1": "Other Projects",
  "social-banner-quicksigner-2": "Other Projects",
  "social-banner-quicksigner-3": "Other Projects",
  "social-logoanim-buneek": "Other Projects",
  "entrenous-logo": "Other Projects",
  "la-malle-logo": "Other Projects",
  "general-work-logo": "Other Projects",
  "work-3-logo": "Other Projects",
  "fmcg-mantra": "Other Projects",
};

export const clientCategories = [
  "RKB",
  "Dadoos",
  "Box2Box Sports",
  "EU Commission (ISLE)",
  "Masala Guru",
  "DSF (Deccan Spices)",
  "TATA Consumers",
  "Hansons",
  "Filipe Carrera",
  "Vepura",
  "Sartaaj",
  "German QSR Brand",
  "Other Projects",
] as const;

export const portfolioData: PortfolioItem[] = [
  ...mappedCaseStudies,
  ...websiteDesignData,
  ...brochureData,
  ...catalogData,
  ...logosData,
  ...socialMediaData,
  ...tataData,
  ...amazonData,
  ...mobileAppData,
  ...packagingData,
];
