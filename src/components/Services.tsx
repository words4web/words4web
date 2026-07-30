import { useRef } from "react";
import { servicesData } from "../data/servicesData";
import { Section } from "./Section";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  const ref = useRef(null);

  return (
    <Section
      id="services"
      ref={ref}
      badge="What we do"
      title={
        <>
          Our <span className="text-gradient">Services</span>
        </>
      }
      description="We provide a dynamic range of services designed to elevate your brand’s success. Whether it’s cutting-edge digital marketing, bespoke web development, or innovative design solutions, we craft strategies that align with your unique business goals, ensuring impactful and lasting results."
      align="center"
      headerClassName="max-w-4xl mx-auto text-center font-display">
      {/* 4-Column Symmetric Grid Layout for the 8 original services (2 rows of 4 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12">
        {servicesData.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </Section>
  );
}
