import { useTranslation } from "../../context/TranslationContext";
import CarouselOfProjects from "../EmblaCarousel";

export default function Projects() {
  const { content, language } = useTranslation();
  return (
    <section className="flex flex-col gap-10 h-[77.5vh] items-center">
      <h3 className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold">
        {content?.projects[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      <h4 className="text-center text-2xl">
        {content?.projects[language].subtitle}
      </h4>
      <CarouselOfProjects />
    </section>
  );
}
