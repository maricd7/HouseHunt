"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState, useRef, useEffect } from "react";
import { CtaButton, Input } from "../../common";
import supabase from "@/app/supabase";

interface UserProfileContactOptionsProps {
  email: string | undefined;
  phoneNumber: string | undefined;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const UserProfileContactOptions = ({
  email,
  phoneNumber,
  setPhoneNumber,
}: UserProfileContactOptionsProps) => {
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const [editPhoneNumber, setEditPhoneNumber] = useState<boolean>(false);
  const handleEditPhoneNumber = async () => {
    try {
      const { error } = await supabase
        .from("users")
        .update({ phone: phoneNumberRef.current?.value })
        .eq("email", email);
      setEditPhoneNumber(false);
    } catch (error) {
      console.log(error);
    }

    setPhoneNumber(phoneNumberRef.current?.value);
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Icon
          icon="carbon:email"
          width="24"
          height="24"
          style={{ color: "#9ca3af" }}
        />
        {email}
      </div>
      <div className="flex items-center gap-2">
        <Icon
          icon="carbon:phone"
          width="24"
          height="24"
          style={{ color: "#9ca3af" }}
        />
        {phoneNumber && phoneNumber}
        <div
          className="flex items-center gap-2 text-gray-400 cursor pointer"
          onClick={() => setEditPhoneNumber(true)}
        >
          <Icon
            icon="carbon:edit"
            width="24"
            height="24"
            style={{ color: "#3b82f6" }}
          />
        </div>
      </div>
      {editPhoneNumber ? (
        <div>
          <Input
            placeholder="Enter your phone nubmer"
            label="Phone Number"
            type="text"
            required
            reference={phoneNumberRef}
          />
          <CtaButton
            type="button"
            text="Save Number"
            onClick={() => handleEditPhoneNumber()}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProfileContactOptions;
