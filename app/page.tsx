"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import PhDGuidance from "./sections/PhDGuidance";
import Responsibilities from "./sections/Responsibilities";
import Publications from "./sections/Publications";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Nptel from "./sections/Nptel";
import DotPattern from "./components/DotPattern";
import AcademicEnrichment from "./sections/AcademicEnrichment";
import Patents from "./sections/Patents";
import ProfessionalProfile from "./sections/ProfessionalProfile";
import ScrollBehavior from "./components/ScrollBehavior";

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling to the HTML element
    document.documentElement.classList.add("scroll-smooth");
    
    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Add offset for the fixed navbar
            const navbarHeight = 80; // Increased navbar height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - navbarHeight;
            
            // Use smoother scrolling with polyfill support for better mobile experience
            try {
              // Try the modern scrollTo with smooth behavior
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
                // Add these properties for iOS momentum scrolling
                ...(('ontouchstart' in window) ? { 
                  passive: true,
                } : {})
              });
            } catch {
              // Fallback for older browsers
              window.scrollTo(0, offsetPosition);
            }
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Component to handle scroll behavior client-side */}
      <ScrollBehavior />
      {/* Navbar is fixed and always black */}
      <Navbar />
      
      {/* Hero section with dark background */}
      <div className="relative bg-gray-900 text-gray-100 mb-3 md:mb-0">
        <Hero />
      </div>
      
      {/* Alternating section backgrounds with increased spacing */}
      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <About />
      </div>
      
      <div className="relative bg-gray-900 mb-3 md:mb-0">
        <DotPattern isDark={true} />
        <Experience />
      </div>
      
      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <Education />
      </div>
      
      <div className="relative bg-gray-900 mb-3 md:mb-0">
        <DotPattern isDark={true} />
        <PhDGuidance />
      </div>

      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <AcademicEnrichment />
      </div>
      
      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <Responsibilities />
      </div>
      
      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <Patents />
      </div>
      
      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <ProfessionalProfile />
      </div>

      <div className="relative bg-gray-900 mb-3 md:mb-0">
        <DotPattern isDark={true} />
        <Publications />
      </div>
      
      <div className="relative bg-gray-100 mb-3 md:mb-0">
        <DotPattern isDark={false} />
        <Nptel />
      </div>
      
      <div className="relative bg-gray-900 mb-3 md:mb-0">
        <DotPattern isDark={true} />
        <Awards />
      </div>
      
      <div className="bg-gray-100 mb-3 md:mb-0">
        <Contact />
      </div>
      
      <div className="bg-gray-900">
        <Footer />
      </div>
    </main>
  );
}
