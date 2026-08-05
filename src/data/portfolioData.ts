import type { PortfolioItem } from "../types/portfolio";
import { caseStudiesPortfolioData } from "./caseStudiesPortfolioData";
import { websiteDesignData } from "./websiteDesignData";
import { brochureData } from "./brochureData";
import { catalogData } from "./catalogData";
import { logosData } from "./logosData";
import { socialMediaData } from "./socialMediaData";
import { tataData } from "./tataData";
import { amazonData } from "./amazonData";
import { mobileAppData } from "./mobileAppData";
import { packagingData } from "./packagingData";

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

export const portfolioData: PortfolioItem[] = [
  ...caseStudiesPortfolioData,
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
