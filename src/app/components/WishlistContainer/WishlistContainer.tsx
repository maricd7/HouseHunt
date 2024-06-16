"use client";
import { Property } from "@/app/types/Property";
import React, { useEffect, useState } from "react";
import ListingCard from "../ListingsHero/ListingCard/ListingCard";
import WishlistIsEmpty from "./WishlistIsEmpty";
import { Paragraph } from "../common";

const WishlistContainer = () => {
  const [wishlist, setWishlist] = useState<Property[]>([]);
  useEffect(() => {
    const currentWishlist = localStorage.getItem("wishlist");

    if (currentWishlist) {
      setWishlist(JSON.parse(currentWishlist));
    }
  }, []);

  if (!wishlist.length) {
    return <WishlistIsEmpty />;
  }
  return (
    <div className="flex flex-col itemse-center gap-16">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-semibold text-gray-950 text-center">
          Your favorites <span className="text-blue-700">Places</span>{" "}
        </h1>
        <Paragraph text="Keep track of homes that caught your eye and revisit them anytime." />
      </div>
      <ul className="flex gap-8">
        {wishlist.map((property, index) => (
          <ListingCard key={index} property={property} />
        ))}
      </ul>
    </div>
  );
};

export default WishlistContainer;
