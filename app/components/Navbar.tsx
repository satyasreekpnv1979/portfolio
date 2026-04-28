"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type DesktopNavLink = {
  name: string;
  href: `#${string}`;
  icon: string;
  sectionId: string;
};

const desktopNavLinks: DesktopNavLink[] = [
  { name: "Home", href: "#home", icon: "🏠", sectionId: "home" },
  { name: "About", href: "#about", icon: "👤", sectionId: "about" },
  { name: "Experience", href: "#experience", icon: "💼", sectionId: "experience" },
  { name: "Education", href: "#education", icon: "🎓", sectionId: "education" },
  { name: "PhD Guidance", href: "#phd-guidance", icon: "📚", sectionId: "phd-guidance" },
  { name: "Academic Enrichment", href: "#academic-enrichment", icon: "📖", sectionId: "academic-enrichment" },
  { name: "Patents", href: "#patents", icon: "🧾", sectionId: "patents" },
  { name: "Profile", href: "#professional-profile", icon: "🧑‍💼", sectionId: "professional-profile" },
  { name: "Publications", href: "#publications", icon: "📄", sectionId: "publications" },
  { name: "NPTEL", href: "#nptel", icon: "🎖️", sectionId: "nptel" },
  { name: "Awards", href: "#awards", icon: "🏆", sectionId: "awards" },
];

const trackedSections = [...desktopNavLinks.map((link) => link.sectionId), "contact"];

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of trackedSections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile and small tablets */}
      <nav className="hidden lg:block fixed top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 w-[96%] sm:w-[98%] max-w-380 z-50 transition-all duration-300">
        <div className="bg-gray-900/85 backdrop-blur-sm rounded-2xl sm:rounded-3xl md:rounded-full shadow-lg border border-gray-800/50">
          <div className="max-w-380 mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
            <div className="flex items-center h-12 sm:h-14 md:h-16">
              <div className="shrink-0 mr-1 lg:mr-2 xl:mr-3">
                <Link 
                  href="#home" 
                  className={`text-sm sm:text-base lg:text-lg font-bold text-white truncate transition-all duration-300 ${
                    currentSection === "home" ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Dr. K P N V Satya Sree
                </Link>
              </div>

              <div className="flex grow min-w-0 pl-2">
                <div className="flex items-center justify-between w-full min-w-0 gap-2 lg:gap-2">
                  {desktopNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-2 py-1.5 rounded-full text-sm xl:text-[1.02rem] font-medium text-white hover:text-blue-400 hover:bg-gray-800/50 transition-all whitespace-nowrap ${
                        currentSection === link.sectionId ? "bg-gray-800/50 text-blue-400" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 