import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  const { language, content } = useTranslation();
  const { theme } = useTheme();
  const linkedinUrl = "https://www.linkedin.com/in/valentino-micheloni/";
  const githubUrl = "https://github.com/upon-X";

  return (
    <footer
      className={`flex justify-center items-center gap-4 sm:flex-col sm:text-center ${
        theme === "light"
          ? "bg-transparent text-darkTheme"
          : "bg-darkTheme text-white"
      }text-lg md:text-base sm:text-base h-[8vh] p-6 sm:p-16`}
    >
      <p
        className={` ${
          theme === "light"
            ? "bg-transparent text-darkTheme"
            : "bg-darkTheme text-white"
        }`}
      >
        {content?.footer[language].rightsReserved}
      </p>
      <div
        className={`flex gap-3 text-3xl md:text-2xl sm:text-2xl ${
          theme === "light" ? "text-darkTheme" : "text-white"
        }`}
      >
        <a target="_blank" href={githubUrl}>
          <FaGithub />
        </a>
        <a target="_blank" href={linkedinUrl}>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};
