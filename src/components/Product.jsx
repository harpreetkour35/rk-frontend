import React from "react";
import productimage from "../assets/rk.png";

const Product = ({ data }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={productimage}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY-1
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
            {data.title}
          </h1>
          <p className="leading-relaxed mb-3">{data.description}</p>
          <div className="flex items-center flex-wrap ">
            <button className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
              Explore Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
