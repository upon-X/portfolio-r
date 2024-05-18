import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./page/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SecretGame from "./page/SecretGame";
import { BtnsContainer } from "./components/btnsContainer";
import Lumi from "./page/Lumiflex";
import Home from "./page";
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
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
        <Route path={"/"} element={<Home />} />
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
