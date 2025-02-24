import { useTranslation } from "../context/TranslationContext";
import { ContactForm } from "../components/Contact/ContactForm";

export default function Contact() {
  const { content, language } = useTranslation();

  return (
    <section
      id="contact"
      className={`flex flex-col gap-10 items-center py-14 h-[80vh] bg-darkTheme text-white`}
    >
      <h3 className="flex flex-col gap-3 items-center uppercase text-4xl font-semibold">
        {content?.contact[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h3>
      {/* <h4 className="text-center text-2xl">
        {content?.contact[language].subtitle}
      </h4> */}
      <div className="">
        <ContactForm />
      </div>
    </section>
  );
}
