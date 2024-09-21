import { useState } from "react";
import { User } from "../@types/User";
import { api } from "../api/api";

export function useUser() {
  const [user, setUser] = useState<User>({} as User);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login(email: string, password: string): Promise<void> {
    try {
      await api.post("/users/login", { email, password });
      const userData = await fetchUser();
      setUser(userData.data);
      setIsLoggedIn(true);
    } catch (err) {}
  }

  async function fetchUser() {
    try {
      const json = await api.get("/users/me");
      setIsLoggedIn(true);
      setUser(json.data.data);
      return json.data;
    } catch (err) {
      return null;
    }
  }

  async function logout(): Promise<void> {
    await api.get("/users/logout");
    setUser({} as User);
    setIsLoggedIn(false);
  }

  return {
    fetchUser,
    user,
    setUser,
    isLoggedIn: true,
    setIsLoggedIn,
    logout,
    login,
  };
}
