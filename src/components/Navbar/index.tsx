import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";

export default function Navbar() {
  const { language } = useTranslation();
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
          className="border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all"
        >
          {language === "es" ? "Sobre Mi" : "About Me"}
        </Link>
        {/* Projects Link */}
        <Link
          to="/projects"
          className="border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all"
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </Link>
        {/* Contact Link */}
        <Link
          to="/contact"
          className="border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all"
        >
          {language === "es" ? "Contacto" : "Contact"}
        </Link>
      </div>
    </nav>
  );
}
