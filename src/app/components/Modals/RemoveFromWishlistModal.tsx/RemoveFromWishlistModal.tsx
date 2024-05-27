import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface ModalProps {
  toggleModal: boolean;
  setToggleModal: () => void;
}
const RemoveFromWishlistModal = ({
  toggleModal,
  setToggleModal,
}: ModalProps) => {
  useEffect(() => {
    if (toggleModal) {
      const timer = setTimeout(() => {
        setToggleModal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toggleModal, setToggleModal]);

  if (!toggleModal) return null;

  console.log("remove");
  return (
    <div className="fixed top-24 right-32 z-50 flex items-center bg-red-500 text-white p-4 rounded-lg shadow-lg animate-slide-in">
      <Icon
        icon="mdi:check-circle"
        width="24"
        height="24"
        style={{ color: "#fff" }}
      />
      <span>Product added to wishlist!</span>
    </div>
  );
};

export default RemoveFromWishlistModal;
