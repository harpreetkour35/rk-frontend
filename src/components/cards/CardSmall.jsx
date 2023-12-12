import React from "react";

const CardSmall = ({ data }) => {
  const { image } = data;
  return (
    <button className="w-80 h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out relative text-white shadow-2xl hover:scale-105 active:scale-95">
      <img
        src={image}
        alt=""
        className="absolute object-cover w-full h-full top-0 left-0 opacity-90 transition-opacity"
      />
      <h2 className="font-bold absolute m-0 bottom-3 transition-all duration-700 ease-out">
        Click to View Pack
      </h2>
    </button>
  );
};

export default CardSmall;
