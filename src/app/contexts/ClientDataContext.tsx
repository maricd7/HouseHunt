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
  setCurrentUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCurrentUserBiography: React.Dispatch<
    React.SetStateAction<string | undefined>
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

  useEffect(() => {
    if (decodedToken) {
      setCurrentUserId(decodedToken.id);
      setCurrentUserName(decodedToken.username);
    } else {
      setCurrentUserId(undefined);
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
          console.log("error fetching bio");
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
