import { BtnsLinks } from "./BtnsLinks";
import Presentation from "./Presentation";

export default function Landing() {
  return (
    <section className="flex flex-col justify-center h-[100vh] w-screen gap-60 bg-[url('/bglanding.webp')] bg-no-repeat bg-cover">
      <Presentation />
      <BtnsLinks />
    </section>
  );
}
