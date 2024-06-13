"use client";
import React, { useEffect, useState } from "react";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { Property } from "@/app/types/Property";
import ListingCard from "../../ListingsHero/ListingCard/ListingCard";
import ListingCardLoading from "../../ListingsHero/ListingCard/ListinCardLoading";
import { useModal } from "@/app/contexts/ModalContex";
import { getUserProfileListings } from "@/app/actions/getUserProfileListings";
import { setListingAsSold } from "@/app/actions/setListingsAsSold";

const UserProfileListings = () => {
  const [userProperties, setUserProperties] = useState<Property[]>();
  const { currentUserId } = useClientDataContext();
  const { showModal } = useModal();

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
    const fetchData = async () => {
      if (currentUserId) {
        const properties = await getUserProfileListings(currentUserId);
        if (properties) {
          setUserProperties(properties);
        } else {
          console.log("Fetching Listing Error");
        }
      }
    };
    fetchData();
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
