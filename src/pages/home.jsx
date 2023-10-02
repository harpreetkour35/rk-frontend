import { CardDefault } from "../components/Card";
import { CarouselCustomArrows } from "../components/Carousal";
import { FooterWithSocialLinks } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PriceCard } from "../components/PricedCard";
import Product from "../components/Product";
import { productsData } from "../data/products";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A] overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <CarouselCustomArrows />
        <div className="flex flex-wrap py-10 justify-between">
          {productsData.map((data) => (
            <CardDefault data={data} key={data.id} />
          ))}
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};

export default Home;
