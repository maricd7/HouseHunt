"use client";
import React, { useRef } from "react";
import { CtaButton, Input } from "../common";
import supabase from "@/app/supabase";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

const CreateListings = () => {
  const propertyNameRef = useRef<HTMLInputElement>(null);
  const propertyPriceRef = useRef<HTMLInputElement>(null);
  const propertyDescriptionRef = useRef<HTMLInputElement>(null);
  const propertyBathroomsRef = useRef<HTMLInputElement>(null);
  const propertyBedroomsRef = useRef<HTMLInputElement>(null);
  const propertyAddressRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const propertyTypeRef = useRef<HTMLSelectElement>(null);

  const { currentUserId } = useClientDataContext();

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = propertyNameRef.current?.value;
    const price = propertyPriceRef.current?.value;
    const description = propertyDescriptionRef.current?.value;
    const bathrooms = propertyBathroomsRef.current?.value;
    const bedrooms = propertyBedroomsRef.current?.value;
    const address = propertyAddressRef.current?.value;
    const type = propertyTypeRef.current?.value;

    let imageUrl = "";

    const uploadPropertyPhoto = async () => {
      if (
        imageInputRef.current?.files &&
        imageInputRef.current?.files.length > 0
      ) {
        const file = imageInputRef.current.files[0];
        const filePath = `public/${currentUserId}/${name}/${file.name}`;

        const { data, error } = await supabase.storage
          .from("properties")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          throw error;
        }

        imageUrl = supabase.storage.from("properties").getPublicUrl(filePath)
          .data.publicUrl;
      }
    };

    try {
      await uploadPropertyPhoto();

      const { data, error } = await supabase
        .from("properties1")
        .upsert({
          name: name,
          price: price,
          description: description,
          bathrooms: bathrooms,
          bedrooms: bedrooms,
          address: address,
          image: imageUrl,
          seller_id: currentUserId,
          property_type: type,
        })
        .select();

      if (error) {
        throw error;
      }

      console.log("submitted form");
    } catch (error: any) {
      console.error("Error creating listing:", error.message);
    }
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
        <label>Property type</label>
        <select
          ref={propertyTypeRef}
          className="max-w-fit border border-gray-400 rounded-lg p-4"
        >
          <option>HOUSE</option>
          <option>VILLA</option>
          <option>MANSION</option>
          <option>APARTMENT</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label>Image</label>
        <input type="file" ref={imageInputRef} />
      </div>
      <CtaButton type="submit" text="Create Listing" onClick={() => {}} />
    </form>
  );
};

export default CreateListings;
