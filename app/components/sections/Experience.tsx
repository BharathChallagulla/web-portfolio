"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-steel-50/30 dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-sage-500 dark:text-sage-400 font-medium text-sm tracking-wider uppercase mb-2">
              Where I&apos;ve worked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading dark:text-dark-text">
              Experience
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-sage-200 dark:bg-dark-border" />

            <div className="space-y-10">
              {portfolioData.experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-sage-400 ring-4 ring-sage-50 dark:ring-dark-card" />

                  {/* Card */}
                  <div className="bg-surface dark:bg-dark-elevated rounded-2xl border border-sage-100 dark:border-dark-border p-6 md:p-8 hover:shadow-md dark:hover:shadow-none dark:hover:border-sage-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-heading dark:text-dark-text">
                          {job.title}
                        </h3>
                        <p className="text-sage-500 dark:text-sage-400 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-sm text-muted dark:text-dark-muted flex flex-col sm:items-end">
                        <span>{job.duration}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {job.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-body dark:text-dark-secondary leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sage-300 dark:bg-sage-500 mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
