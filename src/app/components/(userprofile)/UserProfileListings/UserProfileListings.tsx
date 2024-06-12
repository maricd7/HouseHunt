"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/app/supabase";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { Property } from "@/app/types/Property";
import ListingCard from "../../ListingsHero/ListingCard/ListingCard";
import ListingCardLoading from "../../ListingsHero/ListingCard/ListinCardLoading";
import { useModal } from "@/app/contexts/ModalContex";

const UserProfileListings = () => {
  const [userProperties, setUserProperties] = useState<Property[]>();
  const { currentUserId } = useClientDataContext();
  const { showModal } = useModal();

  const getUserProfileListings = async () => {
    const { data, error } = await supabase
      .from("properties1")
      .select()
      .eq("seller_id", currentUserId);
    if (data) {
      setUserProperties(data);
    }
    if (error) {
      console.log(error);
    }
  };

  //function for setting listing as sold
  const setListingAsSold = async (propId: number) => {
    const { error } = await supabase
      .from("properties1")
      .update({ status: false })
      .eq("id", propId);
  };

  const handleSetAsSoldButtonClick = (id: number) => {
    showModal(
      "Are you sure you want to mark this listing as sold?",
      () => {
        setListingAsSold(id);
      },
      () => {}
    );
  };
  useEffect(() => {
    getUserProfileListings();
  }, [currentUserId]);

  //fetch data on mount or when current user id changes
  useEffect(() => {
    getUserProfileListings();
  }, [currentUserId]);

  if (!userProperties) {
    return (
      <h2 className=" text-xl mt-16">
        This seller has no listings available..
      </h2>
    );
  }
  return (
    <div className="flex gap-8 mt-8">
      {userProperties?.length
        ? userProperties.map((property, index) => (
            <div className="flex flex-col gap-4">
              <ListingCard property={property} key={index} />
              {property.status ? (
                <button
                  onClick={() => {
                    handleSetAsSoldButtonClick(property.id);
                  }}
                  className="px-4 py-2 rounded-lg hover:shadow-lg border border-gray-950"
                >
                  Mark as Sold
                </button>
              ) : (
                <></>
              )}
            </div>
          ))
        : Array.from({ length: 4 }).map((_, index) => (
            <ListingCardLoading key={index} />
          ))}
    </div>
  );
};

export default UserProfileListings;
