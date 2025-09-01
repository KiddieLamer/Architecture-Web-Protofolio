"use client";

import { useEffect } from "react";

// Leaflet type declarations
declare global {
  interface Window {
    L: any;
  }
}
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
  Send,
  Linkedin,
  Instagram,
  Dribbble,
  ExternalLink
} from "lucide-react";
import { TeamMember, ContactInfo } from "@/types";
import { useSettings } from "@/lib/admin/settingsStore";

const team: TeamMember[] = [
  {
    name: "Andrew Markov",
    role: "CEO & Founder"
  },
  {
    name: "Ivan Parzhin", 
    role: "Art Director"
  },
  {
    name: "Sviatlana",
    role: "Senior Unreal Engine Developer"
  },
  {
    name: "Daria",
    role: "Head of Marketing"
  },
  {
    name: "Roman Burachevsky",
    role: "UX/UI Designer"
  }
];


export default function StudioPage() {
  const { settings, contactInfo, companyStats } = useSettings();

  useEffect(() => {
    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
      script.onload = () => initializeMap();
      document.head.appendChild(script);
    } else {
      initializeMap();
    }

    function initializeMap() {
      const mapElement = document.getElementById('map');
      if (mapElement && !mapElement.hasChildNodes()) {
        const map = window.L.map('map').setView([-6.2173, 106.8223], 15);

        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap &copy; CARTO',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(map);

        window.L.marker([-6.2173, 106.8223])
          .addTo(map)
          .bindPopup('Archi Site')
          .openPopup();
      }
    }

    return () => {
      // Cleanup if needed
      const mapElement = document.getElementById('map');
      if (mapElement) {
        mapElement.innerHTML = '';
      }
    };
  }, []);
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{settings.companyName}</h1>
          <p className="text-xl text-gray-600 mb-8">
            {settings.companyTagline}
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            {settings.companyDescription}
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our philosophy centers on allowing clients to see buildings before the 
            first stone is laid and explore imagined spaces through advanced 
            technological rendering.
          </p>
        </div>

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src="/images/studio/team.jpg"
            alt="The Room Studio Team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl font-bold mb-2">{companyStats.yearsExperience}</div>
          <div className="text-gray-600">Years of Experience</div>
        </div>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl font-bold mb-2">{companyStats.projectsCompleted}</div>
          <div className="text-gray-600">Completed Projects</div>
        </div>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl font-bold mb-2">{companyStats.happyClients}</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={`/images/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Architectural Visualization</h3>
            <p className="text-gray-700 mb-6">
              Creating photorealistic renderings of architectural designs that help 
              architects, developers, and clients visualize projects before construction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Digital Space Creation</h3>
            <p className="text-gray-700 mb-6">
              Developing immersive digital environments that allow exploration of 
              spaces through cutting-edge visualization technology.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-8">
        {/* Contact Info */}
        <div className="bg-gray-50 rounded-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-600">Email</h3>
                    <Link 
                      href={`mailto:${contactInfo.email}`}
                      className="text-black hover:opacity-60 transition-opacity"
                    >
                      {contactInfo.email}
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-600">Phone</h3>
                    <Link 
                      href={`tel:${contactInfo.phone}`}
                      className="text-black hover:opacity-60 transition-opacity"
                    >
                      {contactInfo.phone}
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-gray-600 mb-3">Quick Contact</h3>
                  <div className="flex gap-3">
                    <Link 
                      href={contactInfo.messaging.telegram}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      target="_blank"
                    >
                      <Send size={16} />
                      <span className="text-sm">Telegram</span>
                    </Link>
                    <Link 
                      href={contactInfo.messaging.whatsapp}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      target="_blank"
                    >
                      <MessageCircle size={16} />
                      <span className="text-sm">WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-gray-600 mb-4">Follow Us</h3>
              <div className="space-y-3">
                <Link 
                  href={contactInfo.social.linkedin}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Linkedin size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-black font-medium">LinkedIn</span>
                    <div className="text-xs text-gray-500">Connect with us</div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </Link>
                
                <Link 
                  href={contactInfo.social.behance}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Dribbble size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-black font-medium">Behance</span>
                    <div className="text-xs text-gray-500">View our portfolio</div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </Link>
                
                <Link 
                  href={contactInfo.social.instagram}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-black font-medium">Instagram</span>
                    <div className="text-xs text-gray-500">Behind the scenes</div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </Link>
                
                <Link 
                  href={contactInfo.social.pinterest}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-black font-medium">Pinterest</span>
                    <div className="text-xs text-gray-500">Design inspiration</div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section - Separate Block */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <MapPin size={18} className="text-gray-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Our Location</h2>
              <p className="text-gray-600">Sudirman Central Business District, Jakarta</p>
            </div>
          </div>
          
          <div 
            id="map" 
            className="h-[400px] w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          ></div>
        </div>
      </div>
    </div>
  );
}