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
      id="ChangeColorTheme"
      aria-label="Change Color Theme"
      name="Change Color Theme"
      onClick={handleThemeToggle}
      className={`text-2xl rounded-full p-2 group border-2 ${
        theme === "light" ? "border-darkTheme" : "border-white"
      } hover:border-purple md:hover:border-darkTheme md:border-white sm:hover:border-darkTheme sm:border-white
      `}
    >
      {theme === "light" ? (
        <FaMoon className="text-darkTheme group-hover:text-purple md:text-white sm:text-white md:group-hover:text-darkTheme sm:group-hover:text-darkTheme" />
      ) : (
        <FaSun className="text-white group-hover:text-purple md:text-white sm:text-white md:group-hover:text-darkTheme sm:group-hover:text-darkTheme" />
      )}
    </button>
  );
};
