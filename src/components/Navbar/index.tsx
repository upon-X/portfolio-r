import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";

export const Navbar = () => {
  const { language } = useTranslation();
  const { pathname } = useLocation();
  const { theme } = useTheme();

  return (
    <nav
      className={`flex text-xl items-center justify-around max-w-screen h-[8vh] font-semibold text-gray uppercase select-none 
    ${theme === "light" ? "" : "bg-darkTheme"}
    `}
    >
      <Link
        to="/"
        className={`border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all
        ${theme === "light" ? "" : "text-white"}
        `}
      >
        VM
      </Link>
      <div className="flex items-center gap-3">
        {/* About Me Link */}
        <Link
          to="/about-me"
          className={`border-b-2 border-purple px-3 py-1   transition-all ${
            pathname === "/about-me" ? "border-b-8" : null
          }
          ${theme === "light" ? "" : "text-white"}
          hover:shadow-inner
          `}
        >
          {language === "es" ? "Sobre Mi" : "About Me"}
        </Link>
        {/* Projects Link */}
        <Link
          to="/projects"
          className={`border-b-2 border-purple px-3 py-1  transition-all ${
            pathname === "/projects" ? "border-b-8 " : null
          } 
          ${theme === "light" ? "" : "text-white"}
          `}
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </Link>
        {/* Contact Link */}
        <Link
          to="/contact"
          className={`border-b-2 border-purple px-3 py-1  transition-all ${
            pathname === "/contact" ? "border-b-8 " : null
          }
          ${theme === "light" ? "" : "text-white"}
          `}
        >
          {language === "es" ? "Contacto" : "Contact"}
        </Link>
      </div>
    </nav>
  );
};
