"use client";
import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";

const ListingsContainer = () => {
  const { properties } = usePropertiesContext();
  return (
    <div className="bg-blue-100 p-8 justify-between rounded-lg flex flex-wrap gap-4">
      {properties ? (
        properties.map((property, index) => (
          <ListingCard
            key={index}
            name={property.name}
            description={property.description}
            image={property.image}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            address={property.address}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListingsContainer;
