// import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "../../context/TranslationContext";

export default function Presentation() {
  const { language, content } = useTranslation();
  // const linkedinUrl = "https://www.linkedin.com/in/valentino-micheloni/";
  // const githubUrl = "https://github.com/upon-X";
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center text-center">
        <h1 className="uppercase text-8xl font-medium font-juliusFF -mb-8">
          Valentino Micheloni
        </h1>
        <h2 className="flex items-center justify-center gap-1 text-white bg-purple w-full font-semibold text-5xl uppercase font-jostFF">
          <span className="font-josefinFF">{"<"}</span>
          {content?.landing[language].jobTitle}
          <span className="font-josefinFF">{">"}</span>
        </h2>
        {/* <div className="flex w-[300px] justify-evenly text-purple text-5xl">
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
        </div> */}
      </div>
    </div>
  );
}
