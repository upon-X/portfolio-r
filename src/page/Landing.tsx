import { BtnsLinks } from "../components/Landing/BtnsLinks";
import Presentation from "../components/Landing/Presentation";
import { useTheme } from "../context/ThemeContext";
// import { Lumiflex } from "uvcanvas";

export default function Landing() {
  const { theme } = useTheme();
  return (
    <section
      id=""
      className={`flex flex-col justify-center min-h-screen max-h-screen gap-40 bg-no-repeat bg-cover ${
        theme === "light"
          ? "bg-[url('/bglanding.webp')] "
          : "bg-[url('/bglandingdark.webp')] "
      }`}
    >
      <Presentation />
      <BtnsLinks />
    </section>
  );
}
