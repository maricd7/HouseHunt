"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { UserInterface } from "../types/User";
import Cookies from "js-cookie";
import supabase from "../supabase";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../types/JwtPayload";

interface ClientDataContextProps {
  currentUserId: number | undefined;
  currentUserBiography: string;
  currentUserName: string | undefined;
  setCurrentUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCurrentUserBiography: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

const ClientDataContext = createContext<ClientDataContextProps | undefined>(
  undefined
);

export const ClientDataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUserId, setCurrentUserId] = useState<number>();
  const [currentUserName, setCurrentUserName] = useState<string>();
  const [currentUserBiography, setCurrentUserBiography] = useState<any>();
  const token = window.sessionStorage.getItem("token");

  useEffect(() => {
    if (!token?.length) {
      setCurrentUserId(undefined);
    } else {
      const decoded = jwtDecode<JwtPayload>(token);
      setCurrentUserId(decoded.id);
      setCurrentUserName(decoded.username);
    }

    const getUserBiography = async () => {
      if (currentUserId) {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", currentUserId);
        data
          ? setCurrentUserBiography(data[0].biography)
          : console.log("error fetching bio");
      }
    };
    getUserBiography();
  }, [currentUserId, token]);

  const contextValue: ClientDataContextProps = {
    currentUserId,
    currentUserBiography,
    currentUserName,
    setCurrentUserId,
    setCurrentUserBiography,
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
      "No PropertiesContext.Provider found when calling useClientDataContext."
    );
  }
  return clientDataContext;
};
