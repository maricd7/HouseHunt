import React from "react";
import { MembersContainer } from "./MembersContainer";

const MembersHero = () => {
  return (
    <section className="h-screen flex flex-col  items-center gap-16 px-32 pt-40">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl font-semibold  text-gray-950 text-center">
          Connect with Buyers & Sellers!
        </h1>
        <p className="text-gray-600 text-xl text-center">
          Reach a wide audience of potential buyers and sellers quickly.
        </p>
      </div>
      <MembersContainer />
    </section>
  );
};

export default MembersHero;
