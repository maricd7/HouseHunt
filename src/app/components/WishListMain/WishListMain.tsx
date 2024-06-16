import React from "react";
import { WishlistContainer } from "../WishlistContainer";

const WishListMain = () => {
  return (
    <section className="h-screen flex mt-24 justify-center w-full gap-16 px-32">
      <div className="gap-8 flex flex-col    z-40">
        <div className="flex flex-col gap-4 justify-center items-center"></div>
        <WishlistContainer />
      </div>
      <div></div>
    </section>
  );
};

export default WishListMain;
