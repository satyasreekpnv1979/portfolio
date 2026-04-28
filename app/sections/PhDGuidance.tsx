"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import {
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";

type ScholarDetails = {
  name: string;
  position: string;
  university: string;
  guidePosition: string;
};

const PhDGuidance = () => {
  const motionProps = useCardMotion();
  const phd = {
    totalGuiding: "2",
    period: "2016 to 2023",
    completedScholar: {
      name: "V.Sai Priya",
      position: "Asst Professor, Srinivasa Engg College, Amalapuram",
      university: "Annamalai University",
      guidePosition: "Co-Guide",
    },
    ongoingScholar: {
      name: "Aketi Vijaya Lakshmi",
      position: "Professor, Aditya Degree College, Kakinada",
      university: "JNTU Kakinada",
      guidePosition: "Guide",
    },
    monograms: [
      "Classification of breast cancer data using enhanced supervised ML in LAMBERT",
      "Enhanced Secure communication AODV routing protocol in MANETS",
    ],
  };

  const scholars: Array<{
    id: number;
    title: string;
    accent: string;
    badgeClass: string;
    icon: "completed" | "ongoing";
    details: ScholarDetails;
  }> = [
    {
      id: 1,
      title: "Completed",
      accent: "bg-gray-50 border border-gray-200",
      badgeClass: "bg-blue-100 text-blue-700 border border-blue-200",
      icon: "completed",
      details: phd.completedScholar,
    },
    {
      id: 2,
      title: "On-going",
      accent: "bg-gray-50 border border-gray-200",
      badgeClass: "bg-sky-100 text-blue-700 border border-sky-200",
      icon: "ongoing",
      details: phd.ongoingScholar,
    },
  ];

  const getScholarIcon = (icon: "completed" | "ongoing") => {
    if (icon === "completed") {
      return <FaCheckCircle className="text-blue-500 text-lg" />;
    }

    return <FaClock className="text-blue-400 text-lg" />;
  };

  return (
    <section id="phd-guidance" className="pt-24 pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">PhD Guidance</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            {...motionProps}
            className="lg:col-span-7"
          >
            <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 h-full">
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center shadow-md">
                      <FaGraduationCap className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">PhD Scholars</h3>
                      <p className="text-sm text-gray-600">Mentorship Timeline</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    Since {phd.period.split(" ")[0]}
                  </span>
                </div>

                <div className="relative pl-0 md:pl-6 lg:pl-8">
                  <div className="hidden md:block absolute left-2.25 lg:left-2.75 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                  {scholars.map((scholar) => (
                    <motion.div
                      {...motionProps}
                      key={`scholar-${scholar.id}`}
                      className="relative mb-6 last:mb-0"
                    >
                      <div className="hidden md:block absolute -left-6 lg:-left-8 top-4 w-5 h-5 rounded-full bg-white border-4 border-blue-400"></div>

                      <div className={`${scholar.accent} rounded-2xl p-5 sm:p-6 shadow-sm`}>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <h4 className="text-lg font-semibold text-gray-800">{scholar.title}</h4>
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${scholar.badgeClass}`}>
                            {scholar.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          {getScholarIcon(scholar.icon)}
                          <p className="text-sm text-gray-600">Scholar Details</p>
                        </div>

                        <div className="space-y-2 text-gray-700">
                          <p className="rounded-xl bg-white border border-gray-200 px-3 py-2"><span className="font-semibold">Name:</span> {scholar.details.name}</p>
                          <p className="rounded-xl bg-white border border-gray-200 px-3 py-2"><span className="font-semibold">Position:</span> {scholar.details.position}</p>
                          <p className="rounded-xl bg-white border border-gray-200 px-3 py-2"><span className="font-semibold">University:</span> {scholar.details.university}</p>
                          <p className="rounded-xl bg-white border border-gray-200 px-3 py-2"><span className="font-semibold">Guide Position:</span> {scholar.details.guidePosition}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
          </motion.div>

          <motion.div
            {...motionProps}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100">
                  <FaBookOpen className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Monograms</h3>
                  <p className="text-sm text-gray-600">Research Focus Areas</p>
                </div>
              </div>

              <ul className="space-y-4">
                {phd.monograms.map((monogram, index) => (
                  <motion.li
                    {...motionProps}
                    key={`${monogram}-${index}`}
                    className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3"
                  >
                    <span className="min-w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-semibold flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-0.5">{monogram}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-blue-500 text-xl" />
                <h4 className="text-xl font-semibold text-gray-800">Guidance Approach</h4>
              </div>
              <ul className="space-y-2 list-disc pl-5 marker:text-blue-500 text-gray-700 leading-relaxed">
                <li>Structured supervision with clear milestones and periodic progress reviews.</li>
                <li>Strong focus on publication quality and problem relevance.</li>
                <li>Practical and impact-oriented mentoring across all stages of research.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhDGuidance; 


