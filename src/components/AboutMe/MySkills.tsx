import { useTranslation } from "../../context/TranslationContext";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "../../context/ThemeContext";
export const MySkils = () => {
  const { content, language } = useTranslation();
  const { theme } = useTheme();
  const Skills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Firebase",
    "GIT",
    "Vite",
    "Github",
    "VSCode",
    "Vercel",
    "Netlify",
    "Railway",
    "Cloudinary",
    "Webflow",
    "Figma",
    "Scrum",
  ];
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
        {Skills.map((skill, index) => (
          <div
            key={index}
            className={`border-2 border-purple rounded-md px-[0.6rem] py-[0.3rem] font-semibold text-gray hover:bg-purple hover:text-white hover:-translate-y-1 transition-all
            ${theme === "light" ? "" : "text-white"}
            `}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
