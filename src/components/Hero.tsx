"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="container text-center px-4">
        <h1 className="hero-title text-black mb-12 max-w-4xl mx-auto">
          Out of nothing came<br/>
          the cosmos, planets,<br/>
          entire worlds — each<br/>
          detail governed by an<br/>
          inner logic and<br/>
          harmony.
        </h1>
        
        <div className="mt-20">
          <Link 
            href="/studio"
            className="inline-block px-6 py-3 bg-black text-white text-sm font-light hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Video/Background element placeholder */}
      <div 
        ref={heroRef} 
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'url("/images/hero-pattern.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
}