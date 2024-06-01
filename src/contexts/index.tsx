import { createContext, useContext } from "react";

interface AuthContextType {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
  saveToken: (token: string) => void;
  userName: string | null;
}

const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  logIn: () => false,
  logOut: () => true,
  saveToken: () => undefined,
  userName: "",
});

export default AuthContext;
