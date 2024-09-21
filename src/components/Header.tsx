import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function LoggedHeader() {
  return (
    <LoggedHeaderContainer>
      <Link to="/painel">Painel</Link>
      <Link to="/sair">Sair</Link>
    </LoggedHeaderContainer>
  );
}

export function Header() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Container>
      <ul className="links">
        <Link to="/">Início</Link>
      </ul>
      {isLoggedIn ? <LoggedHeader /> : <Link to="/entrar">Entrar</Link>}
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: var(--ui-dark);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 1rem;

  a {
    transition: all 150ms ease-in-out;
  }

  a:hover {
    color: #c8c8c8;
  }
`;

const LoggedHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
