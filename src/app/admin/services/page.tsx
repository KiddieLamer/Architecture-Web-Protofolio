"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plus, 
  Edit, 
  Eye, 
  Trash2,
  ArrowUp,
  ArrowDown,
  MoreHorizontal
} from "lucide-react";
import { mockServices } from "@/lib/admin/mockData";

export default function ServicesPage() {
  const [services] = useState(mockServices);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <p className="text-gray-600">Manage your service offerings</p>
        </div>
        <Link 
          href="/admin/services/new"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} />
          New Service
        </Link>
      </div>

      {/* Services List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Service List</h2>
          <p className="text-sm text-gray-600 mt-1">
            Drag to reorder services as they appear on the website
          </p>
        </div>
        
        <div className="divide-y">
          {services.map((service, index) => (
            <div key={service.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ArrowUp size={14} className="text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <ArrowDown size={14} className="text-gray-400" />
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        service.published 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {service.published ? "Published" : "Draft"}
                      </span>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        Order: {service.order}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{service.features.length} features</span>
                      <span>{service.process.length} process steps</span>
                      <span>{service.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link 
                    href={`/admin/services/${service.id}`}
                    className="p-2 hover:bg-gray-200 rounded-lg"
                  >
                    <Edit size={16} />
                  </Link>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="p-2 hover:bg-gray-200 rounded-lg"
                    target="_blank"
                  >
                    <Eye size={16} />
                  </Link>
                  <div className="relative group">
                    <button className="p-2 hover:bg-gray-200 rounded-lg">
                      <MoreHorizontal size={16} />
                    </button>
                    <div className="absolute right-0 top-8 w-40 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <button className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-red-600 w-full text-left">
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Total Services</h3>
          <p className="text-3xl font-bold text-blue-600">{services.length}</p>
          <p className="text-sm text-gray-500 mt-1">Active services</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Published</h3>
          <p className="text-3xl font-bold text-green-600">
            {services.filter(s => s.published).length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Live on website</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Draft</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {services.filter(s => !s.published).length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Needs review</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Avg Timeline</h3>
          <p className="text-3xl font-bold text-purple-600">7-12</p>
          <p className="text-sm text-gray-500 mt-1">Business days</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/admin/services/new"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Plus size={20} className="text-gray-400" />
            <span className="text-gray-700">Add New Service</span>
          </Link>
          <button className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <Edit size={20} className="text-gray-400" />
            <span className="text-gray-700">Bulk Edit Services</span>
          </button>
          <Link 
            href="/services"
            target="_blank"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Eye size={20} className="text-gray-400" />
            <span className="text-gray-700">Preview Services Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}