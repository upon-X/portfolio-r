import { useTranslation } from "../../context/TranslationContext";
import { Description } from "./Description";
import { MySkils } from "./MySkills";
import myPhoto from "../../assets/myphotonobg.png";

export default function AboutMe() {
  const { content, language } = useTranslation();
  return (
    <section className="flex flex-col gap-10 items-center">
      <h3 className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold">
        {content?.aboutMe[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      <h4 className="text-center text-2xl">
        {content?.aboutMe[language].subtitle}
      </h4>
      <div className="w-[230px] overflow-hidden rounded-full border-4 border-purple hover:bg-purple hover:scale-105 hover:border-white transition-all">
        <img src={myPhoto} alt="Valentino Micheloni Photo" />
      </div>
      <div className="grid grid-cols-2 gap-20">
        <Description />
        <MySkils />
      </div>
    </section>
  );
}
