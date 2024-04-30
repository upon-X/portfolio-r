import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ProjectComponent } from "./ProjectComponent";

export const ProjectsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true }),
  ]);

  return (
    <div className="embla cursor-default" ref={emblaRef}>
      <div className="embla__container">
        {/* Vehibuy */}
        <div className="embla__slide">
          <ProjectComponent projectIndex={0} />
        </div>
        {/* Greek World */}
        <div className="embla__slide">
          <ProjectComponent projectIndex={1} />
        </div>
        {/* Btn Counter */}
        <div className="embla__slide">
          <ProjectComponent projectIndex={2} />
        </div>
        {/* Snake Game */}
        <div className="embla__slide">
          <ProjectComponent projectIndex={3} />
        </div>
        {/* Country Time */}
        <div className="embla__slide">
          <ProjectComponent projectIndex={4} />
        </div>
      </div>
    </div>
  );
};
