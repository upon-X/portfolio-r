import React, { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext"; // Verifica que el nombre del archivo sea correcto.
import { LanguageType } from "../types/interfaceContext";
import FlagES from "/flagES.webp";
import FlagGB from "/flagGB.webp";

export const BtnChangeLanguage: React.FC = () => {
  const { language, setLanguage } = useContext(TranslationContext);

  const handleLanguageChange = () => {
    const newLanguage: LanguageType = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
  };

  return (
    <div className="flex absolute top-6 right-8 scale-150">
      <button
        onClick={handleLanguageChange}
        className="flex justify-center items-center w-[20px] h-[20px] overflow-hidden rounded-full"
      >
        {language === "es" ? (
          <img
            className="opacity-70 hover:opacity-100 min-w-[34px]"
            src={FlagES}
            alt="Español"
          />
        ) : (
          <img
            className="opacity-70 hover:opacity-100 min-w-[34px]"
            src={FlagGB}
            alt="English"
          />
        )}
      </button>
    </div>
  );
};
