// -----------------------------------------------------------
// File: /components/Navbar.tsx
// Description: The main navigation sidebar component.
// -----------------------------------------------------------
import {
  Home,
  User,
  Zap,
  Briefcase,
  Layers,
  Mail,
  BookOpen,
  AlignJustify,
} from "lucide-react";
import React from "react";

const navItems = [
  { name: "Home", icon: Home, page: "home" },
  { name: "About Me", icon: User, page: "about" },
  { name: "Skills", icon: Zap, page: "skills" },
  { name: "Projects", icon: Briefcase, page: "projects" },
  { name: "Experience", icon: Layers, page: "experience" },
  { name: "Contact", icon: Mail, page: "contact" },
  { name: "Blog", icon: BookOpen, page: "blog" },
];

interface NavbarProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<Page>>;
  theme: string;
  toggleTheme: () => void;
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

const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  theme,
}) => {
  const [hideNav, setHideNav] = React.useState(true);

  return (
    <nav className="fixed flex left-0 top-0 h-screen w-auto z-50 bg-white dark:bg-gray-800 shadow-xl md:static md:min-h-screen md:flex md:flex-col md:items-start">
      <div className="flex flex-col md:justify-start w-full md:w-auto p-1 md:space-y-4">
        <button
          className="p-1 m-2 h-fit sm:grow-[0.4] md:p-2 rounded-lg md:flex-1 align-middle justify-start flex items-center gap-3 transition-colors duration-300 cursor-pointer"
          onClick={() => setHideNav(!hideNav)}
        >
          <AlignJustify size={24} />
        </button>

        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setActivePage(item.page)}
            className={`p-1 gap-3 sm:grow-[0.4] m-2 md:p-2 rounded-lg md:flex-1 justify-start flex items-center transition-colors duration-300 cursor-pointer ${
              activePage === item.page
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"
            }`}
          >
            <item.icon size={24} />
            <span className={`font-medium ${hideNav ? "hidden" : "block"}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
