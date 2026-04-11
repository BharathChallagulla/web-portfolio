import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../../lib/data";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-sage-100 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted dark:text-dark-muted">
            &copy; {new Date().getFullYear()} Bharath Challagulla. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted dark:text-dark-muted hover:text-sage-500 dark:hover:text-sage-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted dark:text-dark-muted hover:text-sage-500 dark:hover:text-sage-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-muted dark:text-dark-muted hover:text-sage-500 dark:hover:text-sage-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
