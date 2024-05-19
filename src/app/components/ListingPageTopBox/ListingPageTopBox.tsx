"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const ListingPageTopBox = () => {
  const [details, setDetails] = useState<any>();
  const { properties } = usePropertiesContext();
  const pathname = usePathname();
  const id = Number(pathname.replace("/listings/", ""));

  const getDetails = () => {
    console.log(id);
    const filteredDetails = properties.filter((prop) => prop.id === Number(id));
    setDetails(filteredDetails);
  };
  console.log(details);
  useEffect(() => {
    getDetails();
  }, [properties]);

  if (!details) {
    return <>Loading</>;
  }
  return (
    <section className="h-screen flex justify-center items-center gap-16 px-32 ">
      <Image
        className="rounded-lg w-full"
        width={500}
        height={500}
        alt="TopBox Property"
        src={details[0]?.image}
      />
      <div className="w-fit">
        <h2 className="font-semibold text-4xl">{details[0]?.name}</h2>
        <p className="text-lg text-gray-700 w-1/2">{details[0]?.description}</p>
        <div className="flex flex-col gap-2 mt-8">
          <div className="flex gap-2">
            <Icon
              icon="carbon:location-filled"
              width="24"
              height="24"
              style={{ color: " #1f2937" }}
            />
            {details[0]?.address}
          </div>
          <div className="flex gap-2">
            <Icon
              icon="mdi:bed-outline"
              width="24"
              height="24"
              style={{ color: " #1f2937" }}
            />
            {details[0]?.bedrooms}
          </div>
          <div className="flex gap-2">
            <Icon
              icon="iconoir:bathroom"
              width="24"
              height="24"
              style={{ color: " #1f2937" }}
            />
            {details[0]?.bathrooms}
          </div>
        </div>
        <h2 className="font-semibold text-4xl mt-8">${details[0]?.price}</h2>
      </div>
    </section>
  );
};

export default ListingPageTopBox;
