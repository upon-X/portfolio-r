import { useTranslation } from "../../context/TranslationContext";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { myTechAndSoftSkills } from "../../translations/skills";

export const MySkils = () => {
  const { content, language } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="flex flex-col gap-6">
      <h5 data-aos="fade-left" className="font-semibold text-2xl">
        {content?.aboutMe[language].mySkills.title}
      </h5>
      <div
        data-aos="fade-left"
        className="flex flex-wrap gap-3 text-xl select-none"
      >
        {myTechAndSoftSkills.map((skill, index) => (
          <div
            key={index}
            className={`border-2 border-purple rounded-md px-[0.6rem] py-[0.3rem] font-semibold text-purple hover:bg-purple hover:text-white hover:-translate-y-1 transition-all`}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
