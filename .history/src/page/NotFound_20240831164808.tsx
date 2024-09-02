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
      className={`h-[92vh] select-none ${
        theme === "light" ? "" : "bg-darkTheme text-white"
      }`}
    >
      <div className="flex justify-center items-center flex-col py-4">
        <span className="text-[9.5rem] hover:text-purple transition-all">
          404
        </span>
        <span className="text-[2rem]">" {pathname} "</span>
        <p className="text-[2rem]">{content?.notFound[language].title}</p>
        <div
          className={`flex flex-col ${
            theme === "light" ? "text-darkTheme hover:text-white" : "text-white"
          } text-[1.2rem] mt-10 font-semibold `}
        >
          <Link
            aria-label="A link to the landing page"
            className=" border-2 border-purple py-1 px-4 rounded-full hover:bg-purple transition-all"
            to={"/"}
          >
            {content?.notFound[language].tryUrls}
          </Link>
        </div>
        <Secret />
      </div>
    </section>
  );
}

const name = "vale";
const name2 = "nico";
const name3 = "nico";

if (name.includes(name2)) {
  console.log("esta incluido");
} else if (name.includes(name3)) {
  console.log(" no esta incluido");
}
