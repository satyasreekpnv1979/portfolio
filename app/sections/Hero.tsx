"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import DotPattern from "../components/DotPattern";

const Hero = () => {
  const motionProps = useCardMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero-section relative pt-8 sm:pt-12 md:pt-40 lg:pt-52 pb-6 sm:pb-8 min-h-screen flex flex-col justify-center md:justify-between">
      <DotPattern isDark={true} />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          <motion.div 
            {...motionProps}
            className="md:w-1/2 text-center md:text-left"
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              Dr. K P N V <span className="text-blue-400">Satya Sree</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mb-6 sm:mb-7 md:mb-8">
              Professor & HOD of AI
            </h2>
            <p className="text-gray-300 mb-8 sm:mb-9 md:mb-10 text-base sm:text-lg md:text-xl leading-relaxed px-2 md:px-0">
              With over 24 years of experience in teaching Computer Science & Engineering subjects,
              specializing in Artificial Intelligence, Machine Learning, and Data Mining.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Link 
                href="#contact" 
                className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg font-medium rounded-full text-white overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition duration-300 ease-in-out"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-700 transition duration-300 ease-in-out"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Contact Me
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            {...motionProps}
            className="md:w-1/2 flex justify-center mt-6 sm:mt-7 md:mt-8 lg:mt-0"
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
              {!imageError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src="/profile-photo.jpg?v=static-105"
                  alt="Dr. K P N V Satya Sree - Professor & HOD of AI" 
                  className="w-full h-full rounded-full"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 105%'
                  }}
                  onError={() => {
                    console.log('Image failed to load');
                    setImageError(true);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully');
                    setImageError(false);
                  }}
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                  DS
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-auto mb-2 justify-center hidden md:flex">
        <motion.a 
          {...motionProps}
          href="#about"
          className="text-gray-300 hover:text-blue-400 transition-colors"
          animate={{ opacity: 1, y: 0 }}
          aria-label="Scroll to About section"
        >
          <FaArrowDown className="animate-bounce text-2xl" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 


