"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import useSessionToken from "@/app/hooks/useSessionToken";
import { useRouter } from "next/navigation";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

const Logout = () => {
  const { destroySession } = useSessionToken();
  const { setIsLoggedIn } = useClientDataContext();
  const router = useRouter();

  const handleLogout = () => {
    destroySession();
    setIsLoggedIn(false);
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
