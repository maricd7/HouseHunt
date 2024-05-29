"use client";
import React, { useRef, useState } from "react";
import { CtaButton, Input } from "../common";
import supabase from "@/app/supabase";
import bcrypt from "bcryptjs";

const UserSignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef === passwordConfirmRef) {
      return;
    }
    const password = passwordRef.current?.value;
    if (!password) {
      setErrorMessage("Password is required!");
      return;
    }
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const { data, error } = await supabase.from("users").insert([
        {
          email: emailRef.current?.value,
          password: hashedPassword,
          username: usernameRef.current?.value,
          role: roleRef.current?.value,
        },
      ]);
    } catch (error) {
      setErrorMessage("Error signing up!");
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
        <span className="text-red-500 font  -semibold">{errorMessage}</span>
        <CtaButton onClick={() => {}} type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default UserSignupForm;
