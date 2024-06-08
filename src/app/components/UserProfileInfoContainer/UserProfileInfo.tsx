"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { UserProfileBiography } from "../UserProfileBiography";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { UserProfileAvatar } from "../UserProfileAvatar";
import { UserProfileListings } from "../UserProfileListings";

const UserProfileInfo = () => {
  const params = useParams();
  const [userProfileData, setUserProfileData] = useState<any>({});
  const [useProperties, setUserProperties] = useState<number[]>([]);
  const { setCurrentUserBiography, currentUserId, currentUserName } =
    useClientDataContext();

  const [editPermission, setEditPermission] = useState<boolean>(false);

  useEffect(() => {
    // function for getting user profile data
    const getUserProfileData = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("id,name,email,username,role,biography,properties")
          .eq("username", params.slug);
        if (data?.length) {
          setUserProperties(data[0].properties || []);
          setCurrentUserBiography(data[0].biography);
          setUserProfileData(data[0]);

          // check if user can edit the profile
          if (currentUserId && data[0].username === currentUserName) {
            setEditPermission(true);
          }
        }
      } catch (error) {
        console.log("Error fetching data for this profile!", error);
      }
    };

    getUserProfileData();
  }, [params.slug, currentUserId, currentUserName]);

  return (
    <div className="bg-white rounded-lg px-8 py-16 w-full flex flex-col gap-16">
      <div className="flex gap-8">
        {userProfileData.id ? (
          <UserProfileAvatar
            userId={userProfileData.id}
            editPermission={editPermission}
          />
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-semibold text-4xl text-gray-950">
              {userProfileData.name}
            </h2>
            <p className="text-lg text-gray-500 ">{userProfileData.username}</p>
          </div>
          <span className="text-xl text-gray-950 px-4 py-2 bg-blue-200 w-fit rounded-lg">
            {userProfileData.role}
          </span>
          <UserProfileBiography editPermission={editPermission} />
          <p className="mt-4">
            Contact Me via: <span>{userProfileData.email}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-gray-950 font-semibold">
          {userProfileData.name}'s Current Listings
        </h2>
        {useProperties.length > 0 ? (
          <UserProfileListings useProperties={useProperties} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserProfileInfo;
