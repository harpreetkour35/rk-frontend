import { Carousel } from "@material-tailwind/react";
import ssImage1 from "../assets/ss1.png";
import ssImage2 from "../assets/ss2.png";
import ssImage3 from "../assets/ss3jpg.jpeg";

export const Slider = () => {
  return (
    <Carousel autoplay className="rounded-xl w-full" autoplayDelay={2500} loop>
      <img src={ssImage3} alt="img 1" className="h-full w-full object-cover" />
      <img src={ssImage1} alt="img 2" className="h-full w-full object-cover" />
      <img src={ssImage2} alt="img 3" className="h-full w-full object-cover" />
    </Carousel>
  );
};
