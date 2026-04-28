"use client";

import { motion } from "framer-motion";
import { useCardMotion } from "../components/useCardMotion";
import {
  FaCertificate,
  FaEdit,
  FaGavel,
  FaChalkboardTeacher,
  FaSyncAlt,
  FaSearch,
  FaUserTie,
} from "react-icons/fa";

const memberships = [
  "Member (80650743) in IEEE.",
  "Associate Member of Institution of Engineers - AM167630-2.",
  "Life Member ISTE (Indian Society for Technical Education) - LM 141642.",
  "Life Member CSI (Computer Society of India) - 2010000627.",
  "Member in Association for Computing Machinery (Web Account Client Number: 8173547).",
  "Member in International Association of Engineers (IAENG - Member No: 101341).",
  "Member in Virginia Society for Technology in Education (VSTE).",
  "Member in Computer Science Teachers Association (CSTA - membership number: 8173547).",
  "Life Membership AMIE - AM1676302.",
  "ResearcherID I-5316-2013 (Thomson Reuters): http://www.researcherid.com/rid/I-5316-2013",
  "ORCID ID: https://orcid.org/0000-0003-4567-3447",
  "Scopus Author ID: https://www.scopus.com/authid/detail.uri?authorId=57218874914",
];

const editorialBoardRoles = [
  "Editorial Member for international journals in basic sciences and applied research.",
  "Chief Editor for an international online journal in sports technology.",
  "Editorial Manager and Reviewer for Allied Academies journals and open-access publications.",
  "Editorial Member for Blue Eyes Intelligence Engineering and Sciences publications.",
];

const conferenceAndReviewerRoles = [
  "Conference Chair and Reviewer for international research association conferences.",
  "Reviewer for Mathematical Modelling of Engineering Problems (MMEP) Journal.",
  "Associate Reviewer for interdisciplinary information-focused journals.",
  "Reviewer for European Journal of Applied Engineering and Scientific Research.",
  "Reviewer for ICCIDT 2022 - International Conference on Computational Intelligence and Digital Technologies.",
  "Session Chair for DST SERB Sponsored International Conference on Data Science, Intelligent Computing and Cyber Security (29-30 December 2021).",
];

const workshopsCoordinated = [
  "Worked as a coordinator to the Student Entrepreneurship Ideathon 1.0 in Samskruthi 2023 during 2nd-3rd March 2023 by Make Skilled, Hyderabad as part of Student Startup Accelerator Program 2023.",
  "Worked as a coordinator to host the national-level short-term training program held from Dec 02nd to 22nd, 2024 on Java Full Stack with React JS & AI, in association with Brainovision Solutions India Pvt. Ltd and the All India Council for Technical Education.",
];

const refresherCourses = [
  "Attended UGC Sponsored Refresher Course on Advances in Wireless and Mobile Computing, conducted by Jawaharlal Nehru Technological University from 20th June 2005 to 09th July 2005, Hyderabad, Andhra Pradesh, India.",
];

const reviewerActivities = [
  "Reviewer for Computational Social Networks (Springer) - ORCID: 0000-0003-4567-3447.",
  "Reviewer for Inderscience submissions: IJBIDM (International Journal of Business Intelligence and Data Mining).",
];

const positionsHeld = [
  "Working as a Professor & HoD, AI Department - URCET Autonomous.",
  "Acting as a BOS Chairman to the AI departments at URCET Autonomous.",
  "Acting as a representative member to the Academic Council of URCET.",
  "Acting as a BOS member to the AI&ML department of Srinivasa Institute of Engineering and Technology, Amalapuram Autonomous.",
  "Acting as a coordinator to the Student Affairs and Discipline committee.",
  "Acting as a SPOC to APSKILL Development - APSSDC.",
  "Acting as a SPOC to EDUSKILL-AICTE Internship certificate program.",
  "Acting as a SPOC to JNTUK Infosys Spring Board program.",
];

const technicalAcademicActivities = [
  "Acting as a coordinator to the department seminars, workshops and student associations - Technozola (Convener) & Visionire (Chairman) - https://usharama.edu.in/technozola.",
  "Acting as a coordinator for AICTE R&D proposals such as STTP, ISTE and ATAL.",
  "Acting as a coordinator for Computer Society of India (CSI) - URCET.",
  "Acting as an Academic Project Coordinator - URCET since 2017.",
];

const positionsPreviouslyHeld = [
  "Acted as a Co-coordinator for URCET Fest - UR21 college fest.",
  "Acted as a Co-coordinator for NIRULOTSAV 2K17 - January 2017.",
  "Acted as a Department Placement Coordinator (T & P) - VNITSW.",
  "Acted as an ISO Department Coordinator.",
  "Acted as an Academic Students Seminar In-charge.",
  "Acted as an active member in committees like Women Grievance Cell, Discipline, Annual Stock Verification, and Research & Development Cell at VNITSW (2011-2017).",
  "Acted as a Convener for One Day Workshop on Women Entrepreneurship at VNITSW.",
  "Acted as a Coordinator for annual Technical Paper Presentation NIRULOTSAV technical feasts (2011-2017).",
  "Acted as an Academic Project Coordinator at VNITSW.",
];

const urlPattern = /(https?:\/\/[^\s)]+)|(www\.[^\s)]+)/g;

const renderTextWithLinks = (text: string) => {
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    if (!part) {
      return null;
    }

    const normalizedUrl = part.startsWith("www.") ? `https://${part}` : part;
    const isUrl = urlPattern.test(part);

    urlPattern.lastIndex = 0;

    if (isUrl) {
      return (
        <a
          key={`${part}-${index}`}
          href={normalizedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
        >
          {part}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

const ProfessionalProfile = () => {
  const motionProps = useCardMotion();
  return (
    <section
      id="professional-profile"
      className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          {...motionProps}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 px-2">
            Professional Profile
          </h2>
        </motion.div>

        <div className="md:columns-2 xl:columns-3 gap-x-4 sm:gap-x-5 md:gap-x-6 overflow-visible">
          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaCertificate className="text-blue-500" />
              Memberships
            </h3>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {memberships.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaEdit className="text-blue-500" />
              Member of Editorial Board
            </h3>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {editorialBoardRoles.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaGavel className="text-blue-500" />
              Conference Chair and Reviewer
            </h3>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {conferenceAndReviewerRoles.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaChalkboardTeacher className="text-blue-500" />
                Coordinated
            </h4>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {workshopsCoordinated.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaSyncAlt className="text-blue-500" />
              Refresher Courses
            </h4>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {refresherCourses.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaSearch className="text-blue-500" />
              Reviewer Activities
            </h4>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {reviewerActivities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaUserTie className="text-blue-500" />
              Position Holding
            </h4>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {positionsHeld.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaChalkboardTeacher className="text-blue-500" />
              Technical Academic Activities
            </h4>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {technicalAcademicActivities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...motionProps}
            className="break-inside-avoid mb-4 sm:mb-5 md:mb-6 bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-0"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 flex items-center gap-2">
              <FaUserTie className="text-blue-500" />
              Positions Held
            </h4>
            <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {positionsPreviouslyHeld.map((item, index) => (
                <li key={index} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1">•</span>
                  <span className="min-w-0 wrap-break-word mobile-summary-text">{renderTextWithLinks(item)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;






