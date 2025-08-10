// -----------------------------------------------------------
// File: /components/pages/ProjectsPage.tsx
// Description: Minimal & clean design for Projects page
// -----------------------------------------------------------
import { Github, ExternalLink } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";

const ProjectsPage: React.FC = () => (
  <section
    id="projects"
    className="min-h-screen container mx-auto p-8 lg:p-16 transition-opacity duration-1000 ease-in-out overflow-y-auto"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
      Projects
    </h2>

    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {portfolioData.projects.map((project, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto flex gap-4 text-sm font-medium">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink size={18} /> Demo
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProjectsPage;
