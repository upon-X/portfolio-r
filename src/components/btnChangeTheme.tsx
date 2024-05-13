import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

export const BtnChangeTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleThemeToggle} className="text-xl">
      {theme === "light" ? <FaMoon /> : <FaSun className="text-white" />}
    </button>
  );
};
