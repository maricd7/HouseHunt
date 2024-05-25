"use client";
import { Property } from "@/app/types/Property";
import React, { useEffect, useState } from "react";
import ListingCard from "../ListingsHero/ListingCard/ListingCard";

const WishlistContainer = () => {
  const [wishlist, setWishlist] = useState<Property[]>([]);
  useEffect(() => {
    const currentWishlist = localStorage.getItem("wishlist");

    if (currentWishlist) {
      setWishlist(JSON.parse(currentWishlist));
    }
  }, []);

  return (
    <ul className="flex gap-8">
      {wishlist.map((property, index) => (
        <ListingCard key={index} property={property} />
      ))}
    </ul>
  );
};

export default WishlistContainer;
