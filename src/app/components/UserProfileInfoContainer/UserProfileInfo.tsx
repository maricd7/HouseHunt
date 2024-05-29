import Image from "next/image";
import React from "react";

const UserProfileInfo = () => {
  return (
    <div className="bg-white rounded-lg px-8  py-16 w-fit flex flex-col gap-16">
      <div className="flex gap-8">
        <Image
          width={256}
          height={256}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
          alt="Profile Picture"
          className="rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-semibold text-4xl text-gray-950">Jon Doe</h2>
            <p className="text-lg text-gray-500 ">@jondoe1234</p>
          </div>
          <span className="text-xl text-gray-950 px-4 py-2 bg-blue-200 w-fit rounded-lg">
            Buyer
          </span>
          <p className="w-1/2 text-gray-500">
            "As a lifelong resident of sunny San Diego, I bring a deep
            understanding of the local real estate market. With over a decade of
            experience, I am dedicated to helping my clients find their dream
            homes. Whether you're buying or selling, my goal is to make the
            process as seamless and stress-free as possible.
          </p>
          <p className="mt-4">
            Contact Me via:<span>jondoe@mail.com</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl text-gray-950 font-semibold">
          Jon Doe's Current Listings
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
