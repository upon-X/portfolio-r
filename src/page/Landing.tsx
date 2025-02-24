import { BtnsLinks } from "../components/Landing/BtnsLinks";
import Presentation from "../components/Landing/Presentation";

// import { Lumiflex } from "uvcanvas";

export default function Landing() {
  return (
    <section
      id="landing"
      className={`flex flex-col justify-center min-h-screen max-h-screen gap-40 bg-no-repeat bg-cover bg-[url('/bglandingdark.webp')]`}
    >
      <Presentation />
      <BtnsLinks />
    </section>
  );
}
