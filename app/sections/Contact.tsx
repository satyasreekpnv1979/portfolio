"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGraduationCap, FaBook } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white px-2">Contact Me</h2>
          <div className="w-16 sm:w-18 md:w-20 h-0.5 sm:h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-2 sm:mx-0"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base leading-relaxed">
              Feel free to contact me for any academic collaborations, research opportunities, 
              or speaking engagements. I&apos;m always open to discussing new projects and ideas.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Email</h4>
                  <a 
                    href="mailto:satyasreekpnv@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    satyasreekpnv@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Phone</h4>
                  <a 
                    href="tel:+919032798749" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +91 9032798749
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <FaLinkedin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/satyasreekpnv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Google Scholar</h4>
                  <a 
                    href="https://scholar.google.com/citations?user=3wmgrOMAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    View Google Scholar Profile
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <FaBook className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Scopus</h4>
                  <a 
                    href="https://www.scopus.com/authid/detail.uri?authorId=57218874914" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    View Scopus Profile
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <SiOrcid className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">ORCID</h4>
                  <a 
                    href="https://orcid.org/0000-0003-4567-3447" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    View ORCID Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/30 text-green-300 rounded-md">
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/30 text-red-300 rounded-md">
                There was an error sending your message. Please try again later.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white resize-none h-32"
                  suppressHydrationWarning
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full"
                suppressHydrationWarning
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 