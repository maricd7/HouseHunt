"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropertyType } from "../../common";

interface BestOptionCardProps {
  name: string;
  description: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  address: string;
  id: number;
  property_type: string;
}

function BestOptionCard({
  name,
  description,
  image,
  bedrooms,
  bathrooms,
  address,
  id,
  property_type,
}: BestOptionCardProps) {
  return (
    <Link
      href={"/listings/" + id}
      className="bg-white h-full rounded-lg p-4 flex gap-4 w-full shadow-lg border border-gray-300 hover:border-blue-700 cursor-pointer relative"
    >
      <Image
        className="rounded-lg "
        width={240}
        height={360}
        alt="Hero Card Name"
        src={image}
      />
      <div className="absolute bottom-8 left-8 ">
        <PropertyType property_type={property_type} />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-semibold text-gray-950">{name}</h4>
        <p>{description}</p>
        <div className="flex gap-2 items-center">
          <Icon
            icon="carbon:location-filled"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">{address}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="iconoir:bathroom"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">{bathrooms}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="mdi:bed-outline"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">{bedrooms}</p>
        </div>
      </div>
    </Link>
  );
}

export default BestOptionCard;
