"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SmoothLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
}

export default function SmoothLink({ 
  href, 
  children, 
  className = "", 
  target,
  onClick 
}: SmoothLinkProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    // Skip transition for external links
    if (target === "_blank" || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      window.open(href, target);
      return;
    }

    setIsTransitioning(true);

    // Add smooth fade out effect
    document.body.style.opacity = "0.7";
    document.body.style.transition = "opacity 200ms ease-out";

    // Small delay for visual feedback
    setTimeout(() => {
      router.push(href);
      
      // Reset opacity after navigation
      setTimeout(() => {
        document.body.style.opacity = "1";
        setIsTransitioning(false);
      }, 100);
    }, 150);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isTransitioning ? 'opacity-70 pointer-events-none' : ''} transition-opacity duration-150`}
      target={target}
    >
      {children}
    </a>
  );
}