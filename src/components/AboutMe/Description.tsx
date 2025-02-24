import { useTranslation } from "../../context/TranslationContext";

export const Description = () => {
  const { content, language } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-start text-lg leading-7">
      <h4 className="font-semibold text-2xl">
        {content?.aboutMe[language].shortDesc.title}
      </h4>
      <div className="flex flex-col gap-3">
        <p>
          <span className={`font-semibold text-white`}>
            {content?.aboutMe[language].shortDesc.p1Highlight}
          </span>
          {content?.aboutMe[language].shortDesc.p1Last}
        </p>
        <p>
          {content?.aboutMe[language].shortDesc.p2First}
          <span className={`font-semibold text-white`}>
            {content?.aboutMe[language].shortDesc.p2Highlight}
          </span>
          {content?.aboutMe[language].shortDesc.p2Last}
        </p>
        <p>
          {content?.aboutMe[language].shortDesc.p3First}
          <span className={`font-semibold text-white`}>
            {content?.aboutMe[language].shortDesc.p3Highlight}
          </span>
          {content?.aboutMe[language].shortDesc.p3Second}
          <span className={`font-semibold text-white`}>
            {content?.aboutMe[language].shortDesc.p3Hightlight2}
          </span>
        </p>
      </div>
    </div>
  );
};
