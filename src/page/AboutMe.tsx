import { useTranslation } from "../context/TranslationContext";
import { Description } from "../components/AboutMe/Description";
import { MySkils } from "../components/AboutMe/MySkills";
import myPhoto from "../assets/myphotonobg.webp";
import { useTheme } from "../context/ThemeContext";
import { Experience } from "../components/AboutMe/Experience";

export default function AboutMe() {
  const { content, language } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      id="about-me"
      className={`flex flex-col gap-10 items-center py-14
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
      <div className=" overflow-hidden rounded-full border-4 border-purple ">
        <img
          className="w-[230px] h-[230px] aspect-square"
          src={myPhoto}
          alt="Valentino Micheloni Photo"
        />
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <Experience />
        </div>
        <div>
          <Description />
        </div>
        <div className=" col-span-2">
          <MySkils />
        </div>
      </div>
    </section>
  );
}
