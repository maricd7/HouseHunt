import { UserProfileMainSection } from "@/app/components";
import { ClientDataContextProvider } from "@/app/contexts/ClientDataContext";
import React from "react";

const UserProfile = () => {
  return (
    <ClientDataContextProvider>
      <UserProfileMainSection></UserProfileMainSection>
    </ClientDataContextProvider>
  );
};

export default UserProfile;
