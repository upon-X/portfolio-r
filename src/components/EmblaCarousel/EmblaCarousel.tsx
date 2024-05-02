import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { PrevButton, NextButton } from "./ArrowButtons";
import { usePrevNextButtons } from "./usePrevNextButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla..css";
import { ProjectComponent } from "../Projects/ProjectComponent";

declare module "embla-carousel" {
  interface EmblaCarouselType {
    canScrollNext(): unknown;
    canScrollPrev(): unknown;
    on(arg0: string, onSelect: (emblaApi: EmblaCarouselType) => void): unknown;
    scrollPrev(): unknown;
    scrollNext(): unknown;
    plugins: () => {
      autoplay?: {
        reset: () => void;
        stop: () => void;
        options: {
          stopOnInteraction: boolean;
        };
      };
    };
  }
}

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="embla 2xl:w-[70vw]">
      <div className="embla__viewport  2xl:w-[60vw]" ref={emblaRef}>
        <div className="embla__container">
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

      <div className="embla__controls">
        <div className="embla__buttons">
          <div className="  active:scale-90">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className="  active:scale-90">
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
