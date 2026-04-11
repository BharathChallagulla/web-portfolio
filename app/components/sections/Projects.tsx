"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const accentColors = [
  "from-sage-300 to-sage-400",
  "from-steel-300 to-steel-400",
  "from-terra-300 to-terra-400",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-cream dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-sage-500 dark:text-sage-400 font-medium text-sm tracking-wider uppercase mb-2">
              What I&apos;ve built
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading dark:text-dark-text">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-surface dark:bg-dark-card rounded-2xl border border-sage-100 dark:border-dark-border overflow-hidden hover:shadow-lg dark:hover:shadow-none hover:-translate-y-1 dark:hover:border-sage-500/30 transition-all duration-300"
              >
                {/* Accent bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${accentColors[index % accentColors.length]}`}
                />

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-heading dark:text-dark-text group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors pr-2">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-muted dark:text-dark-muted group-hover:text-sage-500 dark:group-hover:text-sage-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1"
                    />
                  </div>

                  <p className="text-sm text-body dark:text-dark-secondary leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-cream dark:bg-dark-elevated text-xs font-medium text-body dark:text-dark-secondary border border-sage-100 dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm font-medium pt-4 border-t border-sage-50 dark:border-dark-border">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted dark:text-dark-muted hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted dark:text-dark-muted hover:text-sage-600 dark:hover:text-sage-400 transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
