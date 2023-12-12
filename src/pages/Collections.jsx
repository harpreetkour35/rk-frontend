import React from "react";
import CardSmall from "../components/cards/CardSmall";
import { Menu } from "../components/Tabs";
import { useContext } from "react";
import CardNew from "../components/cards/CardNew";
import { ShopContext } from "../context/ShopContext";

const Collections = () => {
  const data = useContext(ShopContext);

  console.log({ data });

  return (
    <div className="m-auto w-11/12">
      <Menu />
      <h1 className="text-center text-3xl font-bold my-6">Melody Packs</h1>
      <p className="">
        Our royalty free melody packs are filled with incredibly high-quality
        melodies, which include stems and MIDI! You can use these melodies to
        produce high quality beats that will impress your listeners. Melodies
        like these with a strong vibe and emotion will help your music stand
        out. You will receive the download for the melody pack instantly.
      </p>
      <div className="grid grid-cols-4 gap-3 mt-8">
        {data.map((data) => (
          <CardSmall data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
