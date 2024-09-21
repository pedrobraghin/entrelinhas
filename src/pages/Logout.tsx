import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Logout() {
  const { isLoggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      logout();
      return navigate("/entrar");
    }
    navigate("/");
  }, []);

  return (
    <div>
      <h1>Redirecionando...</h1>
    </div>
  );
}
