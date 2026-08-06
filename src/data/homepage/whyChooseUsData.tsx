import type { WhyChooseUsItem } from "../../types/whyChooseUs";
import {
  Layers,
  Settings,
  BarChart3,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    title: "All Services Under One Roof",
    description:
      "Your website, app, SEO, content and ad campaigns are planned together and Words4Web handles it all.",
    badge: "Full-Service",
    icon: <Layers size={24} className="text-[#10b981]" />,
  },
  {
    title: "No Set Packages",
    description:
      "We put together a plan based on your goals and budget, not pre-set packages you don’t really need.",
    badge: "Custom Plan",
    icon: <Settings size={24} className="text-[#3b82f6]" />,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Every service is measured against clear metrics, so you always know what’s working.",
    badge: "Analytics & ROI",
    icon: <BarChart3 size={24} className="text-[#eab308]" />,
  },
  {
    title: "A True Point of Contact",
    description:
      "You get a steady team that knows your brand, not a revolving door of support.",
    badge: "Dedicated Team",
    icon: <Users size={24} className="text-[#ec4899]" />,
  },
  {
    title: "Global Reach",
    description: "India- and UK-based teams support clients across time zones.",
    badge: "24/7 Operations",
    icon: <Globe size={24} className="text-[#a855f7]" />,
  },
  {
    title: "Built for the Long-Term",
    description:
      "We focus on long-term success — organic rankings, brand consistency, and repeat customers.",
    badge: "Growth Focused",
    icon: <TrendingUp size={24} className="text-[#f97316]" />,
  },
];
