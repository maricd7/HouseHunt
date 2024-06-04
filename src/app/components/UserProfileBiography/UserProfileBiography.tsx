import React, { useEffect, useState } from "react";
import supabase from "@/app/supabase";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

interface UserProfileBiography {
  editPermission: boolean;
}
const UserProfileBiography = ({ editPermission }: UserProfileBiography) => {
  const [editBiography, setEditBiography] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();

  //biography setters
  const {
    currentUserBiography,
    setCurrentUserBiography,
    currentUserId,
    ogUserBio,
  } = useClientDataContext();

  useEffect(() => {
    setUserId(currentUserId);
  }, [currentUserId]);

  const handleUpdateBiography = async (bio: string) => {
    if (userId) {
      const { data, error } = await supabase
        .from("users")
        .update({ biography: bio })
        .eq("id", userId);

      if (!error) {
        setEditBiography(false);
      } else {
        console.error(error);
      }
    } else {
      console.log("User id is undefined!");
    }
  };

  // biography editor button handler
  const handleBiographyButtonClick = () => {
    if (!editBiography) {
      setEditBiography(true);
    } else {
      handleUpdateBiography(currentUserBiography);
    }
  };

  // cancel edit handler
  const handleCancelEdit = () => {
    setEditBiography(false);
    setCurrentUserBiography(ogUserBio);
  };

  return (
    <div>
      {editBiography ? (
        <textarea
          className="px-4 py-2 my-4  text-md "
          value={currentUserBiography}
          placeholder="Enter your biography"
          onChange={(e) => setCurrentUserBiography(e.currentTarget.value)}
        ></textarea>
      ) : (
        <p className="w-1/2 text-gray-500 text-md">{currentUserBiography}</p>
      )}
      {editPermission ? (
        <div className="flex gap-4 mt-8">
          <span
            className="flex px-4 py-2 bg-gray-800 text-sm items-center text-white w-fit rounded-md cursor-pointer hover:bg-gray-950"
            onClick={() => {
              handleBiographyButtonClick();
            }}
          >
            <Icon
              icon="carbon:pen"
              width="24"
              height="24"
              style={{ color: "#fff" }}
            />
            {editBiography ? "Save Biography" : "Edit Bio"}
          </span>
          {editBiography ? (
            <span
              onClick={() => {
                handleCancelEdit();
              }}
              className="text-sm flex items center  justify-center px-4 py-2 bg-red-800 text-white w-fit rounded-md cursor-pointer hover:bg-gray-950"
            >
              Cancel
            </span>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProfileBiography;
