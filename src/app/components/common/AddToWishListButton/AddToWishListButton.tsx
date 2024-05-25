"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Property } from "@/app/types/Property";
import useAddToWishlist from "@/app/hooks/useAddToWishList";

interface AddToWishListButtonProps {
  property: Property;
}

const AddToWishListButton = ({ property }: AddToWishListButtonProps) => {
  const { wishlist, addToWishlist } = useAddToWishlist();
  const handleAddToWishList = (prop: Property) => {
    addToWishlist(prop);
  };

  return (
    <Icon
      className="absolute top-6 right-6 hover text-white"
      icon="carbon:location-heart-filled"
      width="32"
      height="32"
      style={{ color: "#9ca3af" }}
      onClick={() => handleAddToWishList(property)}
    />
  );
};

export default AddToWishListButton;
