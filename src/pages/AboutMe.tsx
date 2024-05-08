import { useTranslation } from "../context/TranslationContext";
import { Description } from "../components/AboutMe/Description";
import { MySkils } from "../components/AboutMe/MySkills";
import myPhoto from "../assets/myphotonobg.png";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AboutMe() {
  const { content, language } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <section className="flex flex-col gap-10 items-center mb-20">
      <h3
        data-aos="fade-down"
        className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold"
      >
        {content?.aboutMe[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      <h4 data-aos="fade-down" className="text-center text-2xl">
        {content?.aboutMe[language].subtitle}
      </h4>
      <div
        data-aos="fade-in"
        className="w-[230px] overflow-hidden rounded-full border-4 border-purple "
      >
        <img src={myPhoto} alt="Valentino Micheloni Photo" />
      </div>
      <div className="grid grid-cols-2 gap-20">
        <Description />
        <MySkils />
      </div>
    </section>
  );
}
