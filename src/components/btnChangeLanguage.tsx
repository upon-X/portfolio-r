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
    <div className="flex absolute top-4 right-6">
      <button
        onClick={handleLanguageChange}
        className="flex justify-center items-center"
      >
        {language === "es" ? (
          <div>
            <img
              className="opacity-70 hover:opacity-100 min-w-[30px]"
              src={FlagES}
              alt="Español"
            />
          </div>
        ) : (
          <div>
            <img
              className="opacity-70 hover:opacity-100 min-w-[30px]"
              src={FlagGB}
              alt="English"
            />
          </div>
        )}
      </button>
    </div>
  );
};
