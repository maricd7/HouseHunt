"use client";
import React, { useRef } from "react";
import { CtaButton, Input } from "../common";
import supabase from "@/app/supabase";

const UserSignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef === passwordConfirmRef) {
      return;
    }
    try {
      const { data, error } = await supabase.from("users").insert([
        {
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          username: usernameRef.current?.value,
          role: roleRef.current?.value,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-950">Sign Up</h1>
        <h2>Create your HouseHunt Account Now!</h2>
      </div>
      <form className="flex flex-col gap-8" onSubmit={(e) => handleSignup(e)}>
        <Input
          placeholder="Email"
          type="email"
          label="Email"
          required
          reference={emailRef}
        />
        <Input
          placeholder="Username"
          type="text"
          label="Username"
          required
          reference={usernameRef}
        />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          required
          reference={passwordRef}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          label="Confirm Password"
          required
          reference={passwordConfirmRef}
        />
        <Input
          placeholder="Buyer/Seller"
          type="text"
          label="Role"
          required
          reference={roleRef}
        />
        <CtaButton onClick={() => {}} type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default UserSignupForm;
