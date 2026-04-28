"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import { FaFileSignature } from "react-icons/fa";

const patents = [
  {
    id: 1,
    title: "Semantic web services composition using multilevel workflow orchestration and method thereof",
    applicationNo: "20194104886",
    publicationDate: "13/12/2019",
    filingDate: "28/11/2019",
  },
  {
    id: 2,
    title: "Secured data transmission and storage method for cloud based network",
    applicationNo: "201941053462",
    publicationDate: "03/01/2020",
    filingDate: "23/12/2019",
  },
  {
    id: 3,
    title: "Conventional Application",
    applicationNo: "201944022782",
    publicationDate: "08/06/2019",
    filingDate: "04/12/2020",
  },
  {
    id: 4,
    title: "Instrument Used For Detection Of Diabetic Neuropathy",
    applicationNo: "400398-001",
    publicationDate: "12/01/2024",
    filingDate: "21/11/2023",
  },
  {
    id: 5,
    title: "IoT based Sun Shade Solar Umbrella",
    applicationNo: "411799-001",
    publicationDate: "07/06/2024",
    filingDate: "28/03/2024",
  },
];

const Patents = () => {
  const motionProps = useCardMotion();
  return (
    <section
      id="patents"
      className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 px-2">
            Patents
          </h2>
        </motion.div>

        <motion.div
          {...motionProps}
          className="hidden md:block bg-white/75 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm lg:text-base text-black">
              <thead className="bg-gray-200/70">
                <tr>
                  <th className="px-4 lg:px-6 py-4 font-semibold w-16 text-black">S. No</th>
                  <th className="px-4 lg:px-6 py-4 font-semibold min-w-104 text-black">Title</th>
                  <th className="px-4 lg:px-6 py-4 font-semibold whitespace-nowrap text-black">Application No</th>
                  <th className="px-4 lg:px-6 py-4 font-semibold whitespace-nowrap text-black">Date of Publication</th>
                  <th className="px-4 lg:px-6 py-4 font-semibold whitespace-nowrap text-black">Date of Filing</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((patent, index) => (
                  <tr
                    key={patent.id}
                    className={index % 2 === 0 ? "bg-white/70" : "bg-gray-50/80"}
                  >
                    <td className="px-4 lg:px-6 py-4 font-medium text-black">{patent.id}</td>
                    <td className="px-4 lg:px-6 py-4 leading-relaxed text-black">{patent.title}</td>
                    <td className="px-4 lg:px-6 py-4 font-semibold text-black">{patent.applicationNo}</td>
                    <td className="px-4 lg:px-6 py-4 font-semibold text-black">{patent.publicationDate}</td>
                    <td className="px-4 lg:px-6 py-4 font-semibold text-black">{patent.filingDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="md:hidden space-y-4">
          {patents.map((patent) => (
            <motion.div
              {...motionProps}
              key={patent.id}
              className="bg-white/75 backdrop-blur-sm p-4 rounded-xl shadow-lg mx-2"
            >
              <div className="flex flex-nowrap items-start gap-3 mb-3">
                <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  <FaFileSignature className="text-sm" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Patent #{patent.id}</p>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug">{patent.title}</h3>
                </div>
              </div>
              <div className="space-y-2 text-sm text-black">
                <p className="rounded-lg bg-blue-50/80 border border-blue-100 px-3 py-2">
                  <span className="font-semibold text-black">Application No:</span>{" "}
                  <span className="font-semibold text-black">{patent.applicationNo}</span>
                </p>
                <p className="rounded-lg bg-blue-50/80 border border-blue-100 px-3 py-2">
                  <span className="font-semibold text-black">Date of Publication:</span>{" "}
                  <span className="font-medium text-black">{patent.publicationDate}</span>
                </p>
                <p className="rounded-lg bg-blue-50/80 border border-blue-100 px-3 py-2">
                  <span className="font-semibold text-black">Date of Filing:</span>{" "}
                  <span className="font-medium text-black">{patent.filingDate}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;


