import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "architectural-visualization",
    title: "3D Architectural Visualization",
    description: "Photorealistic exterior renderings that showcase every detail of your project from small cabins to large urban developments.",
    href: "/services/architectural-visualization",
    imageUrl: "/images/services/architectural-visualization.jpg"
  },
  {
    id: "interior-visualization", 
    title: "3D Interior Visualization",
    description: "Detailed interior space rendering with animations and video presentations covering apartments to large offices.",
    href: "/services/interior-visualization",
    imageUrl: "/images/services/interior-visualization.jpg"
  },
  {
    id: "animation-rendering",
    title: "3D Animation Rendering", 
    description: "Cinematic animations using Unreal Engine and 3ds Max to capture attention of potential investors and customers.",
    href: "/services/animation-rendering",
    imageUrl: "/images/services/animation-rendering.jpg"
  },
  {
    id: "unreal-engine-development",
    title: "Unreal Engine Development",
    description: "Advanced visualization technologies with VR solutions and interactive configurators for high-detail animations.",
    href: "/services/unreal-engine-development", 
    imageUrl: "/images/services/unreal-engine-development.jpg"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive 3D visualization services that help architects, 
            developers, and designers communicate their vision with stunning clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[16/9] relative">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-black font-semibold hover:opacity-60 transition-opacity"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/services"
            className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}