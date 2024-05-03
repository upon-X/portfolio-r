import { useTranslation } from "../../context/TranslationContext";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const { language, content } = useTranslation();
  const linkedinUrl = "https://www.linkedin.com/in/valentino-micheloni/";
  const githubUrl = "https://github.com/upon-X";

  return (
    <footer className="flex justify-center items-center gap-4 bg-black text-white text-lg md:text-base sm:text-base h-[8vh] p-6">
      <p>{content?.footer[language].rightsReserved}</p>
      <div className="flex gap-3 text-white text-3xl md:text-2xl sm:text-2xl">
        <a target="_blank" href={githubUrl}>
          <FaGithub />
        </a>
        <a target="_blank" href={linkedinUrl}>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
