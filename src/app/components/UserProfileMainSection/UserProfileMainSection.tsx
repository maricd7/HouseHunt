import React from "react";
import { UserProfileInfo } from "../UserProfileInfoContainer";

const UserProfileMainSection = () => {
  return (
    <section className="h-screen flex justify-center items-center gap-16 bg-hero-pattern px-32">
      <UserProfileInfo />
    </section>
  );
};

export default UserProfileMainSection;
