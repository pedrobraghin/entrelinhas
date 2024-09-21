import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
interface ProtectedProps {
  children: React.ReactElement;
}

export function Protected({ children }: ProtectedProps) {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return <Navigate to="/entrar" />;
  }

  return children;
}
