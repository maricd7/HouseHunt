import React from "react";
import { CtaButton } from "../common";

const Hero = () => {
  return (
    <section className="h-full flex flex-col justify-center items center">
      <div className="gap-8 flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-semibold w-1/2 text-gray-950">
            Find Your Perfect <span className="text-blue-500">Home:</span>{" "}
            Discover Houses, Apartments, and More!
          </h1>
          <p className="w-1/2 text-lg text-gray-800">
            Easily search and explore a wide range of properties to find the
            perfect home that fits your lifestyle and budget. Whether you're
            looking for a cozy apartment, a spacious house, or a luxurious
            condo, our user-friendly app has everything you need to make your
            dream home a reality.{" "}
          </p>
        </div>
        <CtaButton text="Browse Listings" />
      </div>
    </section>
  );
};

export default Hero;
