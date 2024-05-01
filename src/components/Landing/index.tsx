import { BtnsLinks } from "./BtnsLinks";
import Presentation from "./Presentation";

export default function Landing() {
  return (
    <div className="h-screen bg-[url('/bglanding.webp')]">
      <Presentation />
      <BtnsLinks />
    </div>
  );
}
