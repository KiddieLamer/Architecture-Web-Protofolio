import Link from "next/link";

export default function WorkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title text-black">Work</h2>
          <Link 
            href="/work" 
            className="text-sm text-black hover:opacity-60 transition-opacity"
          >
            View all →
          </Link>
        </div>
        
        {/* Grid layout matching Room Studio */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {/* Large tile */}
          <div className="col-span-2 row-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/havsaga" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
            </Link>
          </div>
          
          {/* Small tiles */}
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/ziq" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300"></div>
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/capsule" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-300"></div>
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/gitter" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 group-hover:scale-105 transition-transform duration-300"></div>
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/lagom" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 group-hover:scale-105 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}