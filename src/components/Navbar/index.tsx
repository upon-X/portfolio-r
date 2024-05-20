import { useLocation } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { BtnsContainer } from "../btnsContainer";

export const Navbar = () => {
  const [menuNavRespo, setMenuNavRespo] = useState(false);
  const { language } = useTranslation();
  const { pathname } = useLocation();
  const { theme } = useTheme();
  useEffect(() => {
    window.innerWidth > 768 ? setMenuNavRespo(false) : null;
  }, [menuNavRespo]);
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
      <div
        className="flex items-center gap-3
          md:hidden
          sm:hidden
        "
      >
        {/* About Me Link */}
        <a
          href="#about-me"
          className={`border-b-2 border-purple px-3 py-1   transition-all ${
            pathname === "#about-me" ? "border-b-8" : null
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
            pathname === "#projects" ? "border-b-8 " : null
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
            pathname === "#contact" ? "border-b-8 " : null
          }
          ${theme === "light" ? "" : "text-white"}
          `}
        >
          {language === "es" ? "Contacto" : "Contact"}
        </a>
        <BtnsContainer />
      </div>
      <button
        onClick={() => setMenuNavRespo(!menuNavRespo)}
        className={`hidden sm:block md:block border-2 border-purple rounded-full py-1.5 px-3 ${
          theme === "light" ? " text-darkTheme" : "text-white"
        } hover:bg-purple hover:text-white transition-all`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 20h16" />
          <path d="M4 12h16" />
          <path d="M4 4h16" />
        </svg>
      </button>
      <ul
        className={` ${
          menuNavRespo ? "fixed top-0 right-0" : "hidden"
        } h-[40vh] min-w-[60vw] bg-purple z-[100] p-4 flex flex-col justify-start items-center gap-4 rounded-bl-full transition-all
        text-white
        `}
      >
        <button
          onClick={() => setMenuNavRespo(!menuNavRespo)}
          className={`${!menuNavRespo ? "hidden" : "sm:block md:block"}
            border-2 border-white rounded-full py-1 px-6 hover:text-darkTheme hover:border-darkTheme
          `}
        >
          X
        </button>
        <li className="hover:text-darkTheme">
          <a href="#about-me"> {language === "es" ? "Sobre Mi" : "About Me"}</a>
        </li>
        <li className="hover:text-darkTheme">
          <a href="#projects">
            {" "}
            {language === "es" ? "Proyectos" : "Projects"}
          </a>
        </li>
        <li className="hover:text-darkTheme">
          <a href="#contact"> {language === "es" ? "Contacto" : "Contact"}</a>
        </li>
        <li>
          <BtnsContainer />
        </li>
      </ul>
    </nav>
  );
};
