import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SecretGame from "./pages/SecretGame";
import { BtnsContainer } from "./components/btnsContainer";
import Lumi from "./pages/Lumiflex";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/lumi" ? <BtnsContainer /> : null}
      {pathname !== "/" &&
      pathname !== "/secret-game" &&
      pathname !== "/lumi" ? (
        <Navbar />
      ) : null}
      <Routes>
        <Route path={"/lumi"} element={<Lumi />} />
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Landing />} />
        <Route path={"/about-me"} element={<AboutMe />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/secret-game"} element={<SecretGame />} />
      </Routes>
      {pathname !== "/" &&
      pathname !== "/secret-game" &&
      pathname !== "/lumi" ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
