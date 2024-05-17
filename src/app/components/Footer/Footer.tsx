import React from "react";
import { Logo } from "../common";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-16">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <p className="text-sm">&copy; HouseHunt All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
