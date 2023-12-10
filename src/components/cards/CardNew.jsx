import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardNew = ({ data }) => {
  const { image, description, title } = data;
  return (
    <div class=" group w-80 h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out relative text-white shadow-2xl hover:scale-105">
      <img
        src={image}
        alt=""
        className="absolute object-cover w-full h-full top-0 left-0 opacity-90 transition-opacity"
      />
      <div className="">
        <h2 className=" font-bold absolute m-0 bottom-7 left-7 transition-all duration-700 ease-out group-hover:-translate-y-32">
          {title}
        </h2>
        <div className="absolute bottom-0 left-7 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10">
          <p className="mb-2">{description}</p>
          <Link className="" to="/collections">
            <Button size="sm" variant="gradiant">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardNew;
