"use client";
import supabase from "@/app/supabase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import { UserProfileBiography } from "../UserProfileBiography";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { UserProfileAvatar } from "../UserProfileAvatar";

const UserProfileInfo = () => {
  const params = useParams();
  const [userProfileData, setUserProfileData] = useState<any>({});

  const { setCurrentUserBiography, currentUserId, currentUserName } =
    useClientDataContext();

  const [editPermission, setEditPermission] = useState<boolean>(true);

  useEffect(() => {
    //function for getting user profile data if profile is not from the logged in user (using declaration for hoisting)
    async function getUserProfileData() {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("id,name,email,username,role,biography")
          .eq("username", params.slug);
        if (data?.length) {
          setCurrentUserBiography(data[0].biography);
          setUserProfileData(data[0]);
        }
      } catch (error) {
        console.log("Error fetching data for this profile!");
      }
    }

    //check if user can edit the profile
    if (currentUserId && userProfileData.username === currentUserName) {
      setEditPermission(true);
    }
    getUserProfileData();
  }, [params, userProfileData]);

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
        <div></div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
