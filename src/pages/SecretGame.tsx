import { FaBan } from "react-icons/fa6";
import { useTranslation } from "../context/TranslationContext";

export default function SecretGame() {
  const { language } = useTranslation();
  const token = sessionStorage.getItem("token-to-secret-game");
  if (token === "true") {
    return <>true</>;
  } else {
    return (
      <p className="flex justify-center items-center sm:flex-col sm:text-center h-[100vh] text-xl font-semibold uppercase">
        <span className="flex items-center gap-2">
          <span className="text-red">
            <FaBan />
          </span>
          {language === "es"
            ? "No tienes acceso a esta pagina"
            : "You do not have access to this page"}
          <span className="text-red">
            <FaBan />
          </span>
        </span>
      </p>
    );
  }
}
