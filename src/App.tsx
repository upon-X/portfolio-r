import { Route, Routes, useLocation } from "react-router-dom";
import { BtnChangeLanguage } from "./components/btnChangeLanguage";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HolaMundo from "./pages/HolaMundo";
import HelloWorld from "./pages/HelloWorld";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/helloworld" && pathname !== "/holamundo" ? (
        <BtnChangeLanguage />
      ) : null}
      {pathname !== "/" &&
      pathname !== "/helloworld" &&
      pathname !== "/holamundo" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Landing />} />
        <Route path={"/aboutme"} element={<AboutMe />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/helloworld"} element={<HelloWorld />} />
        <Route path={"/holamundo"} element={<HolaMundo />} />
      </Routes>
      {pathname !== "/" &&
      pathname !== "/helloworld" &&
      pathname !== "/holamundo" ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
