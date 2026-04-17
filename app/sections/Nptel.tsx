import { motion } from "framer-motion";
import { FaCertificate, FaMedal, FaStar } from "react-icons/fa";

const Nptel = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      duration: "12 weeks",
      date: "Jan-Apr 2022",
      grade: "Elite Silver"
    },
    {
      id: 2,
      title: "Big Data Computing",
      duration: "08 weeks",
      date: "October 2021",
      grade: "Elite"
    },
    {
      id: 3,
      title: "Cloud computing",
      duration: "08 weeks",
      date: "October 2021",
      grade: "Elite"
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      duration: "08 weeks",
      date: "April 2021",
      grade: "Elite"
    },
    {
      id: 5,
      title: "Data Mining",
      duration: "08 weeks",
      date: "April 2021",
      grade: "Elite"
    },
    {
      id: 6,
      title: "Big Data Computing (Mentor)",
      duration: "08 weeks",
      date: "November 2020",
      grade: "Elite"
    },
    {
      id: 7,
      title: "Object Oriented Analysis and Design",
      duration: "08 weeks",
      date: "November 2020",
      grade: "Silver"
    },
    {
      id: 8,
      title: "The Joy of Computing using Python",
      duration: "12 weeks",
      date: "November 2019",
      grade: "Elite + Gold"
    },
    {
      id: 9,
      title: "Social Networks",
      duration: "12 weeks",
      date: "November 2022",
      grade: "Elite"
    },
    {
      id: 10,
      title: "Social Networks (Mentor)",
      duration: "08 weeks",
      date: "November 2022",
      grade: "Elite"
    },
    {
      id: 11,
      title: "NPTEL_DISCIPLINE_STARS Recognition",
      duration: "50 weeks",
      date: "2021",
      grade: "Elite",
      special: "Completed 50 weeks of NPTEL courses in 4 consecutive semesters"
    },
    {
      id: 12,
      title: "Fundamentals of Deep Learning for Computer Vision",
      duration: "N/A",
      date: "January 2019",
      grade: "NVIDIA Deep Learning Institute"
    },
    {
      id: 13,
      title: "Introduction to Soft Computing",
      duration: "12 weeks",
      date: "March 2023",
      grade: "Elite + Gold"
    },
    {
      id: 14,
      title: "Privacy And Security In Online Social Media",
      duration: "12 weeks",
      date: "Oct 2023",
      grade: "Elite"
    },
    {
      id: 15,
      title: "Cyber Security and Privacy",
      duration: "12 weeks",
      date: "Oct 2023",
      grade: "Elite"
    },
    {
      id: 16,
      title: "Introduction to Quantum Computing: Quantum Algorithms and Qiskit",
      duration: "4 weeks",
      date: "Jul-Aug 2024",
      grade: "Completed"
    },
    {
      id: 17,
      title: "Edge Computing",
      duration: "8 weeks",
      date: "Jan-March 2025",
      grade: "Elite + Silver"
    }
  ];

  const getGradeIcon = (grade: string) => {
    if (grade.includes("Gold")) return <FaMedal className="text-yellow-400" />;
    if (grade.includes("Silver")) return <FaMedal className="text-gray-400" />;
    if (grade.includes("Elite")) return <FaStar className="text-blue-400" />;
    return <FaCertificate className="text-green-400" />;
  };

  return (
    <section id="nptel" className="pt-24 pb-16 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">NPTEL Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: course.id % 9 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/75 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">
                  {getGradeIcon(course.grade)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                  <div className="space-y-1 text-sm text-gray-300">
                    <p><span className="font-medium text-gray-200">Duration:</span> {course.duration}</p>
                    <p><span className="font-medium text-gray-200">Date:</span> {course.date}</p>
                    <p><span className="font-medium text-gray-200">Grade:</span> {course.grade}</p>
                    {course.special && (
                      <p className="text-blue-400 mt-2 italic text-sm">{course.special}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nptel; 