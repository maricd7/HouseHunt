"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "../common/Logo";
import NavLink from "./NavLink";
import Logout from "../Logout/Logout";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";

function Nav() {
  const { isLoggedIn, userProfileURL } = useClientDataContext();

  // useEffect(() => {
  //   if (isLoggedIn && decodedToken) {
  //     setUserProfileURL(`/profile/${decodedToken.username}`);
  //   } else {
  //     setUserProfileURL("");
  //   }
  // }, [decodedToken, isLoggedIn]);

  return (
    <nav className="bg-white py-6 px-32 flex justify-between fixed top-0 left-0 w-full z-50 border border-gray-200">
      <Logo />
      <ul className="flex gap-8">
        <NavLink icon="home" text="Home" href="/" />
        <NavLink icon="building" text="Listings" href="/listings" />
        <NavLink icon="user-multiple" text="Members" href="/members" />
        <NavLink icon="information" text="About Us" href="../#about-us" />
        <NavLink icon="location-heart" text="Wishlist" href="/wishlist" />
        {isLoggedIn && userProfileURL ? (
          <NavLink icon="user" text="Profile" href={userProfileURL} />
        ) : null}
        {isLoggedIn ? (
          <Logout />
        ) : (
          <NavLink icon="login" text="Login" href="/login" />
        )}
      </ul>
    </nav>
  );
}

export default Nav;
