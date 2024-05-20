import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";

// Mediante la prop paso el numero del index en el array que hay en content, entonces se renderiza el proyecto
type Props = {
  projectIndex: number;
};

export const ProjectComponent = ({ projectIndex }: Props) => {
  const { content, language } = useTranslation();
  const { theme } = useTheme();
  return (
    <div
      className=" grid grid-cols-2 min-h-[400px] select-none
      lg:flex lg:flex-col
      md:flex md:flex-col
      sm:flex sm:flex-col
      max-w-[98vw]
      "
    >
      <div
        className={`${
          projectIndex % 2 !== 0 ? " col-start-2" : ""
        } flex flex-col items-start justify-center gap-3 p-10 sm:p-2 sm:pb-6`}
      >
        <span className="flex gap-8 sm:flex-wrap sm:gap-4">
          <p
            className="text-3xl font-semibold whitespace-nowrap 
            md:text-2xl
            sm:text-2xl
            "
          >
            {content?.projects[language].everyProject[projectIndex].title}
          </p>
          <a
            aria-label="Visit the real-time deploy of this project"
            className="text-purple border rounded-full text-xl flex justify-center items-center gap-2 font-normal transition-all px-4 hover:bg-purple hover:text-white hover:border-transparent"
            target="_blank"
            href={content?.projects[language].everyProject[projectIndex].deploy}
          >
            Deploy
            <div className="text-base">
              <FaArrowUpRightFromSquare />
            </div>
          </a>
        </span>
        <p
          className="text-xl
          md:text-lg
          sm:text-lg
          "
        >
          {content?.projects[language].everyProject[projectIndex].description}
        </p>
        <div className="flex justify-start gap-2 flex-wrap mt-4">
          {content?.projects[language].everyProject[
            projectIndex
          ].skillsUsed.map((skill: string, index: number) => (
            <span
              key={index}
              className={`border-2 border-purple rounded-md text-lg py-1 px-2 font-semibold 
              sm:text-base
              ${theme === "light" ? "text-gray" : "text-purple"}
              hover:bg-purple hover:-translate-y-1 hover:text-white transition-all`}
            >
              {skill}
              {index <
              content.projects[language].everyProject[projectIndex].skillsUsed
                .length -
                1
                ? " "
                : ""}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${
          projectIndex % 2 !== 0 ? " col-start-1 row-start-1" : ""
        } 2xl:scale-90 flex items-center justify-end sm:justify-center md:justify-center lg:justify-center overflow-hidden`}
      >
        <img
          className="z-10 w-full max-h-3/4 aspect-video 
          lg:w-3/4
          md:w-3/4
          sm:w-3/4
          "
          src={content?.projects[language].everyProject[projectIndex].image}
          alt={`image of the project n${projectIndex}`}
        />
      </div>
    </div>
  );
};
