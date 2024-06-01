"use client";
import supabase from "@/app/supabase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import { UserProfileBiography } from "../UserProfileBiography";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

const UserProfileInfo = () => {
  const params = useParams();
  const [userProfileData, setUserProfileData] = useState<any>({});
  const { setCurrentUserBiography } = useClientDataContext();
  useEffect(() => {
    const userDataFromCookie = Cookies.get("userData");
    if (userDataFromCookie) {
      const parsedUserData = JSON.parse(userDataFromCookie);
      if (params.slug !== parsedUserData.username) {
        getUserProfileData();
      }
      setUserProfileData(parsedUserData);
      return;
    }

    //using declaration for hoisting
    async function getUserProfileData() {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("name,email,username,role,biography")
          .eq("username", params.slug);
        if (data?.length) {
          setCurrentUserBiography(data[0].biography);
          setUserProfileData(data[0]);
        }
      } catch (error) {
        console.log("Error fetching data for this profile!");
      }
    }

    getUserProfileData();
  }, [params]);

  return (
    <div className="bg-white rounded-lg px-8  py-16 w-fit flex flex-col gap-16">
      <div className="flex gap-8">
        <Image
          width={256}
          height={256}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
          alt="Profile Picture"
          className="rounded-lg"
        />
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
          <UserProfileBiography id={userProfileData.id} />
          <p className="mt-4">
            Contact Me via: <span>{userProfileData.email}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-gray-950 font-semibold">
          Jon Doe's Current Listings
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
