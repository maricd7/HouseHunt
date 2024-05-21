import React from "react";
import ListingsContainer from "./ListingsContainer/ListingsContainer";
import { ListingsFilter } from "../ListingsFilter";

const ListingsHero = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-16  px-32 pt-24">
      <ListingsFilter />
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl font-semibold  text-gray-950">
          Our Current Listings
        </h1>
        <p className="text-gray-600 text-xl">
          Discover Your Perfect Property: Navigate Through a Vast Array of
          Listings on Our Real Estate Platform
        </p>
      </div>
      <ListingsContainer />
    </section>
  );
};

export default ListingsHero;
