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

interface ClientDataContextProps {
  currentUserId: number | undefined;
  currentUserBiography: string;
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
  const [currentUserBiography, setCurrentUserBiography] = useState<any>();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token?.length) {
      setCurrentUserId(undefined);
    }
    if (currentUserId) {
      Cookies.set("userId", JSON.stringify(currentUserId), {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      setCurrentUserId(currentUserId);
    } else {
      Cookies.remove("userData");
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
  }, [currentUserId]);

  const contextValue: ClientDataContextProps = {
    currentUserId,
    setCurrentUserId,
    currentUserBiography,
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
