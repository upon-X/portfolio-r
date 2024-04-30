import { useTranslation } from "../../context/TranslationContext";

export default function Footer() {
  const { language, content } = useTranslation();
  return (
    <footer className="text-center bg-black text-white h-[8vh] p-6">
      {content?.footer[language].rightsReserved}
    </footer>
  );
}
