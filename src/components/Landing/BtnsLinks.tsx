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
    <div data-aos="fade-up" className="flex justify-center gap-10 text-purple">
      <Link
        to={"/aboutme"}
        className="flex flex-col items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all
          "
      >
        <FaRegAddressCard className="w-[3rem] h-[3rem]" />
        <p
          className=" absolute opacity-0 text-xl whitespace-nowrap text-purple font-bold
        group-hover:opacity-100 group-hover:-mb-28 transition-all uppercase
        "
        >
          {language === "es" ? "Sobre mi" : "About me"}
        </p>
      </Link>

      <Link
        to={"/projects"}
        className="flex items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all
          "
      >
        <FaCode className="w-[3rem] h-[3rem]" />
        <p
          className=" absolute opacity-0 text-xl whitespace-nowrap text-purple font-bold
        group-hover:opacity-100 group-hover:-mb-28 transition-all uppercase
        "
        >
          {language === "es" ? "Proyectos" : "Projects"}
        </p>
      </Link>

      <Link
        to={"/contact"}
        className="flex items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all
          "
      >
        <FaRegMessage className="w-[3rem] h-[3rem]" />
        <p
          className=" absolute opacity-0 text-xl whitespace-nowrap text-purple font-bold
        group-hover:opacity-100 group-hover:-mb-28 transition-all uppercase
        "
        >
          {language === "es" ? "Contacto" : "Contact"}
        </p>
      </Link>
    </div>
  );
};
