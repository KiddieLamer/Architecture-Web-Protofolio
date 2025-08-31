"use client";

interface SiteSettings {
  // Site Settings
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  
  // Contact Information
  email: string;
  phone: string;
  address: string;
  
  // Social Media
  linkedin: string;
  behance: string;
  instagram: string;
  pinterest: string;
  telegram: string;
  whatsapp: string;
  
  // SEO
  metaKeywords: string;
  googleAnalytics: string;
  
  // Company Info
  companyName: string;
  companyTagline: string;
  companyDescription: string;
  yearsExperience: string;
  projectsCompleted: string;
  happyClients: string;
}

// Default settings
const defaultSettings: SiteSettings = {
  siteName: "The Room Studio",
  siteDescription: "Professional architectural visualization studio specializing in 3D rendering, interior visualization, and Unreal Engine development.",
  siteUrl: "https://room.studio",
  email: "info@room.studio",
  phone: "+48 573-896-800",
  address: "Warsaw, Poland",
  linkedin: "https://linkedin.com/company/room-studio",
  behance: "https://behance.net/room-studio",
  instagram: "https://instagram.com/room.studio",
  pinterest: "https://pinterest.com/roomstudio",
  telegram: "https://t.me/roomstudio",
  whatsapp: "https://wa.me/48573896800",
  metaKeywords: "3D visualization, architectural rendering, interior design, Unreal Engine",
  googleAnalytics: "",
  companyName: "The Room Studio",
  companyTagline: "Out of nothing came the cosmos, planets, entire worlds — each detail governed by an inner logic and harmony.",
  companyDescription: "We are an architectural visualization studio specializing in creating digital representations of spaces before they physically exist. With over 10 years of expertise and 300+ completed projects, we transform potential into reality.",
  yearsExperience: "10+",
  projectsCompleted: "300+",
  happyClients: "50+"
};

class SettingsStore {
  private settings: SiteSettings;
  private listeners: Array<() => void> = [];

  constructor() {
    // Load from localStorage if available (browser only)
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('room-studio-settings');
      this.settings = saved ? JSON.parse(saved) : defaultSettings;
    } else {
      this.settings = defaultSettings;
    }
  }

  getSettings(): SiteSettings {
    return { ...this.settings };
  }

  updateSettings(newSettings: Partial<SiteSettings>): void {
    this.settings = { ...this.settings, ...newSettings };
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('room-studio-settings', JSON.stringify(this.settings));
    }
    
    // Notify listeners
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Helper methods for specific data
  getContactInfo() {
    return {
      email: this.settings.email,
      phone: this.settings.phone,
      address: this.settings.address,
      social: {
        linkedin: this.settings.linkedin,
        behance: this.settings.behance,
        instagram: this.settings.instagram,
        pinterest: this.settings.pinterest
      },
      messaging: {
        telegram: this.settings.telegram,
        whatsapp: this.settings.whatsapp
      }
    };
  }

  getCompanyStats() {
    return {
      yearsExperience: this.settings.yearsExperience,
      projectsCompleted: this.settings.projectsCompleted,
      happyClients: this.settings.happyClients
    };
  }
}

// Create singleton instance
export const settingsStore = new SettingsStore();

// React hook for using settings
import { useState, useEffect } from 'react';

export function useSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSettings(settingsStore.getSettings());
    
    const unsubscribe = settingsStore.subscribe(() => {
      setSettings(settingsStore.getSettings());
    });

    return unsubscribe;
  }, []);

  if (!isClient) {
    return {
      settings: defaultSettings,
      updateSettings: () => {},
      contactInfo: {
        email: defaultSettings.email,
        phone: defaultSettings.phone,
        address: defaultSettings.address,
        social: {
          linkedin: defaultSettings.linkedin,
          behance: defaultSettings.behance,
          instagram: defaultSettings.instagram,
          pinterest: defaultSettings.pinterest
        },
        messaging: {
          telegram: defaultSettings.telegram,
          whatsapp: defaultSettings.whatsapp
        }
      },
      companyStats: {
        yearsExperience: defaultSettings.yearsExperience,
        projectsCompleted: defaultSettings.projectsCompleted,
        happyClients: defaultSettings.happyClients
      }
    };
  }

  return {
    settings,
    updateSettings: (newSettings: Partial<SiteSettings>) => {
      settingsStore.updateSettings(newSettings);
    },
    contactInfo: settingsStore.getContactInfo(),
    companyStats: settingsStore.getCompanyStats()
  };
}