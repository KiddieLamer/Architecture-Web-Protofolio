export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'architectural-visualization' | 'interior-visualization' | 'animation' | 'unreal-engine';
  description: string;
  client: string;
  year: number;
  location: string;
  software: string;
  images: ProjectImage[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  features: string[];
  process: string[];
  deliverables: string[];
  timeline: string;
  software: string;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
  order: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  createdAt: Date;
  lastLogin?: Date;
}

export interface DashboardStats {
  totalProjects: number;
  publishedProjects: number;
  totalServices: number;
  teamMembers: number;
  recentProjects: Project[];
  recentActivities: Activity[];
}

export interface Activity {
  id: string;
  type: 'project_created' | 'project_updated' | 'service_updated' | 'team_added';
  description: string;
  userId: string;
  userName: string;
  timestamp: Date;
}