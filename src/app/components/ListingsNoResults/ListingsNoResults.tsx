"use client";
import Image from "next/image";
import React from "react";
import { Paragraph } from "../common";

const ListingsNoResults = () => {
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
          No Results For Your Search.
        </h2>
        <Paragraph text="There are no results for this search." />
      </div>
    </div>
  );
};

export default ListingsNoResults;
