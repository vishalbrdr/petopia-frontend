import { createContext, useContext, useState } from "react";
import signup from "@/api/auth/signup";
import { signin } from "@/api/auth/signin";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  async function signUp(user) {
    setIsLoading(true);
    const res = await signup(user);
    console.table(res);
    setIsLoading(false);
    res.user ? setCurrentUser(res.user) : setError(res.error);
  }
  async function signIn(user) {
    setIsLoading(true);
    const res = await signin(user);
    console.table(res);
    setIsLoading(false);
    res.user ? setCurrentUser(res.user) : setError(res.error);
  }

  const value = {
    currentUser,
    signUp,
    error,
    isLoading,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
