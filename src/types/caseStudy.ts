export interface PartnerItem {
  name: string;
  badge?: string;
}

export interface TechItem {
  name: string;
  desc?: string;
  iconUrl?: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface IntegrationItem {
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
  iconName: "Layers" | "Globe" | "CheckCircle";
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  subtitle: string;
  services: string;
  description: string;
  image: string;
  link: string;
  aboutText1: string;
  aboutText2: string;
  partners: PartnerItem[];
  technologies: TechItem[];
  servicesOffered: ServiceItem[];
  integrations: IntegrationItem[];
  processSteps: ProcessStep[];
  ctaTitle?: string;
  ctaDesc?: string;
  ctaButton?: string;
}
