import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "../context/TranslationContext";
import { Secret } from "../components/Secret/btnToSecret";

export default function NotFound() {
  const { language, content } = useTranslation();

  const { pathname } = useLocation();
  return (
    <section className={`h-[92vh] select-none bg-darkTheme text-white`}>
      <div className="flex justify-center items-center flex-col py-4">
        <span className="text-[9.5rem] hover:text-purple transition-all">
          404
        </span>
        <span className="text-[2rem]">" {pathname} "</span>
        <p className="text-[2rem]">{content?.notFound[language].title}</p>
        <div
          className={`flex flex-col "text-white" text-[1.2rem] mt-10 font-semibold `}
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
