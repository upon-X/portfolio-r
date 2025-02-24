import { useTranslation } from "../../context/TranslationContext";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  const { language, content } = useTranslation();

  const linkedinUrl = "https://www.linkedin.com/in/valentino-micheloni/";
  const githubUrl = "https://github.com/upon-X";
  return (
    <footer
      className={`flex justify-center items-center gap-4 sm:flex-col sm:text-center
      bg-darkTheme text-white text-lg md:text-base sm:text-base h-[8rem] p-6 sm:p-16`}
    >
      <p className={`text-white`}>{content?.footer[language].rightsReserved}</p>
      <div className={`flex gap-3 text-3xl md:text-2xl sm:text-2xl text-white`}>
        <a
          aria-label="Visit my github account"
          target="_blank"
          href={githubUrl}
          className="hover:text-purple transition-all"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Visit my linkedIn account"
          target="_blank"
          href={linkedinUrl}
          className="hover:text-purple transition-all"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};
