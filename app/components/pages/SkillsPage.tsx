import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Wrench,
  Cloud,
  GitBranch,
  TestTube,
  Users,
  Layout,
  Layers,
  Server,
  Workflow,
  Boxes,
  Settings,
  Monitor,
  GitCommit,
  Cpu,
} from "lucide-react";
import { portfolioData } from "../../lib/data";

// Map small icons to each skill
const iconMap: Record<string, React.ReactElement> = {
  "React.js": <i className="devicon-react-original text-xl" />,
  "Redux Toolkit": <i className="devicon-redux-original text-xl" />,
  Angular: <i className="devicon-angular-plain text-xl" />,
  Bootstrap: <i className="devicon-bootstrap-plain text-xl" />,
  TypeScript: <i className="devicon-typescript-plain text-xl" />,
  HTML5: <i className="devicon-html5-plain text-xl" />,
  CSS3: <i className="devicon-css3-plain text-xl" />,
  "Responsive UI": <i className="devicon-bootstrap-plain text-xl" />,
  "Java (8-17)": <i className="devicon-java-plain text-xl" />,
  "Spring Boot": <i className="devicon-spring-plain text-xl" />,
  "Node.js": <i className="devicon-nodejs-plain text-xl" />,
  "Express.js": <i className="devicon-express-original text-xl" />,
  "RESTful APIs": <i className="devicon-express-original text-xl" />,
  "Microservices Architecture": <i className="devicon-docker-plain text-xl" />,
  PostgreSQL: <i className="devicon-postgresql-plain text-xl" />,
  MongoDB: <i className="devicon-mongodb-plain text-xl" />,
  MySQL: <i className="devicon-mysql-plain text-xl" />,
  "SQL Server": <i className="devicon-microsoftsqlserver-plain text-xl" />,
  Hibernate: <i className="devicon-hibernate-plain text-xl" />,
  "Query Optimization": <i className="devicon-mysql-plain text-xl" />,
  "Indexing Strategies": <i className="devicon-mysql-plain text-xl" />,
  Docker: <i className="devicon-docker-plain text-xl" />,
  Kubernetes: <i className="devicon-kubernetes-plain text-xl" />,
  "AWS (EC2, S3, EKS)": (
    <i className="devicon-amazonwebservices-line-wordmark text-white font-bold text-xl" />
  ),
  "Azure App Services": <i className="devicon-azure-plain text-xl" />,
  "Automated Deployment Pipelines": (
    <i className="devicon-jenkins-plain text-xl" />
  ),
  Jenkins: <i className="devicon-jenkins-plain text-xl" />,
  "GitHub Actions": <i className="devicon-github-original text-xl" />,
  Git: <i className="devicon-git-plain text-xl" />,
  JIRA: <i className="devicon-jira-plain text-xl" />,
  "Agile/Scrum": <i className="devicon-jira-plain text-xl" />,
  JUnit: <i className="devicon-junit-plain text-xl" />,
  Mockito: <i className="devicon-java-plain text-xl" />,
  Cypress: <i className="devicon-cypressio-plain text-xl" />,
  Postman: <i className="devicon-postman-plain text-xl" />,
};

// 7 categories with minimal styling
const categories = [
  {
    title: "Frontend Development",
    icon: <Code size={28} />,
    skills: portfolioData.skills.frontend,
  },
  {
    title: "Backend Development",
    icon: <Globe size={28} />,
    skills: portfolioData.skills.backend,
  },
  {
    title: "Databases",
    icon: <Database size={28} />,
    skills: portfolioData.skills.databases,
  },
  {
    title: "DevOps & Cloud",
    icon: <Wrench size={28} />,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3, EKS)",
      "Azure App Services",
      "Automated Deployment Pipelines",
    ],
  },
  {
    title: "CI/CD",
    icon: <GitBranch size={28} />,
    skills: ["Jenkins", "GitHub Actions"],
  },
  {
    title: "Testing & QA",
    icon: <TestTube size={28} />,
    skills: ["JUnit", "Mockito", "Cypress", "Postman"],
  },
  {
    title: "Project Management",
    icon: <Users size={28} />,
    skills: ["Git", "JIRA", "Agile/Scrum"],
  },
];

const SkillsPage: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen container mx-auto p-8 lg:p-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
        My Skills
      </h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-800 dark:text-gray-200">
                {category.icon} {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="text-gray-500 dark:text-gray-400">
                      {iconMap[skill] || <Code size={18} />}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsPage;
