import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../context/TranslationContext";
import { Secret } from "../components/Secret/btnToSecret";
import { useTheme } from "../context/ThemeContext";

export default function NotFound() {
  const { language, content } = useTranslation();
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return (
    <section
      className={`h-[84vh] select-none ${
        theme === "light" ? "" : "bg-darkTheme text-white"
      }`}
    >
      <div className="flex justify-center items-center flex-col">
        <div>
          <span className="text-[10rem] hover:text-purple transition-all">
            4
          </span>
          <span className="text-[10rem] hover:text-purple transition-all">
            0
          </span>
          <span className="text-[10rem] hover:text-purple transition-all">
            4
          </span>
        </div>
        <span className="text-[2rem]">" {pathname} "</span>
        <p className="text-[2rem]">{content?.notFound[language].title}</p>
        <p className="text-[1.2rem]">{content?.notFound[language].tryUrls}</p>
        <div className="flex flex-col text-purple text-[1.2rem]">
          <Link to={"/"}>"/"</Link>
          <Link to={"/about-me"}>"/about-me"</Link>
          <Link to={"/projects"}>"/projects"</Link>
          <Link to={"/contact"}>"/contact"</Link>
        </div>
        <Secret />
      </div>
    </section>
  );
}
