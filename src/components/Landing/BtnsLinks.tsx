import { FaCode, FaRegAddressCard, FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const BtnsLinks = () => {
  const { language } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div
      data-aos="fade-up"
      className="flex justify-center gap-10 md:gap-12 text-purple"
    >
      <Link
        aria-label="Read more about me, my skills and my experience on IT"
        to={"/about-me"}
        className="flex flex-col items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all
          "
      >
        <FaRegAddressCard className="w-[3rem] h-[3rem] md:w-[2.3rem] md:h-[2.3rem] sm:w-[2rem] sm:h-[2rem]" />
        <p
          className="hidden absolute text-xl whitespace-nowrap text-purple font-bold
        group-hover:block group-hover:-mb-[6.5rem] transition-all uppercase 
        "
        >
          {language === "es" ? "Sobre mi" : "About me"}
        </p>
      </Link>

      <Link
        aria-label="Read more about my projects and visit their deploy"
        to={"/projects"}
        className="flex items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all
          "
      >
        <FaCode className="w-[3rem] h-[3rem] md:w-[2.3rem] md:h-[2.3rem] sm:w-[2rem] sm:h-[2rem]" />
        <p
          className="hidden absolute text-xl whitespace-nowrap text-purple font-bold
        group-hover:block group-hover:-mb-[6.5rem] transition-all uppercase 
        "
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </p>
      </Link>

      <Link
        aria-label="Go on and contact me by filling an email-form"
        to={"/contact"}
        className="flex items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all
          "
      >
        <FaRegMessage className="w-[3rem] h-[3rem] md:w-[2.3rem] md:h-[2.3rem] sm:w-[2rem] sm:h-[2rem]" />
        <p
          className="hidden absolute text-xl whitespace-nowrap text-purple font-bold
        group-hover:block group-hover:-mb-[6.5rem] transition-all uppercase 
        "
        >
          {language === "es" ? "Contacto" : "Contact"}
        </p>
      </Link>
    </div>
  );
};
