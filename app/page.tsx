// -----------------------------------------------------------
// File: /app/page.tsx
// Description: The main client component for the single-page application.
// -----------------------------------------------------------
"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import SkillsPage from "./components/pages/SkillsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import ContactPage from "./components/pages/ContactPage";
import BlogPage from "./components/pages/BlogPage";
import { ToastComponent } from "./components/ToastComponent";

// Define the type for the active page
type Page =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "blog";

export default function Home() {
  const [activePage, setActivePage] = useState<Page>("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage setActivePage={setActivePage} />;
      case "about":
        return <AboutPage />;
      case "skills":
        return <SkillsPage />;
      case "projects":
        return <ProjectsPage />;
      case "experience":
        return <ExperiencePage />;
      case "contact":
        return <ContactPage />;
      case "blog":
        return <BlogPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 dark:text-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulseSlow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .devicon-mongodb-plain:before { content: "\\e920"; }
        .devicon-express-original:before { content: "\\e922"; }
        .devicon-react-original:before { content: "\\e945"; }
        .devicon-nodejs-plain:before { content: "\\e925"; }
        .devicon-java-plain:before { content: "\\e91e"; }
        .devicon-git-plain:before { content: "\\e90b"; }
        .devicon-docker-plain:before { content: "\\e910"; }
        .devicon-spring-plain:before { content: "\\e953"; }
        .devicon-nextjs-plain:before { content: "\\e946"; }
      `}</style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <ToastComponent />
      <div className="flex flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
        {/* The Navbar will be the first flex item */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {/* The main content will be the second flex item. */}
        <main className="flex-1 pl-10 md:p-8 h-screen overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
