import { CardDefault } from "../components/Card";
import { Slider } from "../components/Slider";
import { FooterWithSocialLinks } from "../components/Footer";
import { productsData } from "../data/products";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A] overflow-hidden">
      <div className="flex flex-col items-center px-5 py-10">
        <Slider />
        <h1 className="font-medium text-white py-8">Explore</h1>
        <p></p>
        <div className="flex flex-wrap pt-20 justify-between gap-x-10">
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
