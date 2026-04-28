"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const motionProps = useCardMotion();
  const experiences = [
    {
      id: 1,
      period: "Sep 2017 - Present",
      title: "Professor",
      company: "Usha Rama College of Engineering and Technology",
      location: "Gannavaram, India",
    },
    {
      id: 2,
      period: "August 2011 - Sep 2017",
      title: "Associate Professor",
      company: "Vignan's Nirula Institute of Technology and Science for Women",
      location: "Guntur, India",
    },
    {
      id: 3,
      period: "December 2009 - July 2011",
      title: "Associate Professor",
      company: "Nalanda Institute of Engineering & Technology",
      location: "Guntur, India",
    },
    {
      id: 4,
      period: "July 2007 - Nov 2008",
      title: "Associate Professor",
      company: "ASR College of Engineering",
      location: "Tanuku, India",
    },
    {
      id: 5,
      period: "Aug 2002 - June 2007",
      title: "Associate Professor",
      company: "Godavari Institute of Engineering & Technology",
      location: "Rajahmundry, India",
    },
    {
      id: 6,
      period: "June 2001 - July 2002",
      title: "Lecturer",
      company: "ASR College of Engineering",
      location: "Kovvur, India",
    },
  ];

  return (
    <section id="experience" className="pt-24 pb-16 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile and tablet */}
          <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                {...motionProps}
                key={exp.id}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot - hidden on mobile and tablet */}
                  <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-800/75 backdrop-blur-sm p-6 rounded-3xl shadow-md">
                      <div className="flex items-center mb-2">
                        <FaBriefcase className="text-blue-400 text-xl mr-3" />
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaBuilding className="text-gray-400 text-lg mr-3" />
                        <p className="text-gray-300">{exp.company}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-gray-400 text-lg mr-3" />
                        <p className="text-gray-400">{exp.location}</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <FaCalendarAlt className="text-gray-400 text-lg mr-3" />
                        <p className="text-gray-400">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Single description block for all positions */}
        <motion.div
          {...motionProps}
          className="mt-16"
        >
          <div className="bg-gray-800/75 backdrop-blur-sm p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Professional Journey Overview</h3>
            <ul className="text-gray-300 leading-relaxed space-y-3 list-disc pl-6 marker:text-blue-400">
              <li>
                Throughout my 24+ years of academic career, I have been dedicated to excellence in teaching Computer Science & Engineering subjects,
                with a special focus on Artificial Intelligence, Machine Learning, and emerging technologies.
              </li>
              <li>
                My journey began as a Lecturer and progressively advanced to Professor and Head of Department positions across reputed institutions.
              </li>
              <li>
                Major contributions include curriculum development, research supervision, publication support, and strengthening industry-academia collaboration.
              </li>
              <li>
                I consistently integrate emerging topics such as Deep Learning, Computer Vision, Cyber Security, Blockchain, and IoT into the curriculum
                to prepare students for evolving technology demands.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 


