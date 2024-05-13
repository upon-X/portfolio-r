import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";

export const BtnChangeTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleThemeToggle}
      className={`text-2xl rounded-full p-1 group`}
    >
      {theme === "light" ? (
        <FaMoon className="text-darkTheme group-hover:text-purple" />
      ) : (
        <FaSun className="text-white group-hover:text-purple" />
      )}
    </button>
  );
};
