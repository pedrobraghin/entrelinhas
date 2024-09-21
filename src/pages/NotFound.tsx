import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <h1>Página não encontrada!</h1>
        <Link to="/">Voltar ao início</Link>
      </main>
      <Footer />
    </div>
  );
}
