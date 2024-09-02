import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  const { language, content } = useTranslation();
  const { theme } = useTheme();
  const linkedinUrl = "https://www.linkedin.com/in/valentino-micheloni/";
  const githubUrl = "https://github.com/upon-X";
  const maltUrl = "https://www.malt.es/profile/valemiche";
  return (
    <footer
      className={`flex justify-center items-center gap-4 sm:flex-col sm:text-center ${
        theme === "light"
          ? "bg-transparent text-darkTheme"
          : "bg-darkTheme text-white"
      }text-lg md:text-base sm:text-base h-[8rem] p-6 sm:p-16`}
    >
      <p className={` ${theme === "light" ? "text-darkTheme" : "text-white"}`}>
        {content?.footer[language].rightsReserved}
      </p>
      <div
        className={`flex gap-3 text-3xl md:text-2xl sm:text-2xl ${
          theme === "light" ? "text-darkTheme" : "text-white"
        }`}
      >
        <a
          aria-label="Visit my github account"
          target="_blank"
          href={githubUrl}
        >
          <FaGithub />
        </a>
        <a
          aria-label="Visit my linkedIn account"
          target="_blank"
          href={linkedinUrl}
        >
          <FaLinkedin />
        </a>
        <a aria-label="Visit my malt account" target="_blank" href={maltUrl}>
          <img className="w-[32px]" src="/malt_logo.webp" />
        </a>
      </div>
    </footer>
  );
};
