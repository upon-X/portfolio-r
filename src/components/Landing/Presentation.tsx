import { useTranslation } from "../../context/TranslationContext";

export default function Presentation() {
  const { language, content } = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="uppercase text-8xl font-medium font-juliusFF -mb-8">
          Valentino Micheloni
        </h1>
        <h2 className="flex items-center justify-center gap-1 text-white bg-purple w-full font-semibold text-5xl uppercase font-jostFF">
          <span className="font-josefinFF">{"<"}</span>
          {content?.landing[language].jobTitle}
          <span className="font-josefinFF">{">"}</span>
        </h2>
      </div>
    </div>
  );
}
