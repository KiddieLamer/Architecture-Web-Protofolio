import Link from "next/link";
import Image from "next/image";
import { ServiceItem } from "@/types";

const services: ServiceItem[] = [
  {
    id: "architectural-visualization",
    title: "3D Architectural Visualization",
    description: "Bring your architectural designs to life with photorealistic exterior renderings that showcase every detail of your project.",
    features: [
      "Photorealistic exterior renderings",
      "Aerial and ground-level perspectives",
      "Day and night scene variations",
      "Landscape and environment integration",
      "High-resolution output for marketing"
    ],
    href: "/services/architectural-visualization"
  },
  {
    id: "interior-visualization",
    title: "3D Interior Visualization",
    description: "Create stunning interior visualizations that help clients envision spaces before construction begins.",
    features: [
      "Detailed interior space rendering",
      "Furniture and fixture placement",
      "Lighting design visualization",
      "Material and texture showcasing",
      "360° panoramic views"
    ],
    href: "/services/interior-visualization"
  },
  {
    id: "animation-rendering",
    title: "3D Animation Rendering",
    description: "Dynamic animations that tell the story of your architectural project through cinematic sequences.",
    features: [
      "Architectural walkthroughs",
      "Flythrough animations",
      "Interior journey sequences",
      "Construction process animation",
      "4K video output quality"
    ],
    href: "/services/animation-rendering"
  },
  {
    id: "unreal-engine-development",
    title: "Unreal Engine Development",
    description: "Interactive experiences and virtual reality solutions for immersive architectural presentations.",
    features: [
      "Real-time visualization",
      "VR experiences",
      "Interactive configurators",
      "Virtual showrooms",
      "Cross-platform compatibility"
    ],
    href: "/services/unreal-engine-development"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          We provide comprehensive 3D visualization services that help architects, 
          developers, and designers communicate their vision with stunning clarity.
        </p>
      </div>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href={service.href}
                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 ${
              index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
            }`}>
              <Image
                src={`/images/services/${service.id}.jpg`}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-gray-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your visualization needs and get a custom quote 
          for your architectural project.
        </p>
        <Link 
          href="/studio"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}