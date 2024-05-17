import React from "react";
import BestOptionCard from "./BestOptionCard/BestOptionCard";
import BestOptionMain from "./BestOptionCard/BestOptionMain";

const BestOptions = () => {
  return (
    <section className="bg-white my-16 px-32 w-full ">
      <h2 className="text-5xl font-semibold ">Best Options</h2>
      <div className="flex gap-8 mt-8 flex justify-between">
        <BestOptionMain />
        <div className="flex flex-col gap-8 w-full">
          <BestOptionCard />
          <BestOptionCard />
          <BestOptionCard />
        </div>
      </div>
    </section>
  );
};

export default BestOptions;
