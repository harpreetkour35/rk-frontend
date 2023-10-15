import React from "react";
import { PricedCard } from "../components/PricedCard";

const Collections = () => {
  const newArray = [0, 1, 2];
  return (
    <div className="flex flex-wrap justify-evenly py-8 gap-y-3">
      {newArray.map((data) => (
        <PricedCard invis={false} key={data} />
      ))}
    </div>
  );
};

export default Collections;
