"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Property } from "@/app/types/Property";
import useAddToWishlist from "@/app/hooks/useAddToWishList";

interface AddToWishListButtonProps {
  property: Property;
}

const AddToWishListButton = ({ property }: AddToWishListButtonProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } =
    useAddToWishlist();

  const iconColor = isInWishlist(property) ? "#1d4ed8" : "#9ca3af";

  return (
    <Icon
      className="absolute top-6 right-6 hover text-white z-40"
      icon="carbon:location-heart-filled"
      width="32"
      height="32"
      style={{ color: iconColor }}
      onClick={
        isInWishlist(property)
          ? () => removeFromWishlist(property)
          : () => addToWishlist(property)
      }
    />
  );
};

export default AddToWishListButton;
