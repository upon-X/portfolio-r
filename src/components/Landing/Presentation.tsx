import { useEffect } from "react";
import { useTranslation } from "../../context/TranslationContext";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Presentation() {
  const { language, content } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="flex flex-col items-center select-none">
      <div
        data-aos="fade-down"
        className="flex flex-col items-center text-center"
      >
        <h1
          className="uppercase text-8xl font-medium font-juliusFF 2xl:-mb-6 whitespace-nowrap 
        xl:text-7xl xl:-mb-4
        lg:text-6xl lg:-mb-2
        md:text-7xl md:whitespace-normal md:leading-[1.1]
        sm:text-6xl sm:whitespace-normal sm:leading-[1.1]
        "
        >
          Valentino Micheloni
        </h1>
        <h2
          className="flex items-center justify-center gap-1 text-white bg-purple w-full font-semibold text-5xl uppercase font-jostFF whitespace-nowrap 
          xl:text-4xl
          lg:text-3xl
          md:text-3xl
          sm:text-2xl
        "
        >
          <span className="font-josefinFF sm:hidden">{"<"}</span>
          {content?.landing[language].jobTitle}
          <span className="font-josefinFF sm:hidden">{">"}</span>
        </h2>
      </div>
    </div>
  );
}
