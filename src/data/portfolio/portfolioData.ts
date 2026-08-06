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
