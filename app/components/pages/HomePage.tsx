// -----------------------------------------------------------
// File: /components/pages/HomePage.tsx
// Description: The component for the Home page section.
// -----------------------------------------------------------
import React, { Dispatch } from "react";
import { portfolioData } from "../../lib/data";

interface HomePageProps {
  setActivePage: Dispatch<React.SetStateAction<Page>>;
}

// Define the type for the active page
type Page =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "blog";

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center p-8 transition-opacity duration-1000 ease-in-out"
    >
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse-slow">
          {portfolioData.name}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 animate-fade-in-up">
          {portfolioData.title}
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {portfolioData.summary}
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center space-y-4 animate-fade-in-up">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          My Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-4xl text-gray-500 dark:text-gray-400">
          <i className="devicon-nextjs-plain" title="Next.js"></i>
          <i className="devicon-react-original" title="React"></i>
          <i className="devicon-nodejs-plain" title="Node.js"></i>
          <i className="devicon-express-original" title="Express"></i>
          <i className="devicon-mongodb-plain" title="MongoDB"></i>
          <i className="devicon-java-plain" title="Java"></i>
          <i className="devicon-spring-plain" title="Spring Boot"></i>
        </div>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
        <button
          onClick={() => setActivePage("projects")}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          View My Projects
        </button>
        <button
          onClick={() => setActivePage("contact")}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition transform hover:scale-105"
        >
          Contact Me!
        </button>
      </div>
    </section>
  );
};

export default HomePage;
