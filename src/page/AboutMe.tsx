import { useTranslation } from "../context/TranslationContext";
import { Description } from "../components/AboutMe/Description";
import { MySkils } from "../components/AboutMe/MySkills";
import { useTheme } from "../context/ThemeContext";
import { Experience } from "../components/AboutMe/Experience";

export default function AboutMe() {
  const { content, language } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      id="about-me"
      className={`flex flex-col gap-24 items-center py-14
      ${theme === "light" ? "" : "bg-darkTheme text-white"}
      `}
    >
      <h3 className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold">
        {content?.aboutMe[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      {/* <h4 className="text-center text-2xl">
        {content?.aboutMe[language].subtitle}
      </h4> */}

      <div
        className="flex flex-col gap-16
        2xl:grid 2xl:grid-cols-2
        xl:grid xl:grid-cols-2
        "
      >
        <div className="order-1">
          <Experience />
        </div>
        <div className="order-2">
          <Description />
        </div>
        <div className="order-3 col-span-2">
          <MySkils />
        </div>
      </div>
    </section>
  );
}
