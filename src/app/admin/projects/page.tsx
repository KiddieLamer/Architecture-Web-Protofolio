"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Filter,
  Edit, 
  Eye, 
  Trash2,
  Star,
  MoreHorizontal
} from "lucide-react";
import { mockProjects } from "@/lib/admin/mockData";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "architectural-visualization", label: "Architectural Visualization" },
  { value: "interior-visualization", label: "Interior Visualization" },
  { value: "animation", label: "Animation" },
  { value: "unreal-engine", label: "Unreal Engine" }
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projects] = useState(mockProjects);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage your portfolio projects</p>
        </div>
        <Link 
          href="/admin/projects/new"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} />
          New Project
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            {/* Project Image */}
            <div className="aspect-video bg-gray-100 rounded-t-lg relative overflow-hidden">
              {project.images.length > 0 ? (
                <img 
                  src={project.images[0].url} 
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
              {project.featured && (
                <div className="absolute top-3 left-3">
                  <Star size={18} className="text-yellow-500 fill-current" />
                </div>
              )}
              <div className="absolute top-3 right-3">
                <div className="relative group">
                  <button className="p-1.5 bg-white/80 hover:bg-white rounded-full backdrop-blur-sm">
                    <MoreHorizontal size={16} />
                  </button>
                  <div className="absolute right-0 top-8 w-40 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <Link 
                      href={`/admin/projects/${project.id}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
                    >
                      <Edit size={14} />
                      Edit
                    </Link>
                    <Link 
                      href={`/work/${project.slug}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
                      target="_blank"
                    >
                      <Eye size={14} />
                      Preview
                    </Link>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-red-600 w-full text-left">
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded ${
                  project.published 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {project.published ? "Published" : "Draft"}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{project.client}</span>
                <span>{project.year}</span>
              </div>
              
              <div className="mt-3 pt-3 border-t flex items-center justify-between">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {project.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1">
                  <Link 
                    href={`/admin/projects/${project.id}`}
                    className="p-1.5 hover:bg-gray-100 rounded"
                  >
                    <Edit size={14} />
                  </Link>
                  <Link 
                    href={`/work/${project.slug}`}
                    className="p-1.5 hover:bg-gray-100 rounded"
                    target="_blank"
                  >
                    <Eye size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FolderOpen size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm || selectedCategory !== "all" 
              ? "Try adjusting your search or filters" 
              : "Get started by creating your first project"}
          </p>
          <Link 
            href="/admin/projects/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus size={18} />
            New Project
          </Link>
        </div>
      )}
    </div>
  );
}