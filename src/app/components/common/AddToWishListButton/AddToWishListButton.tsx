"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Property } from "@/app/types/Property";
import useAddToWishlist from "@/app/hooks/useAddToWishList";

interface AddToWishListButtonProps {
  property: Property;
}

const AddToWishListButton = ({ property }: AddToWishListButtonProps) => {
  const { isInWishlist, addToWishlist } = useAddToWishlist();
  const iconColor = isInWishlist(property) ? "#1d4ed8" : "#9ca3af";
  const handleAddToWishList = (prop: Property) => {
    addToWishlist(prop);
  };

  return (
    <Icon
      className="absolute top-6 right-6 hover text-white"
      icon="carbon:location-heart-filled"
      width="32"
      height="32"
      style={{ color: iconColor }}
      onClick={() => handleAddToWishList(property)}
    />
  );
};

export default AddToWishListButton;
