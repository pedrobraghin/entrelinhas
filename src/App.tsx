import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Post } from "./pages/Post";
import { PostsByCategory } from "./pages/PostsByCategory";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Logout } from "./pages/Logout";
import { UserContext } from "./contexts/UserContext";
import { useContext, useEffect } from "react";
import { Protected } from "./components/Protected";

function App() {
  const { fetchUser } = useContext(UserContext);
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<Post />} />
      <Route path="/categorias/:category" element={<PostsByCategory />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/sair" element={<Logout />} />

      <Route
        path="/painel"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
