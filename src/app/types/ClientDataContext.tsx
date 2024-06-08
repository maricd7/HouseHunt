import { JwtPayload } from "../types/JwtPayload";
export interface ClientDataContextProps {
  currentUserId: number | undefined;
  token: string | null;
  decodedToken: JwtPayload | null;
  currentUserBiography: string | undefined;
  currentUserName: string | undefined;
  ogUserBio: string | undefined;
  userProfileURL: string | undefined;
  setUserProfileURL: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCurrentUserBiography: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  currentUserBiographySetter: (currentBio: string) => void;
}
