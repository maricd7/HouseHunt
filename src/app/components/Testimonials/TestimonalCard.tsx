import Image from "next/image";
import React from "react";

const TestimonalCard = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-16">
      <Image
        className="rounded-full"
        width={120}
        height={120}
        alt="Avatar"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
      />
      <h4 className="text-2xl font-semibold">Alen Wiseman</h4>
      <p className="text-center">
        HouseHunt made my home-buying journey a breeze! As a busy professional,
        I didn't have much time to spare for house hunting. But with HouseHunt's
        user-friendly app, I was able to easily browse through listings during
        my lunch breaks and weekends.{" "}
      </p>
    </div>
  );
};

export default TestimonalCard;
