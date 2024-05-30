"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AddToWishListButton,
  ListingCardMainInfo,
  PropertyDetail,
} from "../../common";
import { Property } from "@/app/types/Property";
import { AddToWishListModal } from "../../Modals/AddToWishlistModal";
import useAddToWishlist from "@/app/hooks/useAddToWishList";
import { RemoveFromWishlistModal } from "../../Modals/RemoveFromWishlistModal.tsx";

interface ListingCardProps {
  property: Property;
}

const ListingCard = ({ property }: ListingCardProps) => {
  const { id, image, name, description, address, bathrooms, bedrooms } =
    property;

  const { isInWishlist, addToWishlist, removeFromWishlist } =
    useAddToWishlist();

  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [toggleRemoveModal, setToggleRemoveModal] = useState<boolean>(false);

  // Handle wishlist add and remove actions with modal triggers
  const handleAddToWishlist = () => {
    addToWishlist(property);
    setToggleAddModal(true);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(property);
    setToggleRemoveModal(true);
  };

  // Event handler for wishlist icon click
  const handleWishlistClick = () => {
    if (isInWishlist(property)) {
      handleRemoveFromWishlist();
    } else {
      handleAddToWishlist();
    }
  };

  return (
    <div className="z-10 max-w-sm rounded-lg overflow-hidden shadow-lg p-2 w-72 cursor-pointer border border-gray-300  hover:border-blue-700 flex flex-col gap-4 relative">
      <div
        className="absolute top-6 left-6 hover text-white z-40 bg-white p-1 rounded-md"
        onClick={handleWishlistClick}
      >
        <AddToWishListButton property={property} />
      </div>
      <Link href={`/listings/${id}`}>
        <Image
          className="rounded-md h-36"
          width={400}
          height={400}
          alt="Listing"
          src={image}
        />
        <ListingCardMainInfo name={name} description={description} />
        <div className="flex flex-col gap-4">
          <PropertyDetail text={address} iconName="carbon:location-filled" />
          <PropertyDetail text={bathrooms} iconName="iconoir:bathroom" />
          <PropertyDetail text={bedrooms} iconName="mdi:bed-outline" />
        </div>
      </Link>
      <AddToWishListModal
        toggleModal={toggleAddModal}
        setToggleModal={() => setToggleAddModal(false)}
      />
      <RemoveFromWishlistModal
        toggleModal={toggleRemoveModal}
        setToggleModal={() => setToggleRemoveModal(false)}
      />
    </div>
  );
};

export default ListingCard;
