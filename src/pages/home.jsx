import { CardDefault } from "../components/Card";
import { Slider } from "../components/Slider";
import { FooterWithSocialLinks } from "../components/Footer";
import { productsData } from "../data/products";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A] overflow-hidden">
      <div className="m-auto w-11/12 py-12">
        <div className="flex justify-center">
          <Slider />
        </div>
        <div className="px-6 py-8 text-white">
          <div className="pl-4 ">
            <div className="font-bold text-xl">Explore</div>
            <p className="mt-2">
              Know what your looking for? Dive right in and discover the magic!
            </p>
          </div>
          <div className="pt-12 flex flex-wrap justify-between">
            {productsData.map((data) => (
              <CardDefault data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};

export default Home;
