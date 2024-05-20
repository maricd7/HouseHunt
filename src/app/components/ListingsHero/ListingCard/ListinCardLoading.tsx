import Link from "next/link";
import React from "react";

const ListingCardLoading = () => {
  return (
    <div className="w-72 h-96 flex flex-col gap-4">
      <div className="w-full h-full rounded-lg bg-gray-400"></div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-8 bg-gray-400"></div>
        <div className="w-full h-4 bg-gray-400"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <div className="w-full h-4 bg-gray-400"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-full h-4 bg-gray-400"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-full h-4 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardLoading;
