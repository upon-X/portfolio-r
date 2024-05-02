import { useTranslation } from "../../context/TranslationContext";

export const MySkils = () => {
  const { content, language } = useTranslation();
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

  return (
    <div className="flex flex-col gap-6">
      <h5 className="font-semibold text-2xl">
        {content?.aboutMe[language].mySkills.title}
      </h5>
      <div className="flex flex-wrap gap-3 text-xl select-none">
        {Skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 border-purple rounded-md px-[0.6rem] py-[0.3rem] font-semibold text-gray hover:bg-purple hover:text-white hover:-translate-y-1 transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
