import { Route, Routes, useLocation } from "react-router-dom";
import { BtnChangeLanguage } from "./components/btnChangeLanguage";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound/NotFound";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <BtnChangeLanguage />
      {pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Landing />} />
        <Route path={"/aboutme"} element={<AboutMe />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      {pathname !== "/" ? <Footer /> : null}
    </>
  );
}

export default App;
