"use client";
import React, { useRef } from "react";
import { CtaButton, Input } from "../common";
import supabase from "@/app/supabase";

const CreateListings = () => {
  const propertyNameRef = useRef<HTMLInputElement>(null);
  const propertyPriceRef = useRef<HTMLInputElement>(null);
  const propertyDescriptionRef = useRef<HTMLInputElement>(null);
  const propertyBathroomsRef = useRef<HTMLInputElement>(null);
  const propertyBedroomsRef = useRef<HTMLInputElement>(null);
  const propertyAddressRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = propertyNameRef.current?.value;
    const price = propertyPriceRef.current?.value;
    const description = propertyDescriptionRef.current?.value;
    const bathrooms = propertyBathroomsRef.current?.value;
    const bedrooms = propertyBedroomsRef.current?.value;
    const address = propertyAddressRef.current?.value;
    try {
      const { data, error } = await supabase
        .from("properties1")
        .upsert({
          name: name,
          price: price,
          description: description,
          bathrooms: bathrooms,
          bedrooms: bedrooms,
          address: address,
        })
        .select();
    } catch (error) {
      console.log(error);
    }

    console.log("submitted form");
  };
  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className="flex flex-col gap-8">
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
      <div className="flex flex-col gap-2">
        <label>Image</label>
        <input type="file" />
      </div>
      <CtaButton
        type="submit"
        onClick={() => console.log("submitted")}
        text="Create Listing"
      />
    </form>
  );
};

export default CreateListings;
