import { useTranslation } from "../../context/TranslationContext";
import { ProjectsCarousel } from "./ProjectsCarousel";

export default function Projects() {
  const { content, language } = useTranslation();
  return (
    <section className="flex flex-col gap-10 items-center">
      <h2 className="flex flex-col gap-3 items-center uppercase">
        {content?.projects[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h2>
      <h3 className="text-center">{content?.projects[language].subtitle}</h3>
      <div className="">
        <ProjectsCarousel />
      </div>
    </section>
  );
}
