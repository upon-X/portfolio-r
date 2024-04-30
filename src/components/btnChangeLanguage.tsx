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
    <div className="flex absolute top-2 right-4">
      <button
        onClick={handleLanguageChange}
        className="flex justify-center items-center  py-1"
      >
        {language === "es" ? (
          <img
            className="opacity-70 hover:opacity-100"
            src={FlagES}
            alt="Español"
          />
        ) : (
          <img
            className="opacity-70 hover:opacity-100"
            src={FlagGB}
            alt="English"
          />
        )}
      </button>
    </div>
  );
};
