"use client";

import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

const AcademicEnrichment = () => {
  const workshops = {
    coordinated: [
      {
        id: 1,
        title: "Machine Learning and IoT",
        description: "Faculty Development Program (FDP) at URCET in Association with E&ICT Academy by NIT, Warangal",
        date: "19th November 2017 to 24th November 2017",
        location: "Gannavaram, Andhra Pradesh, INDIA"
      },
      {
        id: 2,
        title: "Python programming with Industry Perspective",
        description: "Short Term Course conducted by E & ICT Academy, Indian Institute of Technology, Jaipur",
        date: "December 02-06, 2019"
      },
      {
        id: 3,
        title: "Advanced Emerging Trends in CSE&IT",
        description: "AICTE – ISTE online Induction/Refresher Programs in 3 Slots with Rs 3,00,000/- grant",
        slots: [
          "SLOT – 1: Jan 18th to Jan 23rd 2021 (one week)",
          "SLOT – II: Feb 23rd to Mar 1st 2021 (one week)",
          "SLOT – III: Mar 23rd to Mar 28th 2021 (one week)"
        ]
      },
      {
        id: 4,
        title: "Nanosensors and Devices",
        description: "Short Term Course (Online Mode) Organized by Applied Science Department, NITTTR Chandigarh",
        date: "22nd to 26th Aug 2022"
      }
    ],
    aicteProjects: [
      {
        id: 1,
        title: "SPICES Grant for Technozola",
        amount: "1,00,000/-",
        description: "Received grant from AICTE - Scheme for Promoting Interests, Creativity and Ethics among Students for student Association",
        date: "Jul 2021"
      },
      {
        id: 2,
        title: "MODROBS Grant",
        amount: "7,27,667/-",
        description: "Received grant in aid from AICTE under Modernization and Removal of Obsolescence scheme",
        period: "May 2020 to Nov 2022"
      }
    ],
    attended: {
      sttp: [
        {
          id: 1,
          title: "Python Programming with Industry Perspective",
          organizer: "E & ICT Academy, Indian Institute of Technology, Jaipur",
          date: "December 02-06, 2019"
        },
        {
          id: 2,
          title: "Introduction to Programming: A Pedagogical Approach",
          organizer: "E & ICT Academy, Indian Institute of Technology, Kanpur",
          date: "June 17-22, 2019"
        },
        {
          id: 3,
          title: "Block Chain and its applications",
          organizer: "E & ICT Academy, Indian Institute of Technology, Jaipur",
          date: "10-15, 2020"
        },
        {
          id: 4,
          title: "Linux Applications in Engineering Education",
          organizer: "NITTTR Chandighar",
          date: "27-01 MAY, 2020"
        },
        {
          id: 5,
          title: "NN and CNN",
          organizer: "NITTTR Chandighar",
          date: "11-16 MAY 2020"
        },
        {
          id: 6,
          title: "Quantam Computing and Machine learning",
          organizer: "JNTUA",
          date: "30-11-2020 to 05-12-2020"
        },
        {
          id: 7,
          title: "Large Language Models in Artificial Intelligence",
          organizer: "Andhra Pradesh Information Technology Academy & Blackbuck Engineers Pvt Ltd",
          date: "04 Oct 2023 - 07 Oct 2023"
        },
        {
          id: 8,
          title: "Research Proposal Writing and AI Tools in Education and Research",
          organizer: "ISTE Sponsored Programme at Department of Artificial Intelligence and Data Science, P. R. Pote Patil College of Engineering & Management, Amravati",
          date: "06/05/2024 to 11/05/2024"
        }
      ],
      fdp: [
        {
          id: 1,
          title: "Including Universal Human values in Technical Education",
          type: "AICTE- Universal Human Value",
          date: "14th - 18th, DEC 2020"
        },
        {
          id: 2,
          title: "AICTE-UHV REFRESHER Part 1",
          date: "7th - 11th FEB 2022"
        },
        {
          id: 3,
          title: "AICTE-UHV II REFRESHER Part 2",
          date: "15th - 20th May 2023"
        }
      ],
      atal: [
        {
          id: 1,
          title: "Deep Learning Using Convolutional Networks and Sequence Models",
          organizer: "Rao Bahadur Y.Mahabaleswarappa Engineering College",
          date: "Nov 23rd – 27th 2020"
        },
        {
          id: 2,
          title: "Artificial Intelligence",
          organizer: "Gandhi Institute For Technology (GIFT)",
          date: "Jun 21st – 25th 2021"
        },
        {
          id: 3,
          title: "AI – Natural Language Processing",
          organizer: "University College Of Engineering Kakinada (A)",
          date: "Nov 29th – Dec 3rd 2021"
        },
        {
          id: 4,
          title: "Data Analysis Tools & Techniques for Text and Speech Analytics",
          organizer: "LAKIREDDY BALI REDDY COLLEGE OF ENGINEERING",
          date: "Nov 14th – 25th 2022"
        },
        {
          id: 5,
          title: "CNN and GAN",
          organizer: "Sir C R Reddy college of Engineering, Eluru",
          date: "Dec 11th – 16th 2023"
        },
        {
          id: 6,
          title: "Sustainable Practices in Energy and Environment Sector",
          organizer: "D Y Patil International University",
          date: "Dec 16th – 21st 2024"
        },
        {
          id: 7,
          title: "Advanced Computing Redefined: Exploring AI, Quantum Computing and Cyber Security Synergies",
          organizer: "SHREEYASH PRATISHTHAN&apos;S, SHREEYASH COLLEGE OF ENGINEERING & TECHNOLOGY",
          date: "Nov 25th – 30th 2024"
        },
        {
          id: 8,
          title: "Block Chain-Enabled IoT Networks with AI-Driven Automation",
          organizer: "Velagapudi Ramakrishna Siddhartha Engineering College",
          date: "Dec 2nd – 7th 2024"
        },
        {
          id: 9,
          title: "AI and Quantum Computing: The Future of Intelligent System",
          organizer: "BHARAT INSTITUTE OF ENGINEERING AND TECHNOLOGY",
          date: "Dec 9th - 14th 2024"
        },
        {
          id: 10,
          title: "AI in Quantum, Photonics, Nanotechnology and Intelligent Signal Processing",
          organizer: "Vijaya Institute of Technology For Women",
          date: "Dec 1st - 06th 2025"
        },
        {
          id: 11,
          title: "Quantum Technology - A Transformative Approach to Next-Generation Computing",
          organizer: "Sindhudurg Saiksan Prasarak Mandal&apos;s College of Engineering",
          date: "Dec 8th - 13th 2025"
        },
        {
          id: 12,
          title: "Quantum Computing & Cyber Security",
          organizer: "S-Vysya Deemed to be University (School of Advanced Studies)",
          date: "Dec 15th - 20th 2025"
        },
        {
          id: 13,
          title: "Emerging Research Trends in SuperComputing AI and Data Science",
          organizer: "Amity University Rajasthan",
          date: "Dec 24th - 30th 2025"
        },
        {
          id: 14,
          title: "Quantum Computing (QT - 00 & 01 Series)",
          organizer: "E&ICT and APSCHE",
          date: "40 hours"
        },
        {
          id: 15,
          title: "Foundations of Quantum Computing and Applications (QT - 05)",
          organizer: "E&ICT and APSCHE",
          date: "40 hours"
        }
      ]
    }
  };

  return (
    <section id="academic-enrichment" className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900 px-2">Academic Enrichment</h2>
        </motion.div>

        {/* Coordinated Workshops Section */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-800 flex items-center px-2"
          >
            <FaChalkboardTeacher className="text-blue-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <span className="leading-tight">Coordinated Funded Workshop/FDP&apos;s/STTP&apos;s</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {workshops.coordinated.map((workshop) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-2 sm:mx-0"
              >
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">{workshop.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">{workshop.description}</p>
                {workshop.slots ? (
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 ml-2 sm:ml-4 space-y-1">
                    {workshop.slots.map((slot, index) => (
                      <li key={index} className="leading-relaxed">{slot}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-sm sm:text-base text-gray-500">{workshop.date}</p>
                    {workshop.location && (
                      <p className="text-sm sm:text-base text-gray-500 italic mt-1">{workshop.location}</p>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* AICTE Funded Projects Section */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-800 flex items-center px-2"
          >
            <FaProjectDiagram className="text-blue-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <span className="leading-tight">AICTE Funded Projects</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {workshops.aicteProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-2 sm:mx-0"
              >
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">{project.title}</h4>
                <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">₹{project.amount}</p>
                <p className="text-sm sm:text-base text-gray-600 mb-2 leading-relaxed">{project.description}</p>
                <p className="text-sm sm:text-base text-gray-500">{project.date || project.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workshops Attended Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-800 flex items-center px-2"
          >
            <FaGraduationCap className="text-blue-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <span className="leading-tight">Workshops Attended</span>
          </motion.h3>

          {/* STTP Section */}
          <div className="mb-6 sm:mb-7 md:mb-8">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-gray-700 px-2">Short Term Training Programs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {workshops.attended.sttp.map((sttp) => (
                <motion.div
                  key={sttp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-2 sm:mx-0"
                >
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">{sttp.title}</h5>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 leading-relaxed">{sttp.organizer}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500">{sttp.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FDP Section */}
          <div className="mb-6 sm:mb-7 md:mb-8">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-gray-700 px-2">Faculty Development Programmes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {workshops.attended.fdp.map((fdp) => (
                <motion.div
                  key={fdp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-2 sm:mx-0"
                >
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">{fdp.title}</h5>
                  {fdp.type && <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 leading-relaxed">{fdp.type}</p>}
                  <p className="text-xs sm:text-sm md:text-base text-gray-500">{fdp.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ATAL FDP Section */}
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-gray-700 px-2">ATAL FDPs</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {workshops.attended.atal.map((atal) => (
                <motion.div
                  key={atal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/75 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg mx-2 sm:mx-0"
                >
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">{atal.title}</h5>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 leading-relaxed">{atal.organizer}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500">{atal.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicEnrichment; 