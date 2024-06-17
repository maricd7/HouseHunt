import React from "react";
import ListingsContainer from "./ListingsContainer/ListingsContainer";
import { Paragraph } from "../common";

const ListingsHero = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16  px-32 pt-40">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl font-semibold  text-gray-950">
          Our Current Listings
        </h1>
        <Paragraph
          text="Discover Your Perfect Property: Navigate Through a Vast Array of
          Listings on Our Real Estate Platform"
        />
      </div>
      <ListingsContainer />
    </section>
  );
};

export default ListingsHero;
