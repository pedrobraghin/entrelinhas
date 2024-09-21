import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { UserContext } from "../contexts/UserContext";

export function Login() {
  const navigate = useNavigate();

  const { isLoggedIn, login } = useContext(UserContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/painel");
    }
  }, [isLoggedIn]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }
    setIsLoading(false);
  }

  function handleEmailInput(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  function handlePasswordInput(event: React.FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  return (
    <div>
      <Header />
      <Main>
        <h1>Faça login para continuar</h1>
        <Form method="post" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="email" hidden>
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={handleEmailInput}
            />
          </div>
          <div className="row">
            <label htmlFor="password" hidden>
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              onChange={handlePasswordInput}
            />
          </div>
          <div className="submit-row">
            {isLoading ? <Loader /> : <input type="submit" value="Entrar" />}
          </div>
        </Form>
        <div className="error-container">{error && error.message}</div>
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.main`
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input[type="email"],
  input[type="password"] {
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    outline: none;
  }

  input[type="submit"] {
    padding: 0 2rem;
    width: 100%;
    height: 2.5em;
    cursor: pointer;
  }

  .submit-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
