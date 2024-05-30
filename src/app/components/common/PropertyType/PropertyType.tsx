import React from "react";

interface PropertyTypeProps {
  property_type: string;
}

const PropertyType = ({ property_type }: PropertyTypeProps) => {
  return (
    <span className="absolute bottom-8 left-8 bg-white p-2 rounded-md text-sm font-semibold">
      {property_type}
    </span>
  );
};

export default PropertyType;
