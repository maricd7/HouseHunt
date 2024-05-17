"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center justify-center">
      <Icon
        icon="gis:home"
        width="32"
        height="32"
        style={{ color: "#3b82f6" }}
      />
      <h2 className="text-2xl font-semibold">HouseHunt</h2>
    </Link>
  );
};

export default Logo;
