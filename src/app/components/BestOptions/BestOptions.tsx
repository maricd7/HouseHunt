"use client";
import React from "react";
import BestOptionCard from "./BestOptionCard/BestOptionCard";
import BestOptionMain from "./BestOptionCard/BestOptionMain";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";

const BestOptions = () => {
  const { specialOffer } = usePropertiesContext();
  return (
    <section className="bg-white my-16 px-32 w-full ">
      <h2 className="text-5xl font-semibold ">Best Options</h2>
      <div className="flex gap-8 mt-8 flex justify-between">
        <BestOptionMain />
        <div className="flex flex-col gap-8 w-full">
          {specialOffer.slice(0, 3).map((property, index) => (
            <BestOptionCard
              key={index}
              name={property.name}
              description={property.description}
              image={property.image}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              address={property.address}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestOptions;
