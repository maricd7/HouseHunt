"use client";
import React from "react";
import { CtaButton, Input } from "../common";

const UserSignupForm = () => {
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-950">Sign Up</h1>
        <h2>Create your HouseHunt Account Now!</h2>
      </div>
      <form className="flex flex-col gap-8" onSubmit={(e) => handleSignup(e)}>
        <Input placeholder="Email" type="email" label="Email" required />
        <Input placeholder="Username" type="text" label="Username" required />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          required
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          label="Confirm Password"
          required
        />

        <CtaButton onClick={() => {}} type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default UserSignupForm;
