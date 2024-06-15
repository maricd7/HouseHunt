"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { fetchData } from "@/app/actions/fetchPropertiesData";
import { Property } from "@/app/types/Property";
interface Filters {
  query: string;
  bathrooms: number | null;
  bedrooms: number | null;
  minPrice: number | null;
  maxPrice: number | null;
}
const ListingsFilter = () => {
  const { properties, setProperties, fetchPropertiesData } =
    usePropertiesContext();

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

  // search change filters handler
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 1) {
      fetchPropertiesData();
      return;
    }
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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Search</label>
        <input
          type="text"
          placeholder="Enter your search"
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price</label>
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Price From"
            onChange={handleMinPriceChange}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Price To"
            onChange={handleMaxPriceChange}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <button
        onClick={() => filterProperites(filters)}
        className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  );
};

export default ListingsFilter;
