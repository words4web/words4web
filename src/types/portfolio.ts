import type {
  PartnerItem,
  TechItem,
  ServiceItem,
  IntegrationItem,
  ProcessStep,
} from "./caseStudy";

export interface PortfolioItem {
  id: string;
  category: string;
  image: string;
  subCategory?: string;
  video?: string;
  title?: string;
  services?: string;
  description?: string;
  link?: string;
  technologies?: TechItem[];
  subtitle?: string;
  aboutText1?: string;
  aboutText2?: string;
  partners?: PartnerItem[];
  servicesOffered?: ServiceItem[];
  integrations?: IntegrationItem[];
  processSteps?: ProcessStep[];
}

export interface PortfolioTabsProps {
  activeTab: string;
  setActiveTab: (category: string) => void;
}

export interface PortfolioCardsProps {
  filteredItems: PortfolioItem[];
  activeTab?: string;
  activeSubTab?: string;
}
