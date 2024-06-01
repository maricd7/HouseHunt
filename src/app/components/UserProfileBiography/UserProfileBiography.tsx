import React, { useEffect, useState } from "react";
import supabase from "@/app/supabase";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

interface UserProfileBiographyProps {
  id: number;
}

const UserProfileBiography = ({ id }: UserProfileBiographyProps) => {
  const [editBiography, setEditBiography] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();

  //biography setters
  const { currentUserBiography, setCurrentUserBiography } =
    useClientDataContext();

  useEffect(() => {
    id ? setUserId(id) : <></>;
  }, [id]);

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

  const handleBiographyButtonClick = () => {
    if (!editBiography) {
      setEditBiography(true);
    } else {
      handleUpdateBiography(currentUserBiography);
    }
  };
  return (
    <div>
      {editBiography ? (
        <textarea
          className="px-4 py-2 my-4 border boder-gray-200 text-md min-w-96 min-h-56"
          value={currentUserBiography}
          placeholder="Enter your biography"
          onChange={(e) => setCurrentUserBiography(e.currentTarget.value)}
        ></textarea>
      ) : (
        <p className="w-1/2 text-gray-500 text-md">{currentUserBiography}</p>
      )}
      <span
        className="flex px-4 py-2 bg-gray-800 text-white w-fit rounded-md cursor-pointer hover:bg-gray-950"
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
    </div>
  );
};

export default UserProfileBiography;
