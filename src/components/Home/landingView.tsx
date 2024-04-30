import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "../../context/TranslationContext";

export default function LandingView() {
  const { language, content } = useTranslation();
  const linkedinUrl = "https://www.linkedin.com/in/valentino-micheloni/";
  const githubUrl = "https://github.com/upon-X";
  return (
    <section className="h-[90vh] flex flex-col items-center bg-[url('/bglanding.webp')]">
      <div className="py-28 flex flex-col items-center gap-10 text-center">
        <h1 className="uppercase text-6xl font-medium mb-8">
          {content?.home[language].title}
        </h1>
        <h2 className="text-gray font-semibold text-3xl px-40">
          {content?.home[language].subtitle}
        </h2>
        <div className="flex w-[300px] justify-evenly text-purple text-5xl">
          <a
            className=" border-4 border-purple rounded-lg p-1 hover:border-white hover:text-white hover:bg-purple hover:rounded-xl transition-all duration-300"
            target="_blank"
            href={githubUrl}
          >
            <FaGithub />
          </a>
          <a
            className=" border-4 border-purple rounded-lg p-1 hover:border-white hover:text-white hover:bg-purple hover:rounded-xl transition-all duration-300"
            target="_blank"
            href={linkedinUrl}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="mouse_position">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
