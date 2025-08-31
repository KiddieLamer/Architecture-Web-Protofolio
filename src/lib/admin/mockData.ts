import { Project, Service, TeamMember, DashboardStats } from "@/types/admin";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Havsaga",
    slug: "havsaga", 
    category: "architectural-visualization",
    description: "A modern coastal residence featuring clean lines and expansive glass facades.",
    client: "Havsaga Development",
    year: 2024,
    location: "Norway",
    software: "3ds Max, V-Ray, Photoshop",
    images: [
      { id: "1", url: "/images/work/havsaga-1.jpg", alt: "Havsaga exterior", order: 1 },
      { id: "2", url: "/images/work/havsaga-2.jpg", alt: "Havsaga interior", order: 2 }
    ],
    featured: true,
    published: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-02-01")
  },
  {
    id: "2", 
    title: "Ziq",
    slug: "ziq",
    category: "interior-visualization",
    description: "Contemporary interior design showcasing minimalist aesthetics.",
    client: "Ziq Studio",
    year: 2024,
    location: "Denmark", 
    software: "3ds Max, Corona, Photoshop",
    images: [
      { id: "3", url: "/images/work/ziq-1.jpg", alt: "Ziq living room", order: 1 }
    ],
    featured: true,
    published: true,
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-15")
  }
];

export const mockServices: Service[] = [
  {
    id: "1",
    title: "3D Architectural Visualization",
    slug: "architectural-visualization",
    description: "Photorealistic exterior renderings that showcase every detail of your project.",
    shortDescription: "Focusing on exterior project rendering for architects and developers.",
    features: [
      "Photorealistic exterior renderings",
      "Aerial and ground-level perspectives", 
      "Day and night variations",
      "Landscape integration"
    ],
    process: [
      "Initial consultation",
      "3D modeling", 
      "Material setup",
      "Lighting design",
      "Rendering",
      "Post-production"
    ],
    deliverables: [
      "High-resolution images (4K+)",
      "Multiple viewing angles",
      "Raw and processed versions"
    ],
    timeline: "5-10 business days",
    software: "3ds Max, V-Ray, Corona, Photoshop",
    published: true,
    order: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-15")
  }
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Andrew Markov",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in architectural visualization.",
    image: "/images/team/andrew-markov.jpg",
    email: "andrew@room.studio",
    linkedin: "https://linkedin.com/in/andrew-markov",
    order: 1,
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  {
    id: "2",
    name: "Ivan Parzhin",
    role: "Art Director", 
    bio: "Creative director specializing in high-end visualizations.",
    image: "/images/team/ivan-parzhin.jpg",
    email: "ivan@room.studio",
    order: 2,
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  }
];

export const mockDashboardStats: DashboardStats = {
  totalProjects: 12,
  publishedProjects: 8,
  totalServices: 4,
  teamMembers: 5,
  recentProjects: mockProjects.slice(0, 3),
  recentActivities: [
    {
      id: "1",
      type: "project_created",
      description: "New project 'Havsaga' created",
      userId: "1",
      userName: "Andrew Markov",
      timestamp: new Date("2024-02-15T10:30:00")
    },
    {
      id: "2", 
      type: "project_updated",
      description: "Project 'Ziq' updated",
      userId: "2",
      userName: "Ivan Parzhin", 
      timestamp: new Date("2024-02-14T15:20:00")
    }
  ]
};