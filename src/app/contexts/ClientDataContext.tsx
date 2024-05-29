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

interface ClientDataContextProps {
  userData: UserInterface | undefined;
  setUserData: React.Dispatch<React.SetStateAction<UserInterface | undefined>>;
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

  useEffect(() => {
    if (userData) {
      Cookies.set("userData", JSON.stringify(userData), {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
    } else {
      Cookies.remove("userData");
    }
  }, [userData]);

  const contextValue: ClientDataContextProps = {
    userData,
    setUserData,
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
