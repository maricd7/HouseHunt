"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import React, { useState, ChangeEvent, useEffect } from "react";
import { Filters } from "@/app/types/Filters";

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

  const filterProperties = (filters: Filters) => {
    const isFiltersEmpty =
      !filters.query &&
      filters.bathrooms === null &&
      filters.bedrooms === null &&
      filters.minPrice === null &&
      filters.maxPrice === null;

    if (isFiltersEmpty) {
      fetchPropertiesData();
      return;
    }

    let filtered = properties;

    // Filter by name query
    if (filters.query) {
      filtered = filtered.filter((property) =>
        property.name.toLowerCase().includes(filters.query.toLowerCase())
      );
    }

    // Filter by bathrooms
    if (filters.bathrooms !== null) {
      filtered = filtered.filter(
        (property) => property.bathrooms === filters.bathrooms
      );
    }

    // Filter by bedrooms
    if (filters.bedrooms !== null) {
      filtered = filtered.filter(
        (property) => property.bedrooms === filters.bedrooms
      );
    }

    // Filter by minPrice
    if (filters.minPrice !== null) {
      filtered = filtered.filter((property) =>
        filters.minPrice
          ? property.price >= filters.minPrice
          : console.log("error filtering data")
      );
    }

    // Filter by maxPrice
    if (filters.maxPrice !== null) {
      filtered = filtered.filter((property) =>
        filters.maxPrice
          ? property.price <= filters.maxPrice
          : console.log("error filtering data")
      );
    }

    setProperties(filtered);
  };

  useEffect(() => {
    filterProperties(filters);
  }, [filters]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      query: value,
    }));
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = e.target.value ? Number(e.target.value) : null;
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: minPriceValue,
    }));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = e.target.value ? Number(e.target.value) : null;
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: maxPriceValue,
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-96">
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
    </div>
  );
};

export default ListingsFilter;
