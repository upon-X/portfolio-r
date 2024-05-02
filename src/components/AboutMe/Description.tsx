import { useTranslation } from "../../context/TranslationContext";
export const Description = () => {
  const { content, language } = useTranslation();
  const linkedInUrl = "https://www.linkedin.com/in/valentino-micheloni/";

  return (
    <div className="flex flex-col gap-6 items-start text-xl leading-8">
      <h5 className="font-semibold text-2xl">
        {content?.aboutMe[language].shortDesc.title}
      </h5>
      <div className="flex flex-col gap-3">
        <p>
          {content?.aboutMe[language].shortDesc.p1First}
          <span className="font-semibold text-gray">
            {content?.aboutMe[language].shortDesc.p1Highlight}
          </span>
          {content?.aboutMe[language].shortDesc.p1Last}
        </p>
        <p>
          {content?.aboutMe[language].shortDesc.p2First}
          <span className="font-semibold text-gray">
            {content?.aboutMe[language].shortDesc.p2Highlight}
          </span>
          {content?.aboutMe[language].shortDesc.p2Second}
          {/* LinkedIn link */}
          <a
            target="_blank"
            href={linkedInUrl}
            className="font-semibold text-purple border-b-[1px]"
          >
            {content?.aboutMe[language].shortDesc.p2Highlight2}
          </a>
          {content?.aboutMe[language].shortDesc.p2Last}
        </p>
        <p>
          {content?.aboutMe[language].shortDesc.p3First}
          <span className="font-semibold text-gray">
            {content?.aboutMe[language].shortDesc.p3Highlight}
          </span>
          {content?.aboutMe[language].shortDesc.p3Second}
          <span className="font-semibold text-gray">
            {content?.aboutMe[language].shortDesc.p3Hightlight2}
          </span>
        </p>
      </div>
    </div>
  );
};
