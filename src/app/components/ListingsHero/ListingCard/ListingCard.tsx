"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AddToWishListButton,
  ListingCardMainInfo,
  PropertyDetail,
} from "../../common";
import { Property } from "@/app/types/Property";

interface ListingCardProps {
  property: Property;
}

const ListingCard = ({ property }: ListingCardProps) => {
  const { id, image, name, description, address, bathrooms, bedrooms } =
    property;

  return (
    <Link
      href={`/listings/${id}`}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 w-72 cursor-pointer border border-gray-300 hover:scale-105 hover:border-blue-700 flex flex-col gap-4 relative"
    >
      <Image
        className="rounded-md h-36"
        width={400}
        height={400}
        alt="Listing"
        src={image}
      />
      <AddToWishListButton property={property} />
      <ListingCardMainInfo name={name} description={description} />
      <div className="flex flex-col gap-4">
        <PropertyDetail text={address} iconName="carbon:location-filled" />
        <PropertyDetail text={bathrooms} iconName="iconoir:bathroom" />
        <PropertyDetail text={bedrooms} iconName="mdi:bed-outline" />
      </div>
    </Link>
  );
};

export default ListingCard;
