"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "../common/Logo";
import NavLink from "./NavLink";
import { Loguout } from "../Logout";
import useSessionToken from "@/app/hooks/useSessionToken";

function Nav() {
  const { decodedToken } = useSessionToken();
  const [logoutButton, setLogoutButton] = useState<boolean>(false);

  useEffect(() => {
    if (decodedToken) {
      setLogoutButton(true);
    } else {
      setLogoutButton(false);
    }
  }, [decodedToken]);

  const userProfileURL =
    "/profile/" + (decodedToken ? decodedToken.username : "");

  return (
    <nav className="bg-white py-6 px-32 flex justify-between fixed top-0 left-0 w-full z-50 border border-gray-200">
      <Logo />
      <ul className="flex gap-8">
        <NavLink icon="home" text="Home" href="/" />
        <NavLink icon="building" text="Listings" href="/listings" />
        <NavLink icon="user-multiple" text="Members" href="/members" />
        <NavLink icon="information" text="About Us" href="../#about-us" />
        <NavLink icon="location-heart" text="Wishlist" href="/wishlist" />
        {logoutButton ? (
          <NavLink icon="user" text="Profile" href={userProfileURL} />
        ) : null}
        {logoutButton ? (
          <Loguout setLogoutButton={setLogoutButton} />
        ) : (
          <NavLink icon="login" text="Login" href="/login" />
        )}
      </ul>
    </nav>
  );
}
export default Nav;
