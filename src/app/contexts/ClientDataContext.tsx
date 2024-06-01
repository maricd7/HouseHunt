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
  userData: UserInterface | undefined;
  currentUserBiography: string;
  setUserData: React.Dispatch<React.SetStateAction<UserInterface | undefined>>;
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
  const [userData, setUserData] = useState<UserInterface | undefined>(() => {
    if (typeof window !== "undefined") {
      const savedUserData = Cookies.get("userData");
      return savedUserData ? JSON.parse(savedUserData) : undefined;
    }
    return undefined;
  });
  const [currentUserId, setCurrentUserId] = useState<number>();
  const [currentUserBiography, setCurrentUserBiography] = useState<any>();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token?.length) {
      setUserData(undefined);
    }
    if (userData) {
      Cookies.set("userData", JSON.stringify(userData), {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      setCurrentUserId(userData.id);
    } else {
      Cookies.remove("userData");
    }

    const getUserBiography = async () => {
      if (userData) {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", userData.id);
        data
          ? setCurrentUserBiography(data[0].biography)
          : console.log("error fetching bio");
      }
    };
    getUserBiography();
  }, [userData]);

  const contextValue: ClientDataContextProps = {
    userData,
    setUserData,
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
