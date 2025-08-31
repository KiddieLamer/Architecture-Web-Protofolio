import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectPageProps {
  params: {
    project: string;
  };
}

const projectData: Record<string, any> = {
  havsaga: {
    title: "Havsaga",
    category: "3D Architectural Visualization",
    description: "A modern coastal residence featuring clean lines and expansive glass facades that blur the boundaries between interior and exterior spaces.",
    images: ["/images/work/havsaga-1.jpg", "/images/work/havsaga-2.jpg", "/images/work/havsaga-3.jpg"],
    details: {
      client: "Havsaga Development",
      year: "2024",
      location: "Norway",
      software: "3ds Max, V-Ray, Photoshop"
    }
  },
  ziq: {
    title: "Ziq",
    category: "3D Interior Visualization", 
    description: "Contemporary interior design showcasing minimalist aesthetics with warm wood tones and strategic lighting solutions.",
    images: ["/images/work/ziq-1.jpg", "/images/work/ziq-2.jpg"],
    details: {
      client: "Ziq Studio",
      year: "2024",
      location: "Denmark",
      software: "3ds Max, Corona, Photoshop"
    }
  },
  capsule: {
    title: "Capsule",
    category: "3D Architectural Visualization",
    description: "Futuristic residential complex with pod-like structures that challenge traditional architectural forms.",
    images: ["/images/work/capsule-1.jpg", "/images/work/capsule-2.jpg"],
    details: {
      client: "Future Living Institute",
      year: "2024",
      location: "Sweden",
      software: "3ds Max, V-Ray, After Effects"
    }
  },
  gitter: {
    title: "Gitter",
    category: "3D Interior Visualization",
    description: "Industrial-chic interior design featuring exposed structural elements and sophisticated material combinations.",
    images: ["/images/work/gitter-1.jpg", "/images/work/gitter-2.jpg"],
    details: {
      client: "Gitter Design",
      year: "2023",
      location: "Berlin",
      software: "3ds Max, Corona, Photoshop"
    }
  },
  lagom: {
    title: "Lagom",
    category: "3D Architectural Visualization",
    description: "Scandinavian-inspired residential development embodying the Swedish concept of 'lagom' - perfect balance.",
    images: ["/images/work/lagom-1.jpg", "/images/work/lagom-2.jpg"],
    details: {
      client: "Lagom Living",
      year: "2023",
      location: "Stockholm",
      software: "3ds Max, V-Ray, Photoshop"
    }
  },
  mono: {
    title: "Mono",
    category: "3D Interior Visualization",
    description: "Monochromatic interior design study exploring texture and form through a restrained color palette.",
    images: ["/images/work/mono-1.jpg", "/images/work/mono-2.jpg"],
    details: {
      client: "Mono Architecture",
      year: "2023",
      location: "Copenhagen",
      software: "3ds Max, Corona, Photoshop"
    }
  }
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.project];

  if (!project) {
    return (
      <div className="pt-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/work" className="text-blue-600 hover:underline">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <Link 
        href="/work"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Work
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.category}</p>
          <p className="text-lg leading-relaxed text-gray-700">{project.description}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h3 className="text-xl font-bold mb-4">Project Details</h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-600">Client:</span>
              <p className="font-medium">{project.details.client}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Year:</span>
              <p className="font-medium">{project.details.year}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Location:</span>
              <p className="font-medium">{project.details.location}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Software:</span>
              <p className="font-medium">{project.details.software}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Images */}
      <div className="space-y-8 mb-16">
        {project.images.map((image: string, index: number) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}