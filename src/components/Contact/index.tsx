import { useTranslation } from "../../context/TranslationContext";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  const { content, language } = useTranslation();
  return (
    <section className="flex flex-col gap-10 items-center h-[92vh]">
      <h2 className="flex flex-col gap-3 items-center uppercase">
        {content?.contact[language].title}
        <span className="w-[100px] border-b-[6px] rounded-full border-purple text-transparent"></span>
      </h2>
      <h3 className="text-center">{content?.contact[language].subtitle}</h3>
      <div className="">
        <ContactForm />
      </div>
    </section>
  );
}
