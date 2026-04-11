"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { Briefcase, GraduationCap, MapPin, Building } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: Building, label: "Domains", value: "Healthcare, Auto, Finance" },
  { icon: GraduationCap, label: "Education", value: "MS Data Science" },
  { icon: MapPin, label: "Location", value: "Texas, USA" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Section title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-sage-500 dark:text-sage-400 font-medium text-sm tracking-wider uppercase mb-2">
              Get to know me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading dark:text-dark-text">
              About Me
            </h2>
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-3 space-y-5"
            >
              <p className="text-lg leading-relaxed text-body dark:text-dark-secondary">
                I&apos;m a Full Stack Developer passionate about building
                robust, scalable applications that solve real-world problems.
                With expertise spanning Java, Spring Boot, React.js, and
                cloud-native architectures, I bring ideas to life through clean
                code and thoughtful engineering.
              </p>
              <p className="leading-relaxed text-body dark:text-dark-secondary">
                Currently at CitiusTech building healthcare analytics platforms
                with microservices architecture. I hold a Master&apos;s in Data
                Science from the University of North Texas and thrive in
                collaborative, Agile environments focused on high-impact
                delivery.
              </p>
              <p className="leading-relaxed text-muted dark:text-dark-muted">
                When I&apos;m not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and staying updated with
                the latest in cloud computing and distributed systems.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-2 grid grid-cols-2 gap-4"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl bg-cream dark:bg-dark-elevated border border-sage-100 dark:border-dark-border hover:border-sage-200 dark:hover:border-sage-500/30 transition-colors duration-300"
                >
                  <item.icon
                    size={22}
                    className="text-sage-500 dark:text-sage-400 mb-3"
                  />
                  <p className="text-sm text-muted dark:text-dark-muted mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-heading dark:text-dark-text text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="text-xl font-semibold text-heading dark:text-dark-text mb-6 flex items-center gap-2">
              <GraduationCap
                size={22}
                className="text-sage-500 dark:text-sage-400"
              />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {portfolioData.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-sage-100 dark:border-dark-border bg-cream dark:bg-dark-elevated hover:border-sage-200 dark:hover:border-sage-500/30 transition-all duration-300 group"
                >
                  <p className="font-semibold text-heading dark:text-dark-text group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-body dark:text-dark-secondary mt-1">
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted dark:text-dark-muted">
                    <span>{edu.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-muted dark:bg-dark-muted" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
