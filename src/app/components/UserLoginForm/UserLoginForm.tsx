"use client";
import React, { useRef, useState } from "react";
import { CtaButton, Input } from "../common";

const UserLoginForm = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      const { token } = result;

      // Store the token (e.g., in localStorage or cookies)
      localStorage.setItem("token", token);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
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
