"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();

  // function for handlig logout
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userData");
    router.push("/login");
  };

  return (
    <div
      className="flex gap-2 cursor-pointer hover:text-blue-700"
      onClick={() => handleLogout()}
    >
      <Icon
        icon="carbon:logout"
        width="24"
        height="24"
        style={{ color: "#030712" }}
      />
      Logout
    </div>
  );
};

export default Logout;
