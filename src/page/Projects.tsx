import { useTranslation } from "../context/TranslationContext";
import { ProjectComponent } from "../components/Projects/ProjectComponent";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { content, language } = useTranslation();
  const { theme } = useTheme();
  return (
    <section
      id="projects"
      className={`flex flex-col gap-10 items-center py-14
    ${theme === "light" ? "" : "bg-darkTheme text-white"}
    `}
    >
      <h3 className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold text-center">
        {content?.projects[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      <div className="flex flex-col gap-10">
        {content?.projects[language].everyProject.map(
          (_project: undefined, index: number) => {
            return (
              <div>
                <ProjectComponent projectIndex={index} />
                {index !==
                  content.projects[language].everyProject.length - 1 && (
                  <hr
                    className={`mt-8 ${
                      theme === "light" ? "text-[#e9e9e9]" : "text-[#4d4d4d]"
                    } border-[1px]`}
                  />
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
