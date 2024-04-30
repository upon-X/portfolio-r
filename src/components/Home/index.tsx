import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Projects from "../Projects";
import LandingView from "./landingView";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <LandingView />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
