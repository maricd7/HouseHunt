import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AddToWishListButton,
  ListingCardMainInfo,
  PropertyDetail,
  PropertyType,
  Sold,
} from "../../common";
import { Property } from "@/app/types/Property";

interface ListingCardProps {
  property: Property;
}

const ListingCard = ({ property }: ListingCardProps) => {
  const {
    id,
    image,
    name,
    description,
    address,
    bathrooms,
    bedrooms,
    property_type,
    price,
    status,
  } = property;

  return (
    <div className="z-10 max-w-sm rounded-lg overflow-hidden shadow-lg p-2 w-72 cursor-pointer border border-gray-300  hover:border-blue-700 flex flex-col gap-4 relative">
      <AddToWishListButton property={property} />
      <Link href={`/listings/${id}`}>
        <div className="relative">
          <Image
            className="rounded-md h-36"
            width={400}
            height={400}
            alt="Listing"
            src={image}
          />
          <div className="absolute top-4 right-2 ">
            <PropertyType property_type={property_type} />
          </div>
          <Sold status={status} />
        </div>
        <ListingCardMainInfo name={name} description={description} />
        <div className="flex flex-col gap-4 mt-4">
          <PropertyDetail text={address} iconName="carbon:location-filled" />
          <PropertyDetail text={bathrooms} iconName="iconoir:bathroom" />
          <PropertyDetail text={bedrooms} iconName="mdi:bed-outline" />
          <span className="text-2xl font-semibold">${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
