import { CarouselCustomArrows } from "./components/Carousal";
import { FooterWithSocialLinks } from "./components/Footer";
import { StickyNavbar } from "./components/Navbar";
import Product from "./components/Product";
import { productsData } from "./data/products";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <StickyNavbar />
      <div className="container px-5 py-24 mx-auto">
        <CarouselCustomArrows />
        <div className="flex flex-wrap -m-4">
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
