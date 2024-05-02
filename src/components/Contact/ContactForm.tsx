// import { useState } from "react";
import { useTranslation } from "../../context/TranslationContext";

export const ContactForm = () => {
  // const [name, setName] = useState("");
  const { language, content } = useTranslation();
  return (
    <form
      id="form"
      className="flex flex-col items-end gap-4 bg-white h-[450px] text-xl rounded-lg shadow-lg p-8
      2xl:w-[800px] 2xl:grid 2xl:grid-cols-2 2xl:grid-row-3
      "
    >
      <div className="flex flex-col gap-1 w-full">
        <label>
          {content?.contact[language].form.name}
          <span className="text-red ml-2">error</span>
        </label>
        <input
          className="input_name bg-[#fafafa]"
          type="text"
          id="form_name"
          name="form_name"
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label>
          {content?.contact[language].form.email}
          <span className="text-red ml-2">error</span>
        </label>
        <input
          className="input_email bg-[#fafafa]"
          type="mail"
          id="form_email"
          name="form_email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />
      </div>
      <div className="flex flex-col gap-1 w-full 2xl:col-span-2">
        <label>
          {content?.contact[language].form.message}
          <span className="text-red ml-2">error</span>
        </label>
        <textarea
          className="min-h-[100px] max-h-[200px] bg-[#fafafa] text-base p-2"
          id="form_message"
          name="form_message"
          minLength={10}
          maxLength={1200}
          required
        ></textarea>
      </div>
      <div className=" flex justify-center col-start-2 ">
        <button
          className="px-14 py-2 uppercase font-figtreeFF font-semibold transition-all 2xl:w-full
          active:scale-95 
          border-2 border-purple rounded-lg hover:bg-purple hover:text-white
        "
        >
          {content?.contact[language].form.send}
        </button>
      </div>
    </form>
  );
};
