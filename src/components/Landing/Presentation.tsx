import { useTranslation } from "../../context/TranslationContext";

export default function Presentation() {
  const { language, content } = useTranslation();

  return (
    <div className="flex flex-col items-center select-none">
      <div className="flex flex-col items-center text-center">
        <h1
          className={`uppercase text-6xl font-medium font-juliusFF 2xl:-mb-5 whitespace-nowrap 
        2xl:text-7xl xl:-mb-4
        lg:-mb-2
        md:whitespace-normal md:leading-[1.1]
        sm:text-5xl sm:whitespace-normal sm:leading-[1.1] 
        drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]
        text-white
        `}
        >
          Valentino Micheloni
        </h1>
        <div className=" bg-purple w-full ">
          <h2
            className={`flex items-center justify-center gap-1 text-white font-semibold text-4xl uppercase font-jostFF whitespace-nowrap 
          xl:text-3xl
          lg:text-2xl
          md:text-2xl
          sm:text-xl sm:px-1
          drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]
          `}
          >
            <span className="font-josefinFF sm:hidden">{"<"}</span>
            {content?.landing[language].jobTitle}
            <span className="font-josefinFF sm:hidden">{">"}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
