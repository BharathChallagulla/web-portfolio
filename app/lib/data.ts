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
  title: "Full Stack Software Engineer",
  email: "bharathchallagullaus@gmail.com",
  phone: "+1 (940) 268-5698",
  location: "TX, USA",
  linkedin: "https://www.linkedin.com/in/bharath5567/",
  github: "https://github.com/BharathChallagulla",
  summary:
    "Full Stack Software Engineer with 5+ years of experience building scalable, cloud-native web applications across healthcare, automotive, and public sector domains using React, Angular, TypeScript, Java Spring Boot, and Node.js in microservices and micro-frontend architectures. Experienced in designing GraphQL and REST APIs, event-driven systems with Kafka, and secure services using OAuth2/JWT and RBAC. Strong background in SQL/NoSQL databases, performance optimization, and cloud deployments on AWS and Azure with Kubernetes and Helm-based configurations. Proficient in CI/CD automation using GitHub Actions and Jenkins, Python scripting, and observability tooling, with a consistent focus on delivering reliable, high-performance production systems in Agile environments.",
  skills: {
    frontend: [
      "React.js",
      "Angular",
      "Redux Toolkit",
      "Material-UI",
      "D3.js",
      "Bootstrap",
      "Responsive Design",
      "Micro-Frontend Architecture",
      "TypeScript",
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "BFF Architecture",
      "Spring Security",
      "API Gateway",
      "FHIR API Integration",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Hibernate",
      "JPA",
      "Redis",
      "NoSQL",
      "Data Modeling",
      "Query Optimization",
      "Database Migration",
    ],
    devops: [
      "AWS (EC2, S3, Lambda, ECS, EKS)",
      "Azure",
      "Kubernetes",
      "Docker",
      "Helm",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
    ],
    tools: [
      "Git",
      "JIRA",
      "Agile/Scrum",
      "Confluence",
      "Postman",
      "JUnit",
      "Mockito",
      "Jest",
      "Cypress",
      "SonarQube",
      "Grafana",
      "AWS CloudWatch",
      "Splunk",
    ],
    security: ["OAuth2", "JWT", "RBAC", "Secure Coding Practices"],
  },
  experience: [
    {
      title: "Full Stack Developer",
      company: "CitiusTech",
      duration: "Jan 2025 – Present",
      location: "Remote",
      responsibilities: [
        "Developed a cloud-native healthcare analytics platform serving 10K+ users using micro-frontend architecture with React and microservices built with Spring Boot and Node.js.",
        "Implemented GraphQL and REST APIs integrated with healthcare and EHR systems, enabling real-time clinical data exchange across distributed services.",
        "Designed reusable UI component libraries and shared BFF contracts using React, TypeScript, and Material-UI, improving frontend scalability and reducing cross-team development time.",
        "Built and secured RESTful APIs with Spring Security, OAuth 2.0, and JWT, enforcing RBAC and HIPAA-aligned secure coding practices across clinical data applications.",
        "Automated CI/CD workflows using Jenkins, Docker, and GitHub Actions, enabling zero-downtime deployments and improving release velocity.",
        "Improved observability using Grafana and AWS CloudWatch with dashboards and alerts to support proactive monitoring and faster incident resolution.",
        "Created unit, integration, and end-to-end test suites using JUnit, Mockito, and Cypress, improving code coverage and reducing production bugs.",
      ],
    },
    {
      title: "Digital Specialist Engineer - Full Stack Developer",
      company: "Infosys Limited",
      duration: "Aug 2021 – Jun 2023",
      location: "Hyderabad, India",
      responsibilities: [
        "Built scalable microservices using Node.js, Express.js, and Spring Boot to handle high-volume vehicle and dealership data workflows across dealer and customer portals.",
        "Developed micro-frontend UIs using Angular with lazy loading, code-splitting, and Redux Toolkit, improving load times and UX for dealer agents.",
        "Designed Backend-for-Frontend services in Node.js to aggregate microservices, normalize payloads, and implement caching and pagination, reducing API latency by about 25%.",
        "Optimized PostgreSQL and MongoDB schemas, indexing strategies, and queries under concurrent load and led a zero-data-loss MongoDB-to-PostgreSQL migration.",
        "Automated multi-environment deployments using GitHub Actions, Jenkins, Docker, and Kubernetes with Helm-based configurations, reducing manual effort and rollback risks.",
        "Monitored backend services using AWS CloudWatch and log-based alerts, improving system health visibility and issue resolution.",
        "Delivered modules for vehicle verification, digital signatures, and document validation in Agile sprints with consistent on-time releases.",
      ],
    },
    {
      title: "Java Full Stack Developer",
      company: "Trigyn Technologies",
      duration: "Sep 2020 – Jul 2021",
      location: "Remote",
      responsibilities: [
        "Built RESTful APIs using Java 11, Spring Boot, and Hibernate to support integration between internal modules in a municipal finance application, reducing manual reconciliation efforts.",
        "Migrated legacy JSP and Struts-based modules into modular Spring Boot microservices, improving maintainability and reducing deployment time.",
        "Developed interactive frontends using React.js, TypeScript, and Bootstrap for government citizen service portals, streamlining case intake and increasing self-service adoption.",
        "Implemented event-driven processing patterns using Kafka-style messaging for reliable asynchronous workflows across internal modules.",
        "Optimized SQL Server stored procedures and queries, reducing report generation time for high-volume datasets.",
      ],
    },
  ],
  education: [
    {
      degree: "MS in Data Science",
      school: "University of North Texas",
      duration: "Aug 2023 – May 2025",
      location: "Denton, TX",
    },
    {
      degree: "BS in Computer Science and Engineering",
      school: "PVP Siddhartha Institute of Technology",
      duration: "Jun 2017 – May 2021",
      location: "Vijayawada, India",
    },
  ],
  projects: [
    {
      title: "InkToNote",
      techStack: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Groq AI",
        "TrOCR",
        "PaddleOCR",
      ],
      description:
        "Built a full-stack AI-powered handwriting recognition app that converts uploaded images and PDFs into structured digital notes using a hybrid OCR pipeline with PaddleOCR and TrOCR, and supports notebook organization, tagging, full-text search, and Markdown export.",
      githubLink: "https://github.com/BharathChallagulla/ink-to-note",
      demoLink: "#",
    },
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
      title: "Dealer Onboarding and Inventory System",
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
      title: "Patient Appointment API",
      techStack: [
        "Java 21",
        "Spring Boot 3.5",
        "PostgreSQL",
        "Flyway",
        "Spring Security",
        "JWT",
        "Docker",
      ],
      description:
        "Designed and built a RESTful healthcare scheduling API supporting patient, doctor, slot, and appointment management with role-based access control, JWT authentication, and global exception handling.",
      githubLink: "https://github.com/BharathChallagulla/patient-appointment-api",
      demoLink: "#",
    },
    {
      title: "QR Code Generator",
      techStack: ["Java", "Spring Boot", "REST API", "ZXing"],
      description:
        "A Spring Boot REST API that generates QR code images from text or URLs, providing a simple and efficient endpoint for on-the-fly QR generation.",
      githubLink: "https://github.com/BharathChallagulla/qr-generator",
      demoLink: "#",
    },
    {
      title: "URL Shortener",
      techStack: ["Java", "Spring Boot", "REST API", "H2 Database"],
      description:
        "A URL shortening service built with Spring Boot that converts long URLs into compact, shareable short links with redirect support.",
      githubLink: "https://github.com/BharathChallagulla/UrlShortener",
      demoLink: "#",
    },
  ],
};
