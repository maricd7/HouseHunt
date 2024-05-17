import React from "react";
import { ListingsHero } from "../components";
import { PropertiesContextProvider } from "../contexts/PropertiesContext";

const Listings = () => {
  return (
    <PropertiesContextProvider>
      <main>
        <ListingsHero />
      </main>
    </PropertiesContextProvider>
  );
};

export default Listings;
