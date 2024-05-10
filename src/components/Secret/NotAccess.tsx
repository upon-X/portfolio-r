import { FaBan, FaArrowLeft } from "react-icons/fa6";
import { useTranslation } from "../../context/TranslationContext";
import { Link } from "react-router-dom";

export const NotAccess = () => {
  const { language, content } = useTranslation();
  return (
    <p className="flex justify-center items-center flex-col gap-8 sm:text-center h-[100vh] text-xl font-semibold uppercase">
      <span className="flex items-center gap-2">
        <span className="text-red">
          <FaBan />
        </span>
        {content?.secretGame[language].notAccess}
        <span className="text-red">
          <FaBan />
        </span>
      </span>
      <Link
        to="/"
        className="border rounded-full p-2 flex items-center gap-1 text-base"
      >
        <FaArrowLeft />
        <p className="text-lg">{content?.secretGame[language].goBack}</p>
      </Link>
    </p>
  );
};
