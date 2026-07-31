export interface BlogContentBlock {
  type: "paragraph" | "heading" | "image";
  value: string; // Content text (can contain markdown link [text](url) syntax) or image path
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPostData {
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
  headerImage: string;
  content: BlogContentBlock[];
  faqs: FAQItem[];
  citations?: string[];
}
