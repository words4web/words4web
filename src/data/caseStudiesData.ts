import type { CaseStudyItem } from "../types/caseStudy";

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: "eu-education-isle-project",
    title: "EU Commission ISLE Project",
    subtitle: "Redefining Primary Education Across Europe",
    services: "Social Media + Newsletters + Logo Design",
    description:
      "Words4Web powers the EU’s ISLE project with social media campaigns, multilingual newsletters, and corporate identity design to establish a collaborative voice for primary school redesign across Europe.",
    image: "/case_studies/isle_project.png",
    link: "/case-studies/eu-education-isle-project",
    aboutText1:
      "At Words4Web, we’re proud to be the digital communication partner for the European Union Commission’s ISLE project: Collaborative Learning Communities for Redesigning Primary Education Towards Innovative & Sustainable Learning Environments.",
    aboutText2:
      "ISLE is redefining how primary education looks and feels across Europe. It brings together teacher training institutes, school leaders, and education policymakers to co-create learning environments that are more inclusive, innovative, and sustainable.",
    partners: [
      { name: "🇪🇺 EU", badge: "Commission" },
      { name: "University Partners" },
    ],
    technologies: [
      {
        name: "Figma",
        desc: "Identity & Visuals",
        iconUrl: "/tools/figma.svg",
      },
      {
        name: "LinkedIn",
        desc: "Professional Outreach",
        iconUrl: "/tools/linkedin-ads.png",
      },
      {
        name: "Facebook",
        desc: "Community Support",
        iconUrl: "https://cdn.simpleicons.org/facebook/1877F2",
      },
      {
        name: "Instagram",
        desc: "Interactive Reels",
        iconUrl: "https://cdn.simpleicons.org/instagram/E1306C",
      },
      {
        name: "Mailchimp",
        desc: "Newsletter Delivery",
        iconUrl: "https://cdn.simpleicons.org/mailchimp/FFE500",
      },
    ],
    servicesOffered: [
      {
        title: "Logo & Corporate Identity Design",
        desc: "Designed the official ISLE logo representing purpose, people, and future, aligning strictly with EU communication guidelines.",
      },
      {
        title: "Social Media Post Templates",
        desc: "Responsible for creating ISLE’s online presence across Facebook, Instagram, and LinkedIn with custom Reels, motion graphics, and static posts.",
      },
      {
        title: "Multilingual Newsletter Campaigns",
        desc: "Drafting, translating, and delivering multi-language newsletters in over five European languages monthly.",
      },
      {
        title: "Fast Turnaround Support",
        desc: "Round-the-clock speed, accuracy, and on-time delivery for event rollouts, newsletter dispatch, and last-minute asset modifications.",
      },
    ],
    integrations: [
      {
        title: "Multilingual Newsletter Dispatch",
        desc: "Engineered monthly multi-language campaign templates tailored, translated, and dispatched in over five EU languages.",
      },
      {
        title: "EU Branding Compliance",
        desc: "Designed assets strictly compliant with standard EU Commission branding requirements, guidelines, and timelines.",
      },
      {
        title: "Multi-Platform Social Hubs",
        desc: "Maintained consistent visual assets and schedules across LinkedIn, Facebook, and Instagram communities.",
      },
      {
        title: "Always-On Asset Delivery",
        desc: "Ensured rapid-response design workflows to roll out last-minute graphics changes for international events.",
      },
      {
        title: "Creative Brand Identity",
        desc: "Conceptualized and designed the main ISLE project logo, representing collaborative school redesign initiatives.",
      },
      {
        title: "Strategic Outreach Clarity",
        desc: "Tailored educational content to simplify and present complex policymaking ideas in readable visual formats.",
      },
    ],
    processSteps: [
      {
        title: "1. Requirements",
        desc: "Define EU education communication parameters, organize guidelines alignment, and design structural workflow requirements across borders.",
        iconName: "Layers",
      },
      {
        title: "2. Solutions",
        desc: "Design the official ISLE logo identity, manage active multi-platform social feeds, and translate monthly campaigns into 5+ European languages.",
        iconName: "Globe",
      },
      {
        title: "3. Results",
        desc: "Establish a unified digital voice across EU partner regions, maintain perfect brand alignment, and achieve rapid timelines execution.",
        iconName: "CheckCircle",
      },
    ],
  },
];
