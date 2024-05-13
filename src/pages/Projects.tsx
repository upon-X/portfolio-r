import { useTranslation } from "../context/TranslationContext";
// import CarouselOfProjects from "../components/EmblaCarousel";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { ProjectComponent } from "../components/Projects/ProjectComponent";

export default function Projects() {
  const { content, language } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <section className="flex flex-col gap-10 items-center py-10">
      <h3
        data-aos="fade-down"
        className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold"
      >
        {content?.projects[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      <h4 data-aos="fade-down" className="text-center text-2xl">
        {content?.projects[language].subtitle}
      </h4>
      <div className="flex flex-col gap-10">
        {content?.projects[language].everyProject.map(
          (_project: undefined, index: number) => {
            return (
              <div data-aos="fade-up">
                <ProjectComponent projectIndex={index} />
                {index !==
                  content.projects[language].everyProject.length - 1 && (
                  <hr className="mt-8 text-[#e9e9e9] border-[1px]" />
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
