"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import supabase from "@/app/supabase";

interface UserAvatarProps {
  userId: number;
  editPermission: boolean;
}

const UserProfileAvatar = ({ userId, editPermission }: UserAvatarProps) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [originalAvatar, setOriginalAvatar] = useState<string>("");
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleChangeAvatar = () => {
    setUploading((prevState) => !prevState);
  };

  const profileAvatarFileSetter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (!selectedFile) {
      setError("You must choose a file to upload!");
      return;
    }
    const newAvatarFile = new File([selectedFile], "avatar.jpg", {
      type: selectedFile.type,
    });
    setFile(newAvatarFile);
    setIsFileUploaded(true);

    // Display the selected file immediately
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const uploadAvatar = async () => {
    if (file) {
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`public/${userId}/avatar.jpg`, file, {
          cacheControl: "3600",
          upsert: true,
        });
      if (error) {
        setError(error.message);
      } else {
        setError("");
        if (data) {
          // Fetch the new avatar URL with a cache-busting query parameter
          const { data: avatarData } = supabase.storage
            .from("avatars")
            .getPublicUrl(`public/${userId}/avatar.jpg`);
          if (avatarData) {
            setAvatar(`${avatarData.publicUrl}?t=${new Date().getTime()}`);
            setOriginalAvatar(
              `${avatarData.publicUrl}?t=${new Date().getTime()}`
            );
          }
        }
      }
      setUploading(false);
      setIsFileUploaded(false);
    }
  };

  const handleCancel = () => {
    setAvatar(originalAvatar);
    setUploading(false);
    setIsFileUploaded(false);
  };

  useEffect(() => {
    //fetch source for avatar on mount
    const fetchAvatarUrl = async () => {
      const { data } = await supabase.storage
        .from("avatars")
        .getPublicUrl(`public/${userId}/avatar.jpg`);
      if (data) {
        const avatarUrl = `${data.publicUrl}?t=${new Date().getTime()}`;
        setAvatar(avatarUrl);
        setOriginalAvatar(avatarUrl);

        // update avatar in users table
        const { error } = await supabase
          .from("users")
          .update({ avatar: avatarUrl })
          .eq("id", userId);
        if (error) {
          console.log(error, "Error");
        }
      }
    };
    fetchAvatarUrl();
  }, [userId]);

  return (
    <div className="relative">
      {editPermission ? (
        <div
          className="bg-gray-800 absolute bottom-16 right-4 rounded-full cursor-pointer p-2 hover:shadow-lg"
          onClick={handleChangeAvatar}
        >
          <Icon
            icon="carbon:edit"
            width="32"
            height="32"
            style={{ color: "#fff" }}
          />
        </div>
      ) : (
        <></>
      )}
      <Image
        width={256}
        height={256}
        src={
          avatar
            ? avatar
            : "https://plus.unsplash.com/premium_photo-1683133252442-b06a950092da?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
        }
        alt="Profile Picture"
        className="rounded-full"
      />
      {uploading && (
        <div className="bg-gray-800 px-4 py-2 rounded-lg mt-4 w-fit text-white flex gap-4 items-center justify-center">
          <input
            className="w-56"
            type="file"
            id="single"
            accept="image/*"
            onChange={profileAvatarFileSetter}
          />
          {isFileUploaded && (
            <div className="flex gap-2">
              <span
                onClick={uploadAvatar}
                className="bg-white text-gray-950 px-4 py-2 rounded-md cursor-pointer"
              >
                Save
              </span>
              <span
                onClick={handleCancel}
                className="bg-transparent text-red-700 px-4 py-2 border border-red-700 rounded-md cursor-pointer hover:bg-red-700 hover:text-white"
              >
                Cancel
              </span>
            </div>
          )}
        </div>
      )}
      {error && <span>{error}</span>}
    </div>
  );
};

export default UserProfileAvatar;
