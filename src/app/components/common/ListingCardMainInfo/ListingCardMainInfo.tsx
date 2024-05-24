import React from "react";

interface ListingCardMainInfoProps {
  name: string;
  description: string;
}
const ListingCardMainInfo = ({
  name,
  description,
}: ListingCardMainInfoProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold w-fit">{name}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ListingCardMainInfo;
