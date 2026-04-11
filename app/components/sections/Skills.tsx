"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    color: "sage" as const,
    skills: [
      "React.js",
      "Redux",
      "Angular",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "steel" as const,
    skills: [
      "Java (8-17)",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "warm" as const,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Hibernate"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "terra" as const,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    color: "sage" as const,
    skills: [
      "Git",
      "JIRA",
      "Agile/Scrum",
      "JUnit",
      "Mockito",
      "Cypress",
      "Postman",
    ],
  },
];

const colorClasses = {
  sage: {
    bg: "bg-sage-50 dark:bg-sage-500/10",
    pill: "bg-sage-100 text-sage-600 dark:bg-sage-500/20 dark:text-sage-300",
    icon: "text-sage-500 dark:text-sage-400",
    iconBg: "bg-white/80 dark:bg-dark-elevated",
  },
  steel: {
    bg: "bg-steel-50 dark:bg-steel-500/10",
    pill: "bg-steel-100 text-steel-500 dark:bg-steel-500/20 dark:text-steel-300",
    icon: "text-steel-400 dark:text-steel-300",
    iconBg: "bg-white/80 dark:bg-dark-elevated",
  },
  warm: {
    bg: "bg-warm-50 dark:bg-warm-300/10",
    pill: "bg-warm-200 text-heading dark:bg-warm-300/20 dark:text-warm-200",
    icon: "text-warm-300 dark:text-warm-200",
    iconBg: "bg-white/80 dark:bg-dark-elevated",
  },
  terra: {
    bg: "bg-terra-50 dark:bg-terra-500/10",
    pill: "bg-terra-100 text-terra-500 dark:bg-terra-500/20 dark:text-terra-300",
    icon: "text-terra-400 dark:text-terra-300",
    iconBg: "bg-white/80 dark:bg-dark-elevated",
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-sage-50/50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-sage-500 dark:text-sage-400 font-medium text-sm tracking-wider uppercase mb-2">
              What I work with
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading dark:text-dark-text">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const colors = colorClasses[category.color];
              return (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  className={`p-6 rounded-2xl border border-white/60 dark:border-dark-border ${colors.bg} hover:shadow-md dark:hover:shadow-none dark:hover:border-sage-500/20 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2 rounded-xl ${colors.iconBg} ${colors.icon}`}
                    >
                      <category.icon size={20} />
                    </div>
                    <h3 className="font-semibold text-heading dark:text-dark-text">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${colors.pill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
