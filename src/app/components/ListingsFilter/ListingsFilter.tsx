"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import React, { useState, ChangeEvent, useEffect } from "react";

interface Filters {
  query: string;
  bathrooms: number | null;
  bedrooms: number | null;
  minPrice: number | null;
  maxPrice: number | null;
}
const ListingsFilter = () => {
  const { properties, setProperties } = usePropertiesContext();
  const [filters, setFilters] = useState<Filters>({
    query: "",
    bathrooms: null,
    bedrooms: null,
    minPrice: null,
    maxPrice: null,
  });
  const [search, setSearch] = useState<string>("");

  const filterProperites = (filters: Filters) => {
    console.log("trigger", properties);

    //function for filtering properties
    const filtered = properties.filter((property) => {
      return (
        (!filters.query ||
          property.name.toLowerCase().includes(filters.query.toLowerCase())) &&
        (!filters.bathrooms || property.bathrooms === filters.bathrooms) &&
        (!filters.bedrooms || property.bedrooms === filters.bedrooms) &&
        (!filters.minPrice || property.price >= filters.minPrice) &&
        (!filters.maxPrice || property.price <= filters.maxPrice)
      );
    });

    setProperties(filtered);
  };
  useEffect(() => {
    console.log(properties, "asdasd");
  }, [properties]);

  // search change filters handler
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      query: value,
    }));
  };

  //min price setter
  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: minPriceValue,
    }));
  };

  //max price setter
  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: maxPriceValue,
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your search"
        onChange={handleSearchChange}
      />
      <div>
        <label>Price</label>
        <input
          type="number"
          placeholder="Price From"
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Price To"
          onChange={handleMaxPriceChange}
        />
      </div>
      <button onClick={() => filterProperites(filters)}>Search</button>
    </div>
  );
};

export default ListingsFilter;
