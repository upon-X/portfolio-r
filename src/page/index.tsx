import React from "react";
import { useTheme } from "../context/ThemeContext";
import AboutMe from "./AboutMe";
import Landing from "./Landing";

const Projects = React.lazy(() => import("./Projects"));
const Contact = React.lazy(() => import("./Contact"));

export default function Home() {
  const { theme } = useTheme();
  return (
    <main
      className={`flex flex-col gap-10 ${
        theme === "light" ? "bg-white" : "bg-darkTheme"
      }`}
    >
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
