"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import React, { useState, ChangeEvent } from "react";

interface Filters {
  query: string;
  bathrooms: number | null;
  bedrooms: number | null;
  minPrice: number | null;
  maxPrice: number | null;
}
const ListingsFilter = () => {
  const { properties } = usePropertiesContext();

  const [filters, setFilters] = useState<Filters>({
    query: "",
    bathrooms: null,
    bedrooms: null,
    minPrice: null,
    maxPrice: null,
  });
  const [search, setSearch] = useState<string>("");
  const filterProperites = (filters: Filters) => {
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
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      query: value,
    }));
  };
  console.log("filter props", properties);
  return (
    <div>
      <input
        type="text"
        placeholder="enter your search"
        onChange={handleSearchChange}
      />
      <button onClick={() => filterProperites(filters)}>Search</button>
    </div>
  );
};

export default ListingsFilter;
