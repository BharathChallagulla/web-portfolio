// -----------------------------------------------------------
// File: /components/pages/AboutPage.tsx
// Description: Component for about me section
// -----------------------------------------------------------
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { MapPin, GraduationCap } from "lucide-react";

const AboutPage: React.FC = () => (
  <section
    id="about"
    className="min-h-screen container mx-auto p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12"
  >
    {/* Profile Image */}
    <motion.div
      className="lg:w-1/3 flex-shrink-0 flex justify-center"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img
        src="/profile2.jpg"
        alt="Profile Photo"
        className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-gray-200 dark:border-gray-700"
      />
    </motion.div>

    {/* Content */}
    <motion.div
      className="lg:w-2/3 space-y-6 text-gray-700 dark:text-gray-300"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="leading-relaxed">{portfolioData.summary}</p>

      {/* Education Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <GraduationCap size={24} className="text-blue-500" />
          Education
        </h3>
        <div className="space-y-4">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-lg">{edu.degree}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {edu.school}, {edu.location}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {edu.duration}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 pt-4">
        <MapPin size={20} className="text-red-500" />
        <p className="font-semibold text-gray-900 dark:text-white">
          Location:{" "}
          <span className="font-normal text-gray-600 dark:text-gray-400">
            {portfolioData.location}
          </span>
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutPage;
