"use client";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

  return (
    <section className="h-screen flex justify-center items-center gap-16 px-32"></section>
  );
};

export default ListingPageTopBox;
