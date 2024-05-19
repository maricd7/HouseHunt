"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BestOptionMain() {
  const { specialOffer } = usePropertiesContext();

  if (!specialOffer || specialOffer.length < 4) {
    return <>loading</>;
  }
  const specialOfferMain = specialOffer[3];

  return (
    <Link
      className="bg-white rounded-lg p-4 flex flex-col  gap-4 w-full shadow-lg border border-gray-300 hover:border-blue-700 cursor-pointer"
      href={"/listings/" + specialOfferMain.id}
    >
      <Image
        className="rounded-lg"
        width={900}
        height={120}
        alt="Hero Card Name"
        src={specialOfferMain.image}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-semibold text-gray-950">
          {specialOfferMain.name}
        </h2>
        <p>{specialOfferMain.description}</p>
        <div className="flex gap-2 items-center">
          <Icon
            icon="carbon:location-filled"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">
            {specialOfferMain.description}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="iconoir:bathroom"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">{specialOfferMain.bathrooms}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="mdi:bed-outline"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">{specialOfferMain.bedrooms}</p>
        </div>
      </div>
    </Link>
  );
}

export default BestOptionMain;
