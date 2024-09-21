import { createContext } from "react";
import { User } from "../@types/User";
import { useUser } from "../hooks/useUser";

interface UserContextType {
  fetchUser: () => Promise<User>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const userState = useUser();
  return (
    <UserContext.Provider value={{ ...userState }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
