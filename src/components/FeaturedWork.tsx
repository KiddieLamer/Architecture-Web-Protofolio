import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: "havsaga",
    title: "Havsaga",
    category: "3D Architectural Visualization",
    imageUrl: "/images/work/havsaga.jpg",
    href: "/work/havsaga"
  },
  {
    id: "ziq",
    title: "Ziq",
    category: "3D Interior Visualization",
    imageUrl: "/images/work/ziq.jpg",
    href: "/work/ziq"
  },
  {
    id: "capsule",
    title: "Capsule",
    category: "3D Architectural Visualization",
    imageUrl: "/images/work/capsule.jpg",
    href: "/work/capsule"
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our latest architectural visualizations that bring 
          imagination to life through cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group relative overflow-hidden rounded-lg bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm opacity-80">{project.category}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/work"
          className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}