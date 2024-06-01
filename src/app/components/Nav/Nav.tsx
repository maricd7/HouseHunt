"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "../common/Logo";
import NavLink from "./NavLink";
import Cookies from "js-cookie";
import { Loguout } from "../Logout";
function Nav() {
  const [userProfileSlug, setUserProfileSlug] = useState<string>("");
  const [logoutButton, setLogoutButton] = useState<boolean>(false);
  const userDataFromCookie = Cookies.get("userData");
  useEffect(() => {
    if (userDataFromCookie) {
      const parsedUserData = JSON.parse(userDataFromCookie);
      if (parsedUserData) {
        setUserProfileSlug(parsedUserData.username);
        setLogoutButton(true);
      }
    }
  }, [logoutButton]);

  const url = "/profile/" + userProfileSlug;

  return (
    <nav className=" bg-white py-6 px-32 flex justify-between fixed top-0 left-0 w-full z-50 border border-gray-200">
      <Logo />
      <ul className="flex gap-8">
        <NavLink icon="home" text="Home" href="/" />
        <NavLink icon="building" text="Listings" href="/listings" />
        <NavLink icon="information" text="About Us" href="../#about-us" />
        <NavLink icon="location-heart" text="Wishlist" href="/wishlist" />
        {logoutButton ? (
          <NavLink icon="user" text="Profile" href={url} />
        ) : (
          <></>
        )}
        {logoutButton ? <Loguout setLogoutButton={setLogoutButton} /> : <></>}
      </ul>
    </nav>
  );
}
export default Nav;
