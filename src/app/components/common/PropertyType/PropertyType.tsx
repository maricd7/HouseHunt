import React from "react";

interface PropertyTypeProps {
  property_type: string;
}

const PropertyType = ({ property_type }: PropertyTypeProps) => {
  return (
    <span className="bg-white p-2 rounded-md text-sm font-semibold">
      {property_type}
    </span>
  );
};

export default PropertyType;
