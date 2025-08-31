"use client";

import Link from "next/link";
import { 
  FolderOpen, 
  Briefcase, 
  Users, 
  Eye,
  Plus,
  TrendingUp,
  Clock
} from "lucide-react";
import { mockDashboardStats } from "@/lib/admin/mockData";

const stats = [
  {
    name: "Total Projects",
    value: mockDashboardStats.totalProjects,
    icon: FolderOpen,
    color: "bg-blue-500",
    href: "/admin/projects"
  },
  {
    name: "Published Projects", 
    value: mockDashboardStats.publishedProjects,
    icon: Eye,
    color: "bg-green-500",
    href: "/admin/projects"
  },
  {
    name: "Services",
    value: mockDashboardStats.totalServices,
    icon: Briefcase, 
    color: "bg-purple-500",
    href: "/admin/services"
  },
  {
    name: "Team Members",
    value: mockDashboardStats.teamMembers,
    icon: Users,
    color: "bg-orange-500", 
    href: "/admin/team"
  }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/admin/projects/new"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus size={18} />
            New Project
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              href={stat.href}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Projects</h2>
              <Link 
                href="/admin/projects" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                View all →
              </Link>
            </div>
          </div>
          <div className="divide-y">
            {mockDashboardStats.recentProjects.map((project) => (
              <div key={project.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.client} • {project.year}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs rounded ${
                      project.published 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {project.published ? "Published" : "Draft"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="divide-y">
            {mockDashboardStats.recentActivities.map((activity) => (
              <div key={activity.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {activity.type === 'project_created' && <Plus size={16} />}
                    {activity.type === 'project_updated' && <TrendingUp size={16} />}
                    {activity.type === 'service_updated' && <Briefcase size={16} />}
                    {activity.type === 'team_added' && <Users size={16} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span>{activity.userName}</span>
                      <span>•</span>
                      <span>{activity.timestamp.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/admin/projects/new"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Plus size={20} className="text-gray-400" />
            <span className="text-gray-700">Add New Project</span>
          </Link>
          <Link 
            href="/admin/services"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Briefcase size={20} className="text-gray-400" />
            <span className="text-gray-700">Manage Services</span>
          </Link>
          <Link 
            href="/admin/team"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Users size={20} className="text-gray-400" />
            <span className="text-gray-700">Team Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}