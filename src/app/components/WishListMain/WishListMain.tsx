import React from "react";
import { WishlistContainer } from "../WishlistContainer";

const WishListMain = () => {
  return (
    <section className="h-screen flex mt-24 justify-center w-full gap-16 px-32">
      <div className="gap-8 flex flex-col w-1/2 z-40">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-semibold text-gray-950 text-center">
            Your favorites <span className="text-blue-700">Places</span>{" "}
          </h1>
          <p className="text-lg text-gray-400 text-center">
            Keep track of homes that caught your eye and revisit them anytime.
          </p>
        </div>
        <WishlistContainer />
      </div>
      <div></div>
    </section>
  );
};

export default WishListMain;
