import React from "react";
import { CtaButton } from "../common";
import { HeroCard } from "../HeroCard";

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center gap-16 bg-hero-pattern  bg-hero-pattern  px-32">
      <div className="gap-8 flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-semibold  text-gray-950">
            Find Your Perfect <span className="text-blue-700">Home:</span>{" "}
            Discover Houses, Apartments, and More!
          </h1>
          <p className=" text-lg text-gray-800">
            Easily search and explore a wide range of properties to find the
            perfect home that fits your lifestyle and budget. Whether you're
            looking for a cozy apartment, a spacious house, or a luxurious
            condo, our user-friendly app has everything you need to make your
            dream home a reality.{" "}
          </p>
        </div>
        <CtaButton text="Browse Listings" />
      </div>
      <HeroCard />
    </section>
  );
};

export default Hero;
