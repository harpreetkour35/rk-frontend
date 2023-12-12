import { Slider } from "../components/Slider";
import { productsData } from "../data/products";
import CardNew from "../components/cards/CardNew";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A] overflow-hidden">
      <div className="m-auto w-11/12 py-12">
        <div className="flex justify-center overflow-hidden">
          <Slider />
        </div>
        <div className="px-6 py-8 text-white">
          <div className="pl-4 ">
            <div className="font-bold text-xl">Explore</div>
            <p className="mt-2">
              Know what your looking for? Dive right in and discover the magic!
            </p>
          </div>
          <div className="pt-12 flex flex-wrap justify-center items-center p-12 gap-6">
            {productsData.map((data) => (
              <CardNew data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
