import { useTranslation } from "../../context/TranslationContext";
import CarouselOfProjects from "../EmblaCarousel";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Projects() {
  const { content, language } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <section className="flex flex-col gap-10 h-[84vh] items-center">
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
      <div data-aos="fade-up">
        <CarouselOfProjects />
      </div>
    </section>
  );
}
