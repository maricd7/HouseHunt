"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const ListingCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 w-72 cursor-pointer border border-gray-300 hover:scale-105 hover:border-blue-700 flex flex-col gap-4">
      <Image
        className="rounded-md"
        width={400}
        height={200}
        alt="Listing"
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold w-fit">Sunny Side Apartment</h2>
        <p className="text-gray-400">
          A cozy apartment with lots of natural light, close to downtown
          amenities.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Icon
            icon="carbon:location-filled"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">123 Elm St, Springfield, IL</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="iconoir:bathroom"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">1</p>
        </div>
        <div className="flex gap-2 items-center">
          <Icon
            icon="mdi:bed-outline"
            width="24"
            height="24"
            style={{ color: " #1f2937" }}
          />
          <p className="text-md text-gray-800">2</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
