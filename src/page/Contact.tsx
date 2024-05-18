import { useTranslation } from "../context/TranslationContext";
import { ContactForm } from "../components/Contact/ContactForm";
import "aos/dist/aos.css";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { content, language } = useTranslation();
  const { theme } = useTheme();
  return (
    <section
      id="contact"
      className={`flex flex-col gap-10 items-center py-14 h-[80vh]
    ${theme === "light" ? "" : "bg-darkTheme text-white"}
    `}
    >
      <h3
        data-aos="fade-down"
        className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold"
      >
        {content?.contact[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      {/* <h4 data-aos="fade-down" className="text-center text-2xl">
        {content?.contact[language].subtitle}
      </h4> */}
      <div data-aos="fade-up" className="">
        <ContactForm />
      </div>
    </section>
  );
}
