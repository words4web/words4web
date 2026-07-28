import type { ProcessStep } from "../types/process";
import React from "react";
import { Search, PenTool, Code, ShieldCheck, TrendingUp } from "lucide-react";

export const processData: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Stakeholder interviews, technical audit, and a detailed scope document before we write a single line of code.",
    icon: <Search size={22} />,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes to high-fidelity Figma prototypes to design systems. Your approval at every checkpoint.",
    icon: <PenTool size={22} />,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Agile sprints, daily standups, staged deployments, and weekly demo calls so you see live progress.",
    icon: <Code size={22} />,
  },
  {
    step: "04",
    title: "QA & Launch",
    description:
      "Automated testing, accessibility audits, load testing, and zero-downtime deployment to production.",
    icon: <ShieldCheck size={22} />,
  },
  {
    step: "05",
    title: "Growth",
    description:
      "Post-launch analytics, A/B testing, performance tuning, and roadmap iteration — we stay with you.",
    icon: <TrendingUp size={22} />,
  },
];
