import React from "react";
import { UserProfileInfo } from "../UserProfileInfoContainer";

const UserProfileMainSection = () => {
  return (
    <section className="py-16 flex justify-center items-center gap-16 bg-hero-pattern px-32">
      <UserProfileInfo />
    </section>
  );
};

export default UserProfileMainSection;
