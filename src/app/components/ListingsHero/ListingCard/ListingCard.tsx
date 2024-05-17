import Image from "next/image";
import React from "react";

const ListingCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 w-72 cursor-pointer border border-gray-300 hover:scale-105 hover:border-blue-500">
      <Image
        className="rounded-md"
        width={400}
        height={200}
        alt="Listing"
        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
      />
      <h2 className="text-2xl font-semibold w-fit">Sunny Side Apartment</h2>
      <p>
        A cozy apartment with lots of natural light, close to downtown
        amenities.
      </p>
    </div>
  );
};

export default ListingCard;
