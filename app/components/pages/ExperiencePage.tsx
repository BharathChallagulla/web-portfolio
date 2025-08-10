// -----------------------------------------------------------
// File: /components/pages/ExperiencePage.tsx
// Description: The component for the Experience page section.
// -----------------------------------------------------------
import React from "react";
import { portfolioData } from "../../lib/data";

const ExperiencePage: React.FC = () => (
  <section
    id="experience"
    className="min-h-screen container mx-auto p-8 lg:p-16 transition-opacity duration-1000 ease-in-out"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
      Experience
    </h2>
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="space-y-12">
        {portfolioData.experience.map((job, index) => (
          <div
            key={index}
            className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in"
          >
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {job.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {job.duration}
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-1">
                {job.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencePage;
