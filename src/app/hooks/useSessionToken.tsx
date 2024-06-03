"use client";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../types/JwtPayload";

const useSessionToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);

  useEffect(() => {
    if (window) {
      const windowToken = window.sessionStorage.getItem("token");
      setToken(windowToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setDecodedToken(decoded);
      } catch (err) {
        console.error("Failed to decode token:", err);
      }
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  return { token, decodedToken };
};

export default useSessionToken;
