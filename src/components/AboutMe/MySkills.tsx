import { useTranslation } from "../../context/TranslationContext";

import { mappedSkills } from "../../types";

export const MySkils = () => {
  const { content, language } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-semibold text-2xl">
        {content?.aboutMe[language].mySkills.title}
      </h4>
      <div className="flex flex-col gap-6 text-xl sm:text-lg sm:gap-6 md:text-lg md:gap-6 select-none">
        {mappedSkills.map((skill, index) => (
          <div
            key={index}
            className={` min-w-0 min-h-1 p-[0.6rem] font-semibold flex flex-col gap-2 pl-4 border-l
                text-white hover:text-white hover:-translate-y-1 transition-all`}
          >
            <h4 className={`text-xl font-bold`}>{skill.category}</h4>
            <div className="flex gap-2 flex-wrap border-t pt-4 pb-2">
              {skill.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={`border-2 border-purple rounded-md px-[0.5rem] py-[0.2rem] font-semibold text-purple hover:bg-purple hover:text-white hover:-translate-y-1 transition-all`}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
