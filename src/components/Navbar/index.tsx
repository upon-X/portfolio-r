import { useTranslation } from "../../context/TranslationContext";

export default function Navbar() {
  const { language } = useTranslation();
  return (
    <nav className="flex items-center justify-around h-[10vh]">
      <button className="font-semibold text-xl hover:bg-transparent cursor-default hover:text-black">
        VM
      </button>
      <div className="flex items-center gap-3">
        <button>{language === "es" ? "CONTACTO" : "CONTACT"}</button>
      </div>
    </nav>
  );
}
