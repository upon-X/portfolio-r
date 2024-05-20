import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./page/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SecretGame from "./page/SecretGame";
import { BtnsContainer } from "./components/btnsContainer";
import Home from "./page";

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <BtnsContainer />
      {pathname !== "/secret-game" ? <Navbar /> : null}
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/secret-game"} element={<SecretGame />} />
      </Routes>
      {pathname !== "/secret-game" ? <Footer /> : null}
    </>
  );
}
