"use client";
import React, { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import ListingCardLoading from "../ListingCard/ListinCardLoading";
import { ListingsFilter } from "../../ListingsFilter";
import { ListingsNoResults } from "../../ListingsNoResults";

const ListingsContainer = () => {
  const { properties } = usePropertiesContext();
  const [noResultsForSearch, setNoResultsForSearch] = useState<boolean>(false);

  useEffect(() => {
    if (!properties.length) {
      setTimeout(() => {
        setNoResultsForSearch(true);
      }, 1000);
      return;
    }
  }, [properties]);

  return (
    <div className="p-8 justify-between items-center rounded-lg flex flex-col flex-wrap gap-4">
      <ListingsFilter />
      <div className="p-8 justify-between rounded-lg flex flex-wrap gap-4">
        {properties.length ? (
          properties.map((property, index) => (
            <ListingCard property={property} key={index} />
          ))
        ) : noResultsForSearch ? (
          <ListingsNoResults />
        ) : (
          Array.from({ length: 10 }).map((_, index) => (
            <ListingCardLoading key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListingsContainer;
