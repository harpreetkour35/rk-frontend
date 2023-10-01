import { CarouselCustomArrows } from "./components/Carousal";
import { FooterWithSocialLinks } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Product from "./components/Product";
import { productsData } from "./data/products";

const App = () => {
  return (
    <div className="bg-[#1A1A1A] overflow-hidden">
      <Navbar />
      <div className="container px-5 py-14 mx-auto">
        <CarouselCustomArrows />
        <div className="flex flex-wrap -m-4 py-10">
          {productsData.map((data) => (
            <Product data={data} key={data.id} />
          ))}
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};

export default App;
