import { ClientDataContextProvider } from "@/app/contexts/ClientDataContext";
import React from "react";

const UserProfile = () => {
  return (
    <ClientDataContextProvider>
      <div>UserProfile</div>
    </ClientDataContextProvider>
  );
};

export default UserProfile;
