import React from "react";
import CardNew from "../components/cards/CardNew";
import CardSmall from "../components/cards/CardSmall";
import { Menu } from "../components/Tabs";
import { drumKitsData } from "../data/drumkits";

const Collections = () => {
  return (
    <div className="m-auto w-11/12">
      <Menu />
      <div class="grid grid-cols-4 gap-4 mt-8">
        {/* {drumKitsData.map((data) => (
          <CardNew data={data} key={data.id} />
        ))} */}
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </div>
    </div>
  );
};

export default Collections;
