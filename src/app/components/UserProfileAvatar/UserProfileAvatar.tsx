"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import supabase from "@/app/supabase";

interface UserAvatarProps {
  userId: number;
}

const UserProfileAvatar = ({ userId }: UserAvatarProps) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const handleChangeAvatar = () => {
    setUploading((prevState) => !prevState);
  };

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setError("You must choose a file to upload!");
      return;
    }
    const avatarFile = file;
    console.log(avatarFile, "fajl");
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`public/${userId}/${avatarFile.name}`, avatarFile, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data) {
      console.log(data, "data");
    }
  };

  useEffect(() => {
    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(`public/${userId}/avatar.jpg`);
    if (data) {
      setAvatar(data.publicUrl);
    }
  }, []);

  return (
    <div className="relative">
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
      <Image
        width={256}
        height={256}
        src={avatar}
        alt="Profile Picture"
        className="rounded-full"
      />
      {uploading && (
        <div className="bg-gray-800 px-4 py-2 rounded-lg mt-4 w-fit text-white flex items-center justify-center">
          <input
            className="w-56"
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadAvatar}
          />
        </div>
      )}
      {error && <span>{error}</span>}
    </div>
  );
};

export default UserProfileAvatar;
