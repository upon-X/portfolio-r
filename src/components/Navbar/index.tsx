import { useLocation } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";

export const Navbar = () => {
  const { language } = useTranslation();
  const { pathname } = useLocation();
  const { theme } = useTheme();

  return (
    <nav
      className={`fixed top-0 m-0 h-[7vh] w-screen flex text-xl items-center justify-around font-semibold text-gray uppercase select-none bg-transparent z-40 backdrop-blur-sm`}
    >
      <a
        href="#"
        className={`border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all
        ${theme === "light" ? "" : "text-white"}
        `}
      >
        VM
      </a>
      <div className="flex items-center gap-3">
        {/* About Me Link */}
        <a
          href="#about-me"
          className={`border-b-2 border-purple px-3 py-1   transition-all ${
            pathname === "/about-me" ? "border-b-8" : null
          }
          ${theme === "light" ? "" : "text-white"}
          hover:shadow-inner
          `}
        >
          {language === "es" ? "Sobre Mi" : "About Me"}
        </a>
        {/* Projects Link */}
        <a
          href="#projects"
          className={`border-b-2 border-purple px-3 py-1  transition-all ${
            pathname === "/projects" ? "border-b-8 " : null
          } 
          ${theme === "light" ? "" : "text-white"}
          `}
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </a>
        {/* Contact Link */}
        <a
          href="#contact"
          className={`border-b-2 border-purple px-3 py-1  transition-all ${
            pathname === "/contact" ? "border-b-8 " : null
          }
          ${theme === "light" ? "" : "text-white"}
          `}
        >
          {language === "es" ? "Contacto" : "Contact"}
        </a>
      </div>
    </nav>
  );
};
