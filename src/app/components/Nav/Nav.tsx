import React from "react";
import { Logo } from "../common/Logo";
import Link from "next/link";

function Nav() {
  return (
    <nav className="py-8 px-32 flex justify-between fixed top-0 left-0 w-full">
      <Logo />
      <ul className="flex gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Listings</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link
            className="py-4 px-8 bg-blue-500 rounded-full text-white hover:bg-blue-700"
            href="/"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
