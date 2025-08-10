// -----------------------------------------------------------
// File: /components/pages/BlogPage.tsx
// Description: The component for the Blog page section.
// -----------------------------------------------------------
import React from "react";

const BlogPage: React.FC = () => (
  <section
    id="blog"
    className="min-h-screen container mx-auto p-8 lg:p-16 transition-opacity duration-1000 ease-in-out"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12">
      Blog
    </h2>
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <p className="text-lg text-gray-600 dark:text-gray-400">
        This is a placeholder for your technical articles and insights.
        <br />
        Stay tuned for posts on MERN stack tips, Java development, and more!
      </p>
    </div>
  </section>
);

export default BlogPage;
