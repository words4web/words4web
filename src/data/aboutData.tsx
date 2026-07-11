import React from "react";
import type { AboutContent } from "../types/about";

export const aboutData: AboutContent = {
  badge: "Best Digital Marketing Agency",
  title: "Our Story",
  multilingualNotice:
    "Good News! We are now multilingual as we present to you international and national language web content, blogging, and SEO services. Encouraging businesses to reach every nook and corner of the nation.",
  partnerStat: "Since 2020, we have partnered with more than 150 brands.",
  storyDescription:
    "Thank you for being part of our journey. At Words4Web, we blend strategy, storytelling, and smart design to turn your brand’s potential into real, measurable growth, backed by expert strategy, powerful storytelling, and 24/7 support, anywhere in the World.",
  standoutHeading: "What Makes us Stand out",
  standoutText:
    "Welcome to Words4Web, where we run digital PR campaigns with influencer marketing & deliver real results.",
  ceoName: "Priya Khatod",
  metrics: [
    { value: "5", label: "Years Of Excellence" },
    { value: "250", label: "Projects Done" },
    { value: "100", label: "Success Rate" },
    { value: "200", label: "Happy Clients" },
  ],
};

export const metricsIcons = [
  // Years of Excellence
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>,
  // Projects Done
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>,
  // Success Rate
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
  // Happy Clients
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>,
];

export const glowColors = [
  "from-[#7b2cbf] to-[#9d4edd]",
  "from-[#3a86c8] to-[#00f2fe]",
  "from-[#ff007f] to-[#ff7b00]",
  "from-[#00f2fe] to-[#7b2cbf]",
];
