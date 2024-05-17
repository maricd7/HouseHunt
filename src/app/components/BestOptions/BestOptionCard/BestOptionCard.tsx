"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

function BestOptionCard() {
  return (
    <div className="bg-white rounded-lg p-4 flex gap-4 w-full shadow-lg border border-gray-300 hover:border-blue-500 cursor-pointer">
      <Image
        className="rounded-lg"
        width={240}
        height={360}
        alt="Hero Card Name"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-semibold text-gray-950">
          Sunny Side Apartment
        </h4>
        <p>
          A cozy apartment with lots of natural light, close to downtown
          amenities.
        </p>
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
}

export default BestOptionCard;
