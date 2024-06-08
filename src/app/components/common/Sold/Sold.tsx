import React from "react";

interface SoldProps {
  status: boolean;
}

const PropertyType = ({ status }: SoldProps) => {
  if (status) {
    return;
  }
  return (
    <div className="bg-red-500 text-white text-center bottom-4 left-2">
      SOLD
    </div>
  );
};

export default PropertyType;
