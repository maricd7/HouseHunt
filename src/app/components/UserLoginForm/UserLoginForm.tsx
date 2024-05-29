"use client";
import { Input } from "../common";
import React, { useRef, useState } from "react";
import { CtaButton } from "../common";

const UserLoginForm = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-950">Login</h1>
        <h2>Login into Your HouseHunt Account Now!</h2>
      </div>
      <form className="flex flex-col gap-8" onSubmit={(e) => handleLogin(e)}>
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
        <span className="text-red-500 font  -semibold">{errorMessage}</span>
        <CtaButton onClick={() => {}} type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default UserLoginForm;
