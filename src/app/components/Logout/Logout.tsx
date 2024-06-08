"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

const Logout = () => {
  const router = useRouter();
  const { setIsLoggedIn, setUserProfileURL } = useClientDataContext();
  const handleLogout = () => {
    router.push("/login");
    setUserProfileURL("");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div
      className="flex gap-2 cursor-pointer hover:text-blue-700"
      onClick={handleLogout}
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
