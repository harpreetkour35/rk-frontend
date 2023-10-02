import React from "react";
import { PriceCard } from "../components/PricedCard";

const Collections = () => {
  const newArray = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex flex-wrap py-8 gap-y-3">
      {newArray.map((data) => (
        <PriceCard />
      ))}
    </div>
  );
};

export default Collections;
