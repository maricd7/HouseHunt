"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Property } from "@/app/types/Property";
import useAddToWishlist from "@/app/hooks/useAddToWishList";
import { AddToWishListModal } from "../../Modals/AddToWishlistModal";
import { RemoveFromWishlistModal } from "../../Modals/RemoveFromWishlistModal.tsx";

interface AddToWishListButtonProps {
  property: Property;
}

const AddToWishListButton = ({ property }: AddToWishListButtonProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } =
    useAddToWishlist();

  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [toggleRemoveModal, setToggleRemoveModal] = useState<boolean>(false);

  //icon color setter
  const iconColor = isInWishlist(property) ? "#1d4ed8" : "#9ca3af";

  //button onclick function handler
  const handleAddToWishList = (prop: Property) => {
    if (isInWishlist(prop)) {
      removeFromWishlist(prop);
      setToggleRemoveModal(true);
    } else {
      addToWishlist(prop);
      setToggleAddModal(true);
    }
  };

  return (
    <>
      <Icon
        className="absolute top-4 left-4 hover text-white z-40"
        icon="carbon:location-heart-filled"
        width="32"
        height="32"
        style={{ color: iconColor }}
        onClick={() => handleAddToWishList(property)}
      />
      <AddToWishListModal
        toggleModal={toggleAddModal}
        setToggleModal={() => setToggleAddModal(false)}
      />
      <RemoveFromWishlistModal
        toggleModal={toggleRemoveModal}
        setToggleModal={() => setToggleRemoveModal(false)}
      />
    </>
  );
};

export default AddToWishListButton;
