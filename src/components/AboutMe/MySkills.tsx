import { useTranslation } from "../../context/TranslationContext";
import { myTechAndSoftSkills } from "../../translations/skills";
import { useTheme } from "../../context/ThemeContext";

export const MySkils = () => {
  const { content, language } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-semibold text-2xl">
        {content?.aboutMe[language].mySkills.title}
      </h4>
      <div className="flex flex-wrap gap-3 text-xl select-none">
        {myTechAndSoftSkills.map((skill, index) => (
          <div
            key={index}
            className={`border-2 border-purple rounded-md px-[0.6rem] py-[0.3rem] font-semibold ${
              theme === "light" ? "text-darkTheme" : "text-[#ebebeb]"
            } hover:bg-purple hover:text-white hover:-translate-y-1 transition-all`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
