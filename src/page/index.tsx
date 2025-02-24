import React from "react";

import AboutMe from "./AboutMe";
import Landing from "./Landing";

const Projects = React.lazy(() => import("./Projects"));
const Contact = React.lazy(() => import("./Contact"));

export default function Home() {
  return (
    <main className={`flex flex-col gap-10 bg-darkTheme`}>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
