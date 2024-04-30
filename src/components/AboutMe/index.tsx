import { useTranslation } from "../../context/TranslationContext";
import { Description } from "./Description";
import { MySkils } from "./MySkills";
import myPhoto from "../../assets/myphoto.webp";

export default function AboutMe() {
  const { content, language } = useTranslation();
  return (
    <section className="flex flex-col gap-10 items-center">
      <h2 className="flex flex-col gap-3 items-center uppercase">
        {content?.aboutMe[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h2>
      <h3 className="text-center">{content?.aboutMe[language].subtitle}</h3>
      <div className="w-[250px] overflow-hidden rounded-full border-[4px] border-purple">
        <img src={myPhoto} alt="Valentino Micheloni Photo" />
      </div>
      <div className="grid grid-cols-2 gap-20">
        <Description />
        <MySkils />
      </div>
    </section>
  );
}
