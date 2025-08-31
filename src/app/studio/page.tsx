import Image from "next/image";
import Link from "next/link";
import { TeamMember, ContactInfo } from "@/types";

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

const contact: ContactInfo = {
  email: "info@room.studio",
  phone: "+48 573-896-800",
  social: {
    linkedin: "https://linkedin.com/company/room-studio",
    behance: "https://behance.net/room-studio", 
    instagram: "https://instagram.com/room.studio",
    pinterest: "https://pinterest.com/roomstudio"
  },
  messaging: {
    telegram: "https://t.me/roomstudio",
    whatsapp: "https://wa.me/48573896800"
  }
};

export default function StudioPage() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Room Studio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Out of nothing came the cosmos, planets, entire worlds — each detail 
            governed by an inner logic and harmony.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            We are an architectural visualization studio specializing in creating 
            digital representations of spaces before they physically exist. With over 
            10 years of expertise and 300+ completed projects, we transform potential 
            into reality.
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
          <div className="text-4xl font-bold mb-2">10+</div>
          <div className="text-gray-600">Years of Experience</div>
        </div>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl font-bold mb-2">300+</div>
          <div className="text-gray-600">Completed Projects</div>
        </div>
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <div className="text-4xl font-bold mb-2">50+</div>
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
      <div className="bg-gray-50 rounded-lg p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <Link 
                  href={`mailto:${contact.email}`}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {contact.email}
                </Link>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <Link 
                  href={`tel:${contact.phone}`}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  {contact.phone}
                </Link>
              </div>

              <div>
                <h3 className="font-bold mb-2">Quick Contact</h3>
                <div className="flex gap-4">
                  <Link 
                    href={contact.messaging.telegram}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    target="_blank"
                  >
                    Telegram
                  </Link>
                  <Link 
                    href={contact.messaging.whatsapp}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    target="_blank"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                href={contact.social.linkedin}
                className="p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors text-center"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link 
                href={contact.social.behance}
                className="p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors text-center"
                target="_blank"
              >
                Behance
              </Link>
              <Link 
                href={contact.social.instagram}
                className="p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors text-center"
                target="_blank"
              >
                Instagram
              </Link>
              <Link 
                href={contact.social.pinterest}
                className="p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors text-center"
                target="_blank"
              >
                Pinterest
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}