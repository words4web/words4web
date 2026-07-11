export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}
