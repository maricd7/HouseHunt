"use client";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../types/JwtPayload";

const useSessionToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
  useEffect(() => {
    const windowToken = window.sessionStorage.getItem("token");
    if (windowToken) {
      setToken(windowToken);
    }
  }, []);

  return {
    token,
    decodedToken,
    setToken,
  };
};

export default useSessionToken;
