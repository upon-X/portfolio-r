import { FaCode, FaRegAddressCard, FaRegMessage } from "react-icons/fa6";
import { useTranslation } from "../../context/TranslationContext";
import { Link } from "react-scroll";

export const BtnsLinks = () => {
  const { language } = useTranslation();

  return (
    <div className="flex justify-center gap-10 md:gap-12 text-purple sm:gap-6">
      {/* Scroll to About Me Section */}
      <Link
        aria-label="Read more about me, my skills and my experience on IT"
        to={"about-me"}
        smooth={true}
        className="flex flex-col items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all cursor-pointer
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
      {/* Scroll to Projects Section */}
      <Link
        aria-label="Read more about my projects and visit their deploy"
        to={"projects"}
        smooth={true}
        className="flex items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all cursor-pointer
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
      {/* Scroll to Contact Section */}
      <Link
        aria-label="Go on and contact me by filling an email-form"
        to={"contact"}
        smooth={true}
        className="flex items-center justify-center p-3 bg-transparent rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple group
          transition-all cursor-pointer
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
