"use client";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { useModal } from "@/app/contexts/ModalContex";

const Logout = () => {
  const router = useRouter();
  const { setIsLoggedIn, setUserProfileURL } = useClientDataContext();
  const { showModal } = useModal();
  const handleLogout = () => {
    router.push("/login");
    setUserProfileURL("");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleLogoutButtonClick = () => {
    showModal(
      "Are you sure you want to log out?",
      () => {
        handleLogout();
      },
      () => {}
    );
  };
  return (
    <div
      className="flex gap-2 cursor-pointer hover:text-blue-700"
      onClick={handleLogoutButtonClick}
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
