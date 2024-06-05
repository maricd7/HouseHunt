"use client";
import React, { useRef, useState } from "react";
import { CtaButton, Input } from "../common";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "@/app/types/JwtPayload";

const UserLoginForm = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const { setCurrentUserId } = useClientDataContext();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      const { token } = result;

      //storing token and user data to session storage
      sessionStorage.setItem("token", token);

      if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        console.log("asdasdasd", decoded.id);
        setCurrentUserId(decoded.id);
        router.push("/");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center mt-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-950">Login</h1>
        <h2>Login into Your HouseHunt Account Now!</h2>
      </div>
      <form className="flex flex-col gap-8" onSubmit={(e) => handleLogin(e)}>
        <Input
          placeholder="Email"
          type="email"
          label="Email"
          required
          reference={emailRef}
        />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          required
          reference={passwordRef}
        />
        <span className="text-red-500 font  -semibold">{errorMessage}</span>
        <CtaButton onClick={() => {}} type="submit" text="Sign In" />
        <span className="text-center">
          Don't have an account ?{" "}
          <Link href="/signup" className="text-blue-400">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default UserLoginForm;
