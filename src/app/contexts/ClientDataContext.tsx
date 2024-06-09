"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import supabase from "../supabase";
import { jwtDecode } from "jwt-decode";
import { ClientDataContextProps } from "../types/ClientDataContext";
import { JwtPayload } from "../types/JwtPayload";
import { Property } from "../types/Property";

const ClientDataContext = createContext<ClientDataContextProps | undefined>(
  undefined
);

export const ClientDataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);

  const [currentUserId, setCurrentUserId] = useState<number | undefined>();
  const [currentUserName, setCurrentUserName] = useState<string | undefined>();
  const [currentUserBiography, setCurrentUserBiography] = useState<
    string | undefined
  >("");
  const [ogUserBio, setOgUserBio] = useState<string | undefined>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userProfileURL, setUserProfileURL] = useState<string>("");

  useEffect(() => {
    const windowToken = window.sessionStorage.getItem("token");
    if (windowToken) {
      setToken(windowToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setDecodedToken(decoded);
        setCurrentUserId(decoded.id);
        setCurrentUserName(decoded.username);
      } catch (err) {
        console.error("Failed to decode token:", err);
        setDecodedToken(null);
      }
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  useEffect(() => {
    if (decodedToken) {
      setIsLoggedIn(true);
    } else {
      setCurrentUserId(undefined);
      setIsLoggedIn(false);
    }
  }, [decodedToken]);

  useEffect(() => {
    const getUserBiography = async () => {
      if (currentUserId) {
        const { data, error } = await supabase
          .from("users")
          .select("biography")
          .eq("id", currentUserId)
          .single();
        if (data) {
          setCurrentUserBiography(data.biography);
          setOgUserBio(data.biography);
        } else {
          console.log("Error fetching bio", error);
        }
      }
    };
    getUserBiography();
  }, [currentUserId]);

  const currentUserBiographySetter = (currentBio: string) => {
    setCurrentUserBiography(currentBio);
  };

  const contextValue: ClientDataContextProps = {
    currentUserId,
    currentUserBiography,
    currentUserName,
    ogUserBio,
    isLoggedIn,
    decodedToken,
    userProfileURL,
    setUserProfileURL,
    token,
    setIsLoggedIn,
    setCurrentUserId,
    setCurrentUserBiography,
    currentUserBiographySetter,
  };

  return (
    <ClientDataContext.Provider value={contextValue}>
      {children}
    </ClientDataContext.Provider>
  );
};

export const useClientDataContext = () => {
  const clientDataContext = useContext(ClientDataContext);
  if (!clientDataContext) {
    throw new Error(
      "No ClientDataContext.Provider found when calling useClientDataContext."
    );
  }
  return clientDataContext;
};
