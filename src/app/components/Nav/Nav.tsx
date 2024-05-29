import React from "react";
import { Logo } from "../common/Logo";
import Link from "next/link";
import NavLink from "./NavLink";

function Nav() {
  return (
    <nav className=" bg-white py-8 px-32 flex justify-between fixed top-0 left-0 w-full z-50 ">
      <Logo />
      <ul className="flex gap-8">
        <NavLink icon="home" text="Home" href="/" />
        <NavLink icon="building" text="Listings" href="/listings" />
        <NavLink icon="information" text="About Us" href="#about-us" />
        <NavLink icon="location-heart" text="Wishlist" href="/wishlist" />
        <NavLink icon="user" text="Profile" href="/profile" />
      </ul>
    </nav>
  );
}
export default Nav;
