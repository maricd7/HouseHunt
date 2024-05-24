"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import { PropertyDetail } from "../common";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";

const HeroCard = () => {
  const { specialOffer } = usePropertiesContext();

  if (!specialOffer) {
    return;
  }

  return (
    <div className="bg-gray-200 rounded-lg p-4 flex gap-4 w-full shadow-lg border border-gray-300 hover:scale-105 cursor-pointer z-40 relative">
      <Image
        className="rounded-lg"
        width={360}
        height={360}
        alt="Hero Card Name"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-semibold text-gray-950">
          {specialOffer[0].name}
        </h4>
        <p>{specialOffer[0].description}</p>
        <PropertyDetail
          iconName="carbon:location-filled"
          text={specialOffer[0].address}
        />
        <PropertyDetail
          iconName="iconoir:bathroom"
          text={specialOffer[0].bathrooms}
        />
        <PropertyDetail
          iconName="mdi:bed-outline"
          text={specialOffer[0].bedrooms}
        />
      </div>
    </div>
  );
};

export default HeroCard;
