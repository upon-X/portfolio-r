import { useTheme } from "../context/ThemeContext";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";

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
