"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/app/supabase";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { Property } from "@/app/types/Property";
import ListingCard from "../../ListingsHero/ListingCard/ListingCard";
import ListingCardLoading from "../../ListingsHero/ListingCard/ListinCardLoading";

interface UserProfileListingsProps {
  useProperties: number[];
}

const UserProfileListings = ({ useProperties }: UserProfileListingsProps) => {
  const [userProperties, setUserProperties] = useState<Property[]>();
  const getUserProfileListings = async () => {
    const { data, error } = await supabase
      .from("properties1")
      .select()
      .in("id", useProperties);

    if (data) {
      setUserProperties(data);
    } else {
      console.log("Error fetching properties", error);
    }
  };

  useEffect(() => {
    getUserProfileListings();
  }, []);
  console.log(userProperties, "lol");
  return (
    <div className="flex gap-8 mt-8">
      {userProperties?.length
        ? userProperties.map((property, index) => (
            <ListingCard property={property} key={index} />
          ))
        : Array.from({ length: 4 }).map((_, index) => (
            <ListingCardLoading key={index} />
          ))}
    </div>
  );
};

export default UserProfileListings;
