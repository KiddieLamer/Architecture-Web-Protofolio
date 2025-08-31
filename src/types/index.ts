export interface NavigationItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  tileStyle?: 'tall' | 'wide' | 'default';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  social: {
    linkedin: string;
    behance: string;
    instagram: string;
    pinterest: string;
  };
  messaging: {
    telegram: string;
    whatsapp: string;
  };
}