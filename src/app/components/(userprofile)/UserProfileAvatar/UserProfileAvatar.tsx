"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { uploadAvatar } from "@/app/actions/uploadAvatar";
import { fetchAvatarUrl } from "@/app/actions/fetchAvatarUrl";

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
    setUploading(true);
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

    // read file when uploaded
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleCancel = () => {
    setAvatar(originalAvatar);
    setUploading(false);
    setIsFileUploaded(false);
  };

  const handleSave = () => {
    if (file) {
      uploadAvatar(
        userId,
        file,
        setError,
        setAvatar,
        setOriginalAvatar,
        setUploading,
        setIsFileUploaded
      );
    }
  };

  useEffect(() => {
    const getUserAvatarURL = async () => {
      const data = await fetchAvatarUrl(userId);

      if (data) {
        const avatarURL = data;
        setAvatar(avatarURL.data.avatar);
      }
    };
    getUserAvatarURL();
  }, [userId]);

  return (
    <div className="relative h-fit">
      {editPermission && (
        <div
          className="bg-gray-800 absolute bottom-8 right-4 rounded-full cursor-pointer p-2 hover:shadow-lg"
          onClick={handleChangeAvatar}
        >
          <Icon
            icon="carbon:edit"
            width="32"
            height="32"
            style={{ color: "#fff" }}
          />
        </div>
      )}
      <Image
        width={256}
        height={256}
        src={avatar || "/avatars/avatar.jpg"}
        alt="Profile Picture"
        className="rounded-full"
        priority
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
              <button
                onClick={handleSave}
                className="bg-white text-gray-950 px-4 py-2 rounded-md cursor-pointer"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-transparent text-red-700 px-4 py-2 border border-red-700 rounded-md cursor-pointer hover:bg-red-700 hover:text-white"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
      {error && <span>{error}</span>}
    </div>
  );
};

export default UserProfileAvatar;
