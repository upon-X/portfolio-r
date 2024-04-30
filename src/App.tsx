import { Route, Routes } from "react-router-dom";
import { BtnChangeLanguage } from "./components/btnChangeLanguage";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <BtnChangeLanguage />
      <Routes>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/"} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
