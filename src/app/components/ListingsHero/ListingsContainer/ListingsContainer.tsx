"use client";
import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import ListingCardLoading from "../ListingCard/ListinCardLoading";

const ListingsContainer = () => {
  const { properties } = usePropertiesContext();

  return (
    <div className="p-8 justify-between rounded-lg flex flex-wrap gap-4">
      {properties.length
        ? properties.map((property, index) => (
            <ListingCard property={property} key={index} />
          ))
        : Array.from({ length: 10 }).map((_, index) => (
            <ListingCardLoading key={index} />
          ))}
    </div>
  );
};

export default ListingsContainer;
