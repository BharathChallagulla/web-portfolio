// -----------------------------------------------------------
// File: /lib/data.ts
// Description: This file stores all the portfolio data and its types.
// -----------------------------------------------------------

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  duration: string;
  location: string;
}

export interface ProjectItem {
  title: string;
  techStack: string[];
  description: string;
  githubLink: string;
  demoLink: string;
}

export const portfolioData = {
  name: "Leela Gopala Bharath Kumar Challagulla",
  title: "Java Full Stack Developer",
  email: "bharathchallagullaus@gmail.com",
  phone: "+1 (940) 268-5698",
  location: "TX, USA",
  linkedin: "https://www.linkedin.com/in/bharath5567/",
  github: "https://github.com/BharathChallagulla",
  summary:
    "Full Stack Developer with over 3 years of experience designing and delivering scalable, enterprise-grade applications using Java (8-17), Spring Boot, React.js, and Node.js. Expertise in building secure, cloud-native microservices architectures and responsive frontends for domains including healthcare, automotive, and public sector. Proficient in RESTful API development, FHIR integration, and role-based authentication using OAuth 2.0 and JWT. Experienced in optimizing PostgreSQL and MongoDB performance, automating CI/CD pipelines with Jenkins, GitHub Actions, and Docker, and deploying containerized solutions on AWS and Azure. Collaborative and Agile-driven, with a strong focus on clean code, unit testing, and high-impact delivery.",
  skills: {
    frontend: [
      "React.js",
      "Redux Toolkit",
      "Angular",
      "Bootstrap",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],
    backend: [
      "Java (8-17)",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices Architecture",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Hibernate",
      "Query Optimization",
      "Indexing Strategies",
    ],
    devops: [
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Kubernetes",
      "AWS (EC2, S3, EKS)",
      "Azure App Services",
      "Automated Deployment Pipelines",
    ],
    tools: [
      "Git",
      "JIRA",
      "Agile/Scrum",
      "JUnit",
      "Mockito",
      "Cypress",
      "Postman",
    ],
  },
  experience: [
    {
      title: "Java Full Stack Developer",
      company: "CitiusTech",
      duration: "January 2025 - Present",
      location: "TX, USA",
      responsibilities: [
        "Architected scalable microservices architecture using Java 17, Spring Boot, Apache Kafka, and MongoDB, reducing healthcare data ingestion latency by 40% and increasing system throughput.",
        "Crafted dynamic, component-based UIs with React.js, Redux Toolkit, and TypeScript, enhancing user experience and reducing frontend load times by 30%.",
        "Built and secured RESTful APIs with Spring Security, OAuth 2.0, and JWT, ensuring role-based access control and HIPAA compliance.",
        "Automated CI/CD workflows using Jenkins, Docker, and Kubernetes, reducing release cycle times by 50% and enabling fault-tolerant, zero-downtime deployments.",
        "Integrated HL7 FHIR R4 APIs to support real-time clinical data interoperability, cutting down manual data entry by 25%.",
      ],
    },
    {
      title: "Full Stack Developer (Digital Specialist Engineer)",
      company: "Infosys Limited",
      duration: "August 2021 - July 2023",
      location: "Hyderabad, India",
      responsibilities: [
        "Engineered scalable frontends using React.js and Angular 11 to build vehicle and dealership onboarding modules, reducing load time by 30%.",
        "Developed backend microservices using Node.js and Express to manage vehicle profiles, supporting 100K+ daily API transactions.",
        "Enhanced performance of PostgreSQL and MongoDB databases by optimizing search queries and implementing indexing, increasing API throughput by 40%.",
        "Streamlined CI/CD workflows with GitHub Actions, Jenkins, and Docker, reducing manual effort by 80%.",
        "Implemented OAuth 2.0-based authentication and JWT with RBAC to secure sensitive vehicle ownership data.",
      ],
    },
    {
      title: "Java Full Stack Developer",
      company: "Trigyn Technologies",
      duration: "September 2020 - July 2021",
      location: "India",
      responsibilities: [
        "Designed and implemented RESTful APIs using Java 11, Spring Boot, and Hibernate, reducing manual reconciliation efforts by 35%.",
        "Created interactive frontends with React.js and Bootstrap, increasing self-service usage by 40%.",
        "Refactored legacy JSP and Struts-based modules into modular Spring Boot microservices, cutting deployment time by 60%.",
        "Optimized SQL Server stored procedures and queries, reducing report generation time from minutes to seconds.",
        "Enforced authentication and role-based authorization using Spring Security and JWT, securing user data access.",
      ],
    },
  ],
  education: [
    {
      degree: "Master's in Data Science",
      school: "University of North Texas",
      duration: "August 2023 - May 2025",
      location: "Denton, TX",
    },
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "PVP Siddhartha Institute of Technology",
      duration: "June 2017 - May 2021",
      location: "Vijayawada, India",
    },
  ],
  projects: [
    {
      title: "Healthcare Analytics Platform",
      techStack: [
        "Java 17",
        "Spring Boot",
        "Apache Kafka",
        "MongoDB",
        "React.js",
        "Redux Toolkit",
      ],
      description:
        "Architected and developed a cloud-native platform for healthcare data analytics, focusing on real-time data ingestion and physician productivity.",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Vehicle Onboarding System",
      techStack: [
        "React.js",
        "Angular 11",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
      ],
      description:
        "Engineered a scalable system for managing vehicle profiles and ownership history, including digital documentation workflows for dealer portals.",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Municipal Finance Application",
      techStack: [
        "Java 11",
        "Spring Boot",
        "Hibernate",
        "React.js",
        "Bootstrap",
      ],
      description:
        "Designed and implemented RESTful APIs and interactive frontends for a municipal finance application, improving efficiency and reducing manual efforts.",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "CI/CD Automation Pipeline",
      techStack: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions", "Bash"],
      description:
        "Developed automated CI/CD workflows to reduce release cycle times and enable fault-tolerant deployments across multiple environments.",
      githubLink: "#",
      demoLink: "#",
    },
  ],
};
