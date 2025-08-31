"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  { id: "havsaga", title: "Havsaga", category: "3D architectural visualization", href: "/work/havsaga" },
  { id: "ziq", title: "Ziq", category: "3D Interior Visualization", href: "/work/ziq" },
  { id: "capsule", title: "Capsule", category: "3D architectural visualization", href: "/work/capsule" },
  { id: "gitter", title: "Gitter", category: "3D Interior Visualization", href: "/work/gitter" },
  { id: "lagom", title: "Lagom", category: "3D architectural visualization", href: "/work/lagom" },
  { id: "mono", title: "Mono", category: "3D Interior Visualization", href: "/work/mono" }
];

const categories = [
  "All",
  "3D architectural visualization", 
  "3D Interior Visualization"
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-title text-black">Work</h1>
          
          {/* Category Filter */}
          <div className="relative">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-sm bg-transparent border-none outline-none cursor-pointer hover:opacity-60 transition-opacity"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Portfolio Grid - Matching Room Studio exact layout */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4 mb-20">
          {/* Row 1 */}
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/havsaga" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Havsaga</span>
              </div>
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/ziq" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Ziq</span>
              </div>
            </Link>
          </div>
          
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/capsule" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Capsule</span>
              </div>
            </Link>
          </div>
          
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/gitter" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Gitter</span>
              </div>
            </Link>
          </div>

          {/* Row 2 */}
          <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/lagom" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Lagom</span>
              </div>
            </Link>
          </div>
          
          <div className="col-span-2 bg-gray-100 aspect-square rounded-sm overflow-hidden">
            <Link href="/work/mono" className="block w-full h-full group">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:scale-105 transition-transform duration-300 flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">Mono</span>
              </div>
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