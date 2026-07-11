import React from "react";

export interface MetricItem {
  value: string;
  label: string;
}

export interface AboutContent {
  badge: string;
  title: string;
  multilingualNotice: string;
  storyDescription: string;
  standoutHeading: string;
  standoutText: string;
  partnerStat: string;
  ceoName: string;
  metrics: MetricItem[];
}

export interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  glowColor: string;
}
