"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plus, 
  Edit, 
  Trash2,
  Mail,
  Linkedin,
  ArrowUp,
  ArrowDown,
  MoreHorizontal
} from "lucide-react";
import { mockTeamMembers } from "@/lib/admin/mockData";

export default function TeamPage() {
  const [teamMembers] = useState(mockTeamMembers);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
          <p className="text-gray-600">Manage your team and their profiles</p>
        </div>
        <Link 
          href="/admin/team/new"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} />
          Add Member
        </Link>
      </div>

      {/* Team List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Team Members</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage team member profiles and display order
          </p>
        </div>
        
        <div className="divide-y">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="p-6 hover:bg-gray-50">
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
                  
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400 text-xl font-semibold">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{member.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        member.published 
                          ? "bg-green-100 text-green-800" 
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {member.published ? "Published" : "Hidden"}
                      </span>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        Order: {member.order}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-3">
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                        >
                          <Mail size={14} />
                          {member.email}
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                        >
                          <Linkedin size={14} />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link 
                    href={`/admin/team/${member.id}`}
                    className="p-2 hover:bg-gray-200 rounded-lg"
                  >
                    <Edit size={16} />
                  </Link>
                  <div className="relative group">
                    <button className="p-2 hover:bg-gray-200 rounded-lg">
                      <MoreHorizontal size={16} />
                    </button>
                    <div className="absolute right-0 top-8 w-40 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <button className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-red-600 w-full text-left">
                        <Trash2 size={14} />
                        Remove Member
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Total Members</h3>
          <p className="text-3xl font-bold text-blue-600">{teamMembers.length}</p>
          <p className="text-sm text-gray-500 mt-1">Team members</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Published</h3>
          <p className="text-3xl font-bold text-green-600">
            {teamMembers.filter(m => m.published).length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Visible on website</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-2">Leadership</h3>
          <p className="text-3xl font-bold text-purple-600">
            {teamMembers.filter(m => m.role.toLowerCase().includes('ceo') || m.role.toLowerCase().includes('director')).length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Leadership roles</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-lg font-semibold mb-4">Team Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/admin/team/new"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Plus size={20} className="text-gray-400" />
            <span className="text-gray-700">Add Team Member</span>
          </Link>
          <button className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <Edit size={20} className="text-gray-400" />
            <span className="text-gray-700">Bulk Edit Profiles</span>
          </button>
          <Link 
            href="/studio"
            target="_blank"
            className="flex items-center gap-3 p-4 border border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Mail size={20} className="text-gray-400" />
            <span className="text-gray-700">Preview Studio Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}