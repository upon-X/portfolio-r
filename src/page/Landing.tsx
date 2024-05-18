import { BtnsLinks } from "../components/Landing/BtnsLinks";
import Presentation from "../components/Landing/Presentation";
import { useTheme } from "../context/ThemeContext";
// import { Lumiflex } from "uvcanvas";

export default function Landing() {
  const { theme } = useTheme();
  return (
    <section
      className={`flex flex-col justify-center h-[100vh] gap-40 ${
        theme === "light"
          ? "bg-[url('/bglanding.webp')] bg-no-repeat bg-cover"
          : "bg-[url('/bglandingdark.webp')] "
      }`}
    >
      <Presentation />
      <BtnsLinks />
    </section>
  );
}
