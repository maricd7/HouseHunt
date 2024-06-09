import React from "react";
import { CreateListings } from "../components";

const CreateListingPage = () => {
  return (
    <main className="px-32 py-32">
      <h1 className="text-6xl font-semibold text-gray-950 mb-16">
        Create a Listing
      </h1>
      <CreateListings />
    </main>
  );
};

export default CreateListingPage;
