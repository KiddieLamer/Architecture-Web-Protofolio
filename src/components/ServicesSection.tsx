"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "architectural-visualization",
    title: "3D Architectural Visualization",
    description: "Focusing on exterior project rendering for architects, developers, and branding agencies. From small cabins to large urban developments.",
    href: "/services/architectural-visualization"
  },
  {
    id: "interior-visualization",
    title: "3D Interior Visualization", 
    description: "Providing detailed interior space rendering with animations and video presentations. Covering spaces from apartments to large offices.",
    href: "/services/interior-visualization"
  },
  {
    id: "animation-rendering",
    title: "3D Animation Rendering",
    description: "Using Unreal Engine and 3ds Max for architectural, interior, and product animations to capture the attention of potential investors and customers.",
    href: "/services/animation-rendering"
  },
  {
    id: "unreal-engine-development",
    title: "Unreal Engine Development",
    description: "Advanced visualization technologies providing VR solutions and interactive configurators enabling high-detail animations and immersive experiences.",
    href: "/services/unreal-engine-development"
  }
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title text-black">Services</h2>
          <Link 
            href="/services" 
            className="text-sm text-black hover:opacity-60 transition-opacity"
          >
            View all →
          </Link>
        </div>

        {/* Accordion-style services */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="border-t border-gray-200 last:border-b"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-6 flex items-center justify-between hover:opacity-60 transition-opacity"
              >
                <h3 className="text-lg font-normal">{service.title}</h3>
                <span className="text-sm">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="pb-6 pr-8">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="text-sm text-black hover:opacity-60 transition-opacity"
                  >
                    Learn more →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}