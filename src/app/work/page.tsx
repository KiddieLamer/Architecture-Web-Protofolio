"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Filter, Grid } from "lucide-react";
import SkeletonLoader from "@/components/SkeletonLoader";

const projects = [
  { id: "havsaga", title: "Havsaga", category: "3D architectural visualization", href: "/work/havsaga" },
  { id: "ziq", title: "Ziq", category: "3D Interior Visualization", href: "/work/ziq" },
  { id: "capsule", title: "Capsule", category: "3D architectural visualization", href: "/work/capsule" },
  { id: "gitter", title: "Gitter", category: "3D Interior Visualization", href: "/work/gitter" },
  { id: "lagom", title: "Lagom", category: "3D architectural visualization", href: "/work/lagom" },
  { id: "mono", title: "Mono", category: "3D Interior Visualization", href: "/work/mono" }
];

const getCategoryCount = (category: string) => {
  if (category === "All") return projects.length;
  return projects.filter(project => project.category === category).length;
};

const categories = [
  "All",
  "3D architectural visualization", 
  "3D Interior Visualization"
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imagesLoading, setImagesLoading] = useState<Record<string, boolean>>({});

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleImageLoad = (projectId: string) => {
    setImagesLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageStart = (projectId: string) => {
    setImagesLoading(prev => ({ ...prev, [projectId]: true }));
  };

  // Initialize all images as loading
  useEffect(() => {
    const initialLoading: Record<string, boolean> = {};
    projects.forEach(project => {
      initialLoading[project.id] = true;
    });
    setImagesLoading(initialLoading);
    
    // Simulate loading delay for demo
    projects.forEach((project, index) => {
      setTimeout(() => {
        setImagesLoading(prev => ({ ...prev, [project.id]: false }));
      }, 1500 + (index * 400)); // Staggered loading with longer delay
    });
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen animate-fade-in">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Grid size={24} className="text-black" />
            <h1 className="section-title text-black">Work</h1>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                Object.values(imagesLoading).every(loading => !loading) 
                  ? 'bg-green-500 animate-pulse' 
                  : 'bg-blue-500 animate-pulse'
              }`}></div>
              <span className="text-gray-600 transition-colors duration-300">
                {Object.values(imagesLoading).filter(loading => !loading).length} of {projects.length} 
                {Object.values(imagesLoading).every(loading => !loading) ? ' ready' : ' loading...'}
              </span>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors bg-white"
            >
              <Filter size={16} className="text-gray-600" />
              <span className="text-sm font-medium">{selectedCategory}</span>
              <ChevronDown 
                size={16} 
                className={`text-gray-600 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {dropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setDropdownOpen(false);
                      }}
                      className={`relative w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between group ${
                        selectedCategory === category ? 'bg-gray-50 text-black font-medium' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategory === category 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {getCategoryCount(category)}
                        </span>
                      </div>
                      {selectedCategory === category && (
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                      )}
                      {index < categories.length - 1 && (
                        <div className="absolute bottom-0 left-4 right-4 border-b border-gray-100" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Portfolio Grid - Matching Room Studio exact layout */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4 mb-20">
          {/* Row 1 */}
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
            <Link href="/work/havsaga" className="block w-full h-full group">
              {imagesLoading.havsaga ? (
                <SkeletonLoader className="w-full h-full rounded-sm" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Havsaga</span>
                </div>
              )}
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
            <Link href="/work/ziq" className="block w-full h-full group">
              {imagesLoading.ziq ? (
                <SkeletonLoader className="w-full h-full rounded-sm" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Ziq</span>
                </div>
              )}
            </Link>
          </div>
          
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
            <Link href="/work/capsule" className="block w-full h-full group">
              {imagesLoading.capsule ? (
                <SkeletonLoader className="w-full h-full rounded-sm" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Capsule</span>
                </div>
              )}
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
            <Link href="/work/gitter" className="block w-full h-full group">
              {imagesLoading.gitter ? (
                <SkeletonLoader className="w-full h-full rounded-sm" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Gitter</span>
                </div>
              )}
            </Link>
          </div>

          {/* Row 2 */}
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
            <Link href="/work/lagom" className="block w-full h-full group">
              {imagesLoading.lagom ? (
                <SkeletonLoader className="w-full h-full rounded-sm" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Lagom</span>
                </div>
              )}
            </Link>
          </div>
          
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
            <Link href="/work/mono" className="block w-full h-full group">
              {imagesLoading.mono ? (
                <SkeletonLoader className="w-full h-full rounded-sm" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                  <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Mono</span>
                </div>
              )}
            </Link>
          </div>
          
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <span className="text-white text-sm">More projects →</span>
              </div>
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}