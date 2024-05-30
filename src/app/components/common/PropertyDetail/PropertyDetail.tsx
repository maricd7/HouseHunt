"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface PropertyDetailProps {
  iconName: string;
  text: string | number;
}
const PropertyDetail = ({ iconName, text }: PropertyDetailProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Icon
        icon={iconName}
        width="24"
        height="24"
        style={{ color: "#1f2937" }}
      />
      <p className="text-sm text-gray-800">{text}</p>
    </div>
  );
};

export default PropertyDetail;
