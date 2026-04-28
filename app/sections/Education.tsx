"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  const motionProps = useCardMotion();
  const educations = [
    {
      id: 1,
      degree: "PhD in Computer Science & Engineering",
      institution: "Acharya Nagarjuna University",
      location: "Andhra Pradesh, India",
      period: "Feb 2016",
      description: "Part-time PhD in Computer Science & Engineering",
    },
    {
      id: 2,
      degree: "M.E in Computer Science",
      institution: "Janardhan Rai Nagar Rajasthan Vidyapeeth (Deemed University)",
      location: "Rajasthan, India",
      period: "June 2003 - May 2005",
      description: "Master of Engineering in Computer Science (Affiliated by AICTE)",
    },
    {
      id: 3,
      degree: "B Level Master's Degree in Computer Applications",
      institution: "DOEACC Society",
      location: "New Delhi, India",
      period: "July 1998 - July 2001",
      description: "Master's Degree in Computer Applications - Computer Science (Affiliated by AICTE)",
    },
    {
      id: 4,
      degree: "Diploma in Computer Engineering",
      institution: "State Board Of Technical Education",
      location: "Andhra Pradesh, India",
      period: "March 1994 - March 1997",
      description: "3-year Polytechnic Diploma in Computer Science",
    },
  ];

  return (
    <section id="education" className="pt-24 pb-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-4">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu) => (
            <motion.div
              key={`education-${edu.id}`}
              {...motionProps}
              className="bg-white/75 backdrop-blur-sm p-6 rounded-3xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <div className="ml-9">
                <p className="text-gray-700 mb-2 font-medium">{edu.institution}</p>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-gray-500 text-sm mr-2" />
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                </div>
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-gray-500 text-sm mr-2" />
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 


