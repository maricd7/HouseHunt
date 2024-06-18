"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListingPageTopBoxSellerProps {
  sellerUsername: string;
  sellerAvatar: string;
  sellerName: string;
}
const ListingPageTopBoxSeller = ({
  sellerUsername,
  sellerAvatar,
  sellerName,
}: ListingPageTopBoxSellerProps) => {
  return (
    <Link href={`/profile/${sellerUsername}`}>
      <div className="text-xl font-semibold mt-8 flex gap-4 items-center px-8 py-4 rounded-xl bg-white w-fit shadow-md  border border-gray-200 hover:shadow-lg">
        <span className="flex gap-2 items-center">
          <Image
            src={sellerAvatar}
            width={64}
            height={64}
            alt="seller avatar"
            className="rounded-full"
          />
          {sellerName}{" "}
        </span>
      </div>
    </Link>
  );
};

export default ListingPageTopBoxSeller;
