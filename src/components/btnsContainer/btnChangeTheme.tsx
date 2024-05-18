import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";
export const BtnChangeTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <button
      id="Change Color Theme"
      aria-label="Change Color Theme"
      data-aos="fade-in"
      name="Change Color Theme"
      onClick={handleThemeToggle}
      className={`text-2xl rounded-full p-2 group border-2 ${
        theme === "light" ? "border-darkTheme" : "border-white"
      } hover:border-purple`}
    >
      {theme === "light" ? (
        <FaMoon className="text-darkTheme group-hover:text-purple" />
      ) : (
        <FaSun className="text-white group-hover:text-purple" />
      )}
    </button>
  );
};
