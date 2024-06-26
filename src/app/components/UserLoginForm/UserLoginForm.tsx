"use client";
import React, { useRef, useState } from "react";
import { CtaButton, Input } from "../common";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useSessionToken from "@/app/hooks/useSessionToken";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import { loginUser } from "@/app/actions/loginUser";

const UserLoginForm = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { setToken } = useSessionToken();
  const { setIsLoggedIn, setUserProfileURL } = useClientDataContext();

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
      const response = await loginUser({ email, password });

      if (response.status !== 200) {
        throw new Error(response.json.message || "Login failed");
      }

      const { token, userName } = response.json;
      if (userName) {
        setUserProfileURL(`/profile/${userName}`);
        sessionStorage.setItem("userProfileURL", `/profile/${userName}`);
      }
      if (token) {
        sessionStorage.setItem("token", token);
        setToken(token);
        setIsLoggedIn(true);
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
      <form className="flex flex-col gap-8 w-full " onSubmit={handleLogin}>
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
        <span className="text-red-500 font-semibold">{errorMessage}</span>
        <CtaButton onClick={() => {}} type="submit" text="Sign In" />
        <span className="text-center">
          Don&apos;t have an account ?{" "}
          <Link href="/signup" className="text-blue-400">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default UserLoginForm;
