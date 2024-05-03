import { useLocation } from "react-router-dom";
import { useTranslation } from "../context/TranslationContext";

export default function NotFound() {
  const { language, content } = useTranslation();
  const { pathname } = useLocation();
  return (
    <div className="h-[84vh] select-none">
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
        <span className="text-[2rem]">{pathname}</span>
        <p className="text-[2rem]">{content?.notFound[language].title}</p>
      </div>
    </div>
  );
}
