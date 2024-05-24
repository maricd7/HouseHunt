"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ListingCardMainInfo, PropertyDetail } from "../../common";
import { ListingCardProps } from "@/app/types/ListingCardProps";

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
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 w-72 cursor-pointer border border-gray-300 hover:scale-105 hover:border-blue-700 flex flex-col gap-4 relative"
    >
      <Image
        className="rounded-md h-36"
        width={400}
        height={400}
        alt="Listing"
        src={image}
      />
      <Icon
        className="absolute top-6 right-6 hover text-white"
        icon="carbon:location-heart-filled"
        width="32"
        height="32"
        style={{ color: "#3b82f6" }}
      />
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

//
