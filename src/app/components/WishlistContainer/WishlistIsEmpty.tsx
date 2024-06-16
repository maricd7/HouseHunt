"use client";
import React from "react";
import { Paragraph } from "../common";
import Image from "next/image";

const WishlistIsEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center items-center gap-8">
      <Image
        width={250}
        height={250}
        alt="Empty Wishlist"
        src="/empty-wishlist.svg"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold text-gray-600">
          Your Wishlist is currently empty.
        </h2>
        <Paragraph
          text="Add items to your wishlist by tapping heart icon of the properties that
        caught your eye."
        />
      </div>
    </div>
  );
};

export default WishlistIsEmpty;
