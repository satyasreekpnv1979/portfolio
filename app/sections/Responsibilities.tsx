"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import { FaUserTie } from "react-icons/fa";

const Responsibilities = () => {
  const motionProps = useCardMotion();
  const responsibilities = [
    "To provide students with a systematic understanding of the principles and technologies which underpin the discipline of computer science.",
    "To give students practical skills in central areas of computing, such that graduates will be able to find productive employment in the computing and computer-related industries.",
    "To give students sufficient experience of every stage in the software life cycle to enable them on entering employment to be able to join productively in any stage of the life cycle with a minimum of specialized training.",
    "To provide students with the skills needed to operate effectively within a professional environment, and make students aware of professional issues that might arise in such an environment.",
    "To give students the ability to assimilate new technologies quickly, as further training will be necessary throughout an individual's working life."
  ];

  return (
    <section id="responsibilities" className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Responsibilities</h2>
        </motion.div>

        {/* Core Responsibilities */}
        <motion.div
          {...motionProps}
        >
          <div className="flex items-center mb-8">
            <FaUserTie className="text-blue-400 text-2xl mr-3" />
            <h3 className="text-2xl font-bold text-white">Core Responsibilities</h3>
          </div>
          <div className="bg-gray-800/75 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <ul className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <motion.li
                  {...motionProps}
                  key={index}
                  className="flex items-start"
                >
                  <span className="text-blue-400 mr-3 mt-1.5">•</span>
                  <p className="text-gray-300 text-lg leading-relaxed">{responsibility}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Responsibilities; 


