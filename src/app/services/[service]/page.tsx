import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ServicePageProps {
  params: {
    service: string;
  };
}

const serviceData: Record<string, any> = {
  "architectural-visualization": {
    title: "3D Architectural Visualization",
    subtitle: "Photorealistic exterior renderings that bring your designs to life",
    description: "Our architectural visualization services help architects, developers, and branding agencies showcase their projects with stunning photorealistic renderings. From small residential cabins to large urban developments, we create compelling visuals that communicate your design intent clearly.",
    process: [
      "Initial consultation and project brief review",
      "3D modeling based on architectural drawings",
      "Material and lighting setup",
      "Camera composition and framing", 
      "Rendering and post-production",
      "Client review and revisions"
    ],
    deliverables: [
      "High-resolution images (4K+)",
      "Multiple viewing angles",
      "Day and night variations",
      "Raw and post-processed versions",
      "Print-ready formats"
    ],
    timeline: "5-10 business days",
    software: "3ds Max, V-Ray, Corona, Photoshop"
  },
  "interior-visualization": {
    title: "3D Interior Visualization", 
    subtitle: "Detailed interior renderings and immersive animations",
    description: "Transform interior spaces into captivating visualizations that showcase design concepts, furniture layouts, and lighting schemes. Perfect for residential projects, commercial spaces, and hospitality interiors.",
    process: [
      "Space analysis and design brief",
      "3D modeling of interior elements",
      "Furniture and fixture placement",
      "Lighting design and setup",
      "Material application and texturing",
      "Final rendering and post-processing"
    ],
    deliverables: [
      "Photorealistic interior renders",
      "360° panoramic views",
      "Furniture and material variations",
      "Lighting scenario options",
      "Marketing-ready images"
    ],
    timeline: "7-12 business days", 
    software: "3ds Max, Corona, V-Ray, Photoshop"
  },
  "animation-rendering": {
    title: "3D Animation Rendering",
    subtitle: "Cinematic animations that tell your project's story",
    description: "Create compelling architectural animations that showcase your project through dynamic camera movements, revealing spaces and design features in an engaging cinematic experience.",
    process: [
      "Storyboard and animation planning",
      "Camera path design",
      "Scene setup and optimization", 
      "Animation rendering",
      "Post-production and editing",
      "Final video delivery"
    ],
    deliverables: [
      "4K resolution videos",
      "Multiple duration options",
      "Various format exports",
      "Raw footage available",
      "Sound design integration"
    ],
    timeline: "10-15 business days",
    software: "3ds Max, V-Ray, Unreal Engine, After Effects"
  },
  "unreal-engine-development": {
    title: "Unreal Engine Development",
    subtitle: "Interactive experiences and virtual reality solutions", 
    description: "Leverage the power of Unreal Engine for real-time architectural visualization, VR experiences, and interactive configurators that allow clients to explore spaces in unprecedented detail.",
    process: [
      "Project scope and requirements analysis",
      "Asset optimization for real-time rendering",
      "Interactive system development",
      "VR integration and testing",
      "User interface design",
      "Final deployment and delivery"
    ],
    deliverables: [
      "Interactive applications",
      "VR-ready experiences", 
      "Cross-platform compatibility",
      "Custom user interfaces",
      "Documentation and training"
    ],
    timeline: "15-25 business days",
    software: "Unreal Engine 5, Blender, C++, Blueprint"
  }
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.service];

  if (!service) {
    return (
      <div className="pt-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="text-blue-600 hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <Link 
        href="/services"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Services
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{service.subtitle}</p>
          <p className="text-lg leading-relaxed text-gray-700">{service.description}</p>
        </div>

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={`/images/services/${params.service}-hero.jpg`}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Process & Deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <ol className="space-y-4">
            {service.process.map((step: string, index: number) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">What You Get</h2>
          <ul className="space-y-3">
            {service.deliverables.map((deliverable: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{deliverable}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-600">Timeline:</span>
                <p className="font-medium">{service.timeline}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Software Used:</span>
                <p className="font-medium">{service.software}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your project requirements and create a custom quote tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/studio"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
          <Link 
            href="/work"
            className="inline-block border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}