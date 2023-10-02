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
    >
      <img src={ssImage1} alt="img 1" className="w-full object-cover" />
      <img src={ssImage2} alt="ima 2" className="w-full object-cover" />
    </Carousel>
  );
}
