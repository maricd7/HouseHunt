"use client";
import React, { useRef } from "react";
import { Input } from "../common";

const CreateListings = () => {
  const propertyNameRef = useRef<HTMLInputElement>(null);
  const propertyPriceRef = useRef<HTMLInputElement>(null);
  const propertyDescriptionRef = useRef<HTMLInputElement>(null);
  const propertyBathroomsRef = useRef<HTMLInputElement>(null);
  const propertyBedroomsRef = useRef<HTMLInputElement>(null);
  const propertyAddressRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <Input
        placeholder="Name of the Property"
        label="Name"
        type="text"
        required
        reference={propertyNameRef}
      />
      <Input
        placeholder="Price of the Property"
        label="Price"
        type="number"
        required
        reference={propertyPriceRef}
      />
      <Input
        placeholder="Description of the Property"
        label="Description"
        type="text"
        required
        reference={propertyDescriptionRef}
      />
      <Input
        placeholder="Number of the Bathrooms"
        label="Bathrooms"
        type="number"
        required
        reference={propertyBathroomsRef}
      />
      <Input
        placeholder="Number of the Bedrooms"
        label="Bedrooms"
        type="number"
        required
        reference={propertyBedroomsRef}
      />
      <Input
        placeholder="Property Address"
        label="Address"
        type="text"
        required
        reference={propertyAddressRef}
      />
    </form>
  );
};

export default CreateListings;
