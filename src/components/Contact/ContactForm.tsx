/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "../../context/TranslationContext";
import { sendAlert } from "../sweetAlerts";

export const ContactForm = () => {
  const serviceId = "service_aa96h9p";
  const templateId = "template_ge9fviy";
  const publicKey = "lj12FtNYFUx2xuGv1";

  const { language, content } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };
    if (!name || !email || !message) {
      sendAlert(language === "es" ? "corrige" : "fix");
    } else {
      setIsSubmitting(true);
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((res) => {
          console.log(res);
          setName("");
          setEmail("");
          setMessage("");
          setIsSubmitting(false);
          sendAlert(language === "es" ? "bien" : "good");
        })
        .catch((error) => {
          sendAlert(language === "es" ? "mal" : "bad");
          setIsSubmitting(false);
          console.error("Error", error);
        });
    }
  };
  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="flex flex-col items-end gap-4 bg-white h-[450px] text-xl rounded-lg shadow-lg p-8
      2xl:w-[800px] 2xl:grid 2xl:grid-cols-2 2xl:grid-row-3
      "
    >
      <div className="flex flex-col gap-1 w-full">
        <label>{content?.contact[language].form.name}</label>
        <input
          className="input_name bg-[#fafafa]"
          type="text"
          id="form_name"
          name="form_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label>{content?.contact[language].form.email}</label>
        <input
          className="input_email bg-[#fafafa]"
          type="email"
          id="form_email"
          name="form_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />
      </div>
      <div className="flex flex-col gap-1 w-full 2xl:col-span-2">
        <label>{content?.contact[language].form.message}</label>
        <textarea
          className="min-h-[200px] max-h-[200px] bg-[#fafafa] text-base p-2"
          id="form_message"
          name="form_message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minLength={10}
          maxLength={1200}
          required
        />
      </div>
      <div className=" flex justify-center col-start-2 ">
        <button
          type="submit"
          className="px-14 py-2 uppercase font-figtreeFF font-semibold transition-all 2xl:w-full
          active:scale-95 
          border-2 border-purple rounded-lg hover:bg-purple hover:text-white
        "
        >
          {isSubmitting
            ? content?.contact[language].form.sending
            : content?.contact[language].form.send}
        </button>
      </div>
    </form>
  );
};
