"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropertyDetail } from "../../common";

interface ListingCardProps {
  name: string;
  description: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  address: string;
  id: number;
}
const ListingCard = ({
  id,
  name,
  description,
  image,
  bedrooms,
  bathrooms,
  address,
}: ListingCardProps) => {
  return (
    <Link
      href={"/listings/" + id}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 w-72 cursor-pointer border border-gray-300 hover:scale-105 hover:border-blue-700 flex flex-col gap-4"
    >
      <Image
        className="rounded-md h-36"
        width={400}
        height={400}
        alt="Listing"
        src={image}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold w-fit">{name}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <PropertyDetail text={address} iconName="carbon:location-filled" />
        <PropertyDetail text={bathrooms} iconName="iconoir:bathroom" />
        <PropertyDetail text={bedrooms} iconName="mdi:bed-outline" />
      </div>
    </Link>
  );
};

export default ListingCard;

//
