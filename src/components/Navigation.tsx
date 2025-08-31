"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Company" }
];

const contactItems = [
  { href: "https://t.me/roomstudio", label: "Telegram", external: true },
  { href: "https://wa.me/48573896800", label: "WhatsApp", external: true },
  { href: "mailto:info@room.studio", label: "Email", external: true },
  { href: "tel:+48573896800", label: "Phone", external: true }
];

const socialItems = [
  { href: "https://linkedin.com/company/room-studio", label: "LinkedIn", external: true },
  { href: "https://behance.net/room-studio", label: "Behance", external: true },
  { href: "https://instagram.com/room.studio", label: "Instagram", external: true },
  { href: "https://pinterest.com/roomstudio", label: "Pinterest", external: true }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/"
              className="text-lg font-normal text-black"
            >
              The Room
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:opacity-60 transition-opacity font-normal"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="relative group">
                <span className="text-black cursor-pointer hover:opacity-60 transition-opacity font-normal">
                  Contacts
                </span>
                
                {/* Contact Dropdown */}
                <div className="absolute top-full right-0 mt-1 w-36 bg-white border border-gray-100 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-1 group-hover:translate-y-0">
                  <div className="py-3 px-2 text-xs">
                    {contactItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 px-2 text-black hover:opacity-60 transition-opacity duration-200 hover:bg-gray-50 rounded-sm"
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black text-sm font-normal"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="container pt-20">
            <div className="space-y-8">
              {/* Main Navigation */}
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-2xl font-normal text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-lg font-normal mb-4">Contacts</h3>
                <div className="space-y-2">
                  {contactItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-black hover:opacity-60 transition-opacity"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-normal mb-4">Socials</h3>
                <div className="space-y-2">
                  {socialItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-black hover:opacity-60 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}