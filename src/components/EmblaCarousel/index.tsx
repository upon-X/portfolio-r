import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = { loop: true };
export default function CarouselOfProjects() {
  return <EmblaCarousel options={OPTIONS} />;
}
