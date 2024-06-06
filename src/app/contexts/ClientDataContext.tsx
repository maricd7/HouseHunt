"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import supabase from "../supabase";
import useSessionToken from "../hooks/useSessionToken";

interface ClientDataContextProps {
  currentUserId: number | undefined;
  currentUserBiography: string | undefined;
  currentUserName: string | undefined;
  ogUserBio: string | undefined;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCurrentUserBiography: React.Dispatch<
    React.SetStateAction<string | undefined | any>
  >;
  currentUserBiographySetter: (currentBio: string) => void;
}

const ClientDataContext = createContext<ClientDataContextProps | undefined>(
  undefined
);

export const ClientDataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { decodedToken } = useSessionToken();
  const [currentUserId, setCurrentUserId] = useState<number | undefined>();
  const [currentUserName, setCurrentUserName] = useState<string | undefined>();
  const [currentUserBiography, setCurrentUserBiography] = useState<
    string | undefined
  >("");
  const [ogUserBio, setOgUserBio] = useState<string | undefined>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (decodedToken) {
      setCurrentUserId(decodedToken.id);
      setCurrentUserName(decodedToken.username);
      setIsLoggedIn(true);
    } else {
      setCurrentUserId(undefined);
      setIsLoggedIn(false);
    }

    const getUserBiography = async () => {
      if (currentUserId) {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", currentUserId);
        if (data) {
          setCurrentUserBiography(data[0].biography);
          setOgUserBio(data[0].biography);
        } else {
          console.log("Error fetching bio");
        }
      }
    };
    getUserBiography();
  }, [currentUserId, decodedToken]);
  const currentUserBiographySetter = (currentBio: string) => {
    console.log(currentBio);
    setCurrentUserBiography(currentBio);
  };
  const contextValue: ClientDataContextProps = {
    currentUserId,
    currentUserBiography,
    currentUserName,
    ogUserBio,
    isLoggedIn,
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
