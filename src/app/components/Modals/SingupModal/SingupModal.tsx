"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const SingupModal = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
      <Icon
        icon="line-md:confirm-circle"
        width="96"
        height="96"
        style={{ color: "#3b82f6" }}
      />
      <h2 className="text-gray-950 text-4xl font-semibold text-center">
        {" "}
        Sign Up Successfull !
      </h2>
      <Link
        className="bg-blue-700 px-8 rounded-lg py-2 text-white text-xl text-center underline hover:bg-white hover:text-blue-700 hover:border border-blue-700"
        href="login"
      >
        Login
      </Link>
    </div>
  );
};

export default SingupModal;
