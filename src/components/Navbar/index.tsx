import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";

export default function Navbar() {
  const { language } = useTranslation();
  const { pathname } = useLocation();

  return (
    <nav className="flex text-xl items-center justify-around max-w-screen h-[8vh] font-semibold text-gray uppercase select-none">
      <Link
        to="/"
        className="border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all"
      >
        VM
      </Link>
      <div className="flex items-center gap-3">
        {/* About Me Link */}
        <Link
          to="/aboutme"
          className={`border-b-2 border-purple px-3 py-1   transition-all ${
            pathname === "/aboutme" ? "border-b-8" : null
          }`}
        >
          {language === "es" ? "Sobre Mi" : "About Me"}
        </Link>
        {/* Projects Link */}
        <Link
          to="/projects"
          className={`border-b-2 border-purple px-3 py-1  transition-all ${
            pathname === "/projects" ? "border-b-8 " : null
          }`}
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </Link>
        {/* Contact Link */}
        <Link
          to="/contact"
          className={`border-b-2 border-purple px-3 py-1  transition-all ${
            pathname === "/contact" ? "border-b-8 " : null
          }`}
        >
          {language === "es" ? "Contacto" : "Contact"}
        </Link>
      </div>
    </nav>
  );
}
