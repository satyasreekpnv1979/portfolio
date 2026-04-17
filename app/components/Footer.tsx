"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    // Set the actual current year on the client side to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-100 py-6 sm:py-7 md:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="mb-3 sm:mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">Dr. K P N V Satya Sree</h3>
            <p className="text-xs sm:text-sm mt-1 text-gray-300">Professor & HOD of AI</p>
          </div>
          <div className="flex space-x-3 sm:space-x-4">
            <Link 
              href="mailto:satyasreekpnv@gmail.com" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link 
              href="tel:+919032798749" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <FaPhone size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/satyasreekpnv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
        <div className="mt-6 sm:mt-7 md:mt-8 border-t border-gray-700 pt-3 sm:pt-4 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} Dr. K P N V Satya Sree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 