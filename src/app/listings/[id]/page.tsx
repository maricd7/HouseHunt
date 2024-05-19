import { ListingPageTopBox } from "@/app/components";
import { PropertiesContextProvider } from "@/app/contexts/PropertiesContext";
import React from "react";

const ListingPage = () => {
  return (
    <PropertiesContextProvider>
      <main>
        <ListingPageTopBox />
      </main>
    </PropertiesContextProvider>
  );
};

export default ListingPage;
