"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type DesktopNavLink = {
  name: string;
  href: `#${string}`;
  icon: string;
  sectionId: string;
};

type MobileNavLink = {
  name: string;
  href: string;
  icon: string;
  sectionId: string;
};

const desktopNavLinks: DesktopNavLink[] = [
  { name: "Home", href: "#home", icon: "🏠", sectionId: "home" },
  { name: "About", href: "#about", icon: "👤", sectionId: "about" },
  { name: "Experience", href: "#experience", icon: "💼", sectionId: "experience" },
  { name: "Education", href: "#education", icon: "🎓", sectionId: "education" },
  { name: "PhD Guidance", href: "#phd-guidance", icon: "📚", sectionId: "phd-guidance" },
  { name: "Responsibilities", href: "#responsibilities", icon: "🛠️", sectionId: "responsibilities" },
  { name: "Publications", href: "#publications", icon: "📄", sectionId: "publications" },
  { name: "NPTEL", href: "#nptel", icon: "🎖️", sectionId: "nptel" },
  { name: "Awards", href: "#awards", icon: "🏆", sectionId: "awards" },
  { name: "Academic Enrichment", href: "#academic-enrichment", icon: "📖", sectionId: "academic-enrichment" },
  { name: "Profile", href: "#professional-profile", icon: "🧑‍💼", sectionId: "professional-profile" },
];

const mobileNavLinks: MobileNavLink[] = [
  { name: "Home", href: "/", icon: "🏠", sectionId: "home" },
  { name: "About", href: "/about", icon: "👤", sectionId: "about" },
  { name: "Experience", href: "/experience", icon: "💼", sectionId: "experience" },
  { name: "Education", href: "/education", icon: "🎓", sectionId: "education" },
  { name: "PhD Guidance", href: "/phd-guidance", icon: "📚", sectionId: "phd-guidance" },
  { name: "Responsibilities", href: "/responsibilities", icon: "🛠️", sectionId: "responsibilities" },
  { name: "Publications", href: "/publications", icon: "📄", sectionId: "publications" },
  { name: "NPTEL", href: "/nptel", icon: "🎖️", sectionId: "nptel" },
  { name: "Awards", href: "/awards", icon: "🏆", sectionId: "awards" },
  { name: "Patents", href: "/patents", icon: "🧾", sectionId: "patents" },
  { name: "Academic Enrichment", href: "/academic-enrichment", icon: "📖", sectionId: "academic-enrichment" },
  { name: "Profile", href: "/professional-profile", icon: "🧑‍💼", sectionId: "professional-profile" },
  { name: "Contact", href: "/contact", icon: "📬", sectionId: "contact" },
];

const trackedSections = Array.from(new Set(mobileNavLinks.map((link) => link.sectionId)));

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const skipScrollRestoreRef = useRef(false);

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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const scrollY = window.scrollY;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalBodyTouchAction = document.body.style.touchAction;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const pathAtLock = window.location.pathname;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      document.body.style.touchAction = originalBodyTouchAction;

      if (!skipScrollRestoreRef.current && window.location.pathname === pathAtLock) {
        window.scrollTo(0, scrollY);
      }

      skipScrollRestoreRef.current = false;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    skipScrollRestoreRef.current = false;
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const instantScrollTo = (top: number) => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const previousHtmlScrollBehavior = htmlElement.style.scrollBehavior;
    const previousBodyScrollBehavior = bodyElement.style.scrollBehavior;

    htmlElement.style.scrollBehavior = "auto";
    bodyElement.style.scrollBehavior = "auto";
    window.scrollTo(0, top);

    window.requestAnimationFrame(() => {
      htmlElement.style.scrollBehavior = previousHtmlScrollBehavior;
      bodyElement.style.scrollBehavior = previousBodyScrollBehavior;
    });
  };

  const jumpToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      return;
    }

    const navbarHeight = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarHeight;

    instantScrollTo(offsetPosition);
  };

  const handleMobileLinkClick = (e: MouseEvent<HTMLAnchorElement>, link: MobileNavLink) => {
    e.preventDefault();
    closeMobileMenu();

    if (pathname === link.href) {
      // If already on the selected page, jump directly back to that section without long smooth animation.
      window.requestAnimationFrame(() => {
        jumpToSection(link.sectionId);
      });
      return;
    }

    skipScrollRestoreRef.current = true;
    router.push(link.href);
  };

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

      {/* Mobile Hamburger Menu Button - Shows on mobile and landscape mobile/tablets */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed bottom-20 right-6 z-50 bg-gray-900/90 backdrop-blur-sm hover:bg-gray-800/90 text-white p-3 rounded-full shadow-lg border border-gray-700/50 transition-all duration-300"
        aria-label="Toggle mobile menu"
        suppressHydrationWarning
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Mobile Navigation Tray - Shows on mobile and landscape mobile/tablets */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}>
          <div 
            className="fixed bottom-0 right-0 w-96 max-w-[95vw] h-auto max-h-[85vh] bg-gray-900/95 backdrop-blur-md rounded-tl-2xl shadow-2xl border-l border-t border-gray-700/50 overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-center p-4 border-b border-gray-700/50">
              <h3 className="text-lg font-semibold text-white">Navigation</h3>
            </div>

            {/* Mobile Menu Links */}
            <div className="p-4 space-y-2">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleMobileLinkClick(e, link);
                  }}
                  className={`flex items-center space-x-3 w-full p-3 rounded-lg text-left transition-all duration-200 ${
                    currentSection === link.sectionId
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 