"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: string;
  text: string;
}

const NavLink = ({ href, icon, text }: NavLinkProps) => {
  return (
    <li>
      <Link className="flex itmes-center gap-2 hover:text-blue-700" href={href}>
        <Icon
          icon={"carbon:" + icon}
          width="24"
          height="24"
          style={{ color: "#000" }}
        />
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
