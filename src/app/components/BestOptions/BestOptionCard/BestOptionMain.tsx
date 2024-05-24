"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropertyDetail } from "../../common";

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
        <PropertyDetail
          text={specialOfferMain.address}
          iconName="carbon:location-filled"
        />
        <PropertyDetail
          text={specialOfferMain.bathrooms}
          iconName="iconoir:bathroom"
        />
        <PropertyDetail
          text={specialOfferMain.bedrooms}
          iconName="mdi:bed-outline"
        />
      </div>
    </Link>
  );
}

export default BestOptionMain;
