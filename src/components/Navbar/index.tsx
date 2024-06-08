import { useLocation } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { BtnsContainer } from "../btnsContainer";
import { Link } from "react-scroll";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  const [menuNavRespo, setMenuNavRespo] = useState(false);
  const { language } = useTranslation();
  const { pathname } = useLocation();
  const { theme } = useTheme();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuNavRespo(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 m-0 h-[7vh] w-screen flex text-xl items-center justify-around font-semibold uppercase select-none bg-white bg-opacity-0 z-40 backdrop-blur-sm `}
    >
      <Link
        to="landing"
        smooth={true}
        className={`border-2 rounded-full border-purple px-3 py-1 hover:bg-purple hover:text-white transition-all cursor-pointer
        ${theme === "light" ? "" : "text-white"}
        `}
      >
        VM
      </Link>
      <div
        className="flex items-center gap-3
          md:hidden
          sm:hidden
        "
      >
        {/* About Me Link */}
        <NavbarLink
          navlink_id="about me"
          link="about-me"
          navlink_text={language === "es" ? "Sobre Mi" : "About Me"}
        />
        {/* Projects Link */}
        <NavbarLink
          navlink_id="projects"
          link="projects"
          navlink_text={language === "es" ? "Proyectos" : "Projects"}
        />
        {/* Contact Link */}
        <NavbarLink
          navlink_id="contact"
          link="contact"
          navlink_text={language === "es" ? "Contacto" : "Contact"}
        />
        <BtnsContainer />
      </div>
      {/* ---------------------------Menu mobile version--------------------------- */}
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
