import { Carousel, IconButton } from "@material-tailwind/react";
import ssImage1 from "../assets/ss1.png";
import ssImage2 from "../assets/ss2.png";

export function CarouselCustomArrows() {
  return (
    <Carousel
      autoplay
      className="rounded-xl w-full h-[32rem]"
      autoplayDelay={2500}
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => {
        return (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" />
            </svg>
          </IconButton>
        );
      }}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
          </svg>
        </IconButton>
      )}
    >
      <img src={ssImage1} alt="img 1" className="w-full object-cover" />
      <img src={ssImage2} alt="ima 2" className="w-full object-cover" />
    </Carousel>
  );
}
