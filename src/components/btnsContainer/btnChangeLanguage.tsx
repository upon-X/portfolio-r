import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext"; // Verifica que el nombre del archivo sea correcto.
import { LanguageType } from "../../types/interfaceContext";

export const BtnChangeLanguage: React.FC = () => {
  const { language, setLanguage } = useContext(TranslationContext);

  const handleLanguageChange = () => {
    const newLanguage: LanguageType = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
  };
  return (
    <button
      key="change language button"
      id="ChangeLanguageTheme"
      name="change language"
      aria-label="Change Language"
      onClick={handleLanguageChange}
      className={`w-[44px] h-[44px] p-1 flex justify-center items-center border-2 border-white overflow-hidden rounded-full hover:border-purple
      md:hover:border-darkTheme md:border-white sm:hover:border-darkTheme sm:border-white`}
    >
      <img
        className="rounded-full w-[44px] h-[36px] aspect-video"
        src={language === "es" ? "/flagES.webp" : "/flagGB.webp"}
        alt={language === "es" ? "Version en español" : "English version"}
      />
    </button>
  );
};
