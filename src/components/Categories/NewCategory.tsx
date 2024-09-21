import { useContext, useState } from "react";
import styled from "styled-components";
import { BlogContext } from "../../contexts/BlogContext";
import { ErrorContainer } from "../ErrorContainer";

export function NewCategory() {
  const { createCategory } = useContext(BlogContext);
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState<Error | null>(null);
  const [message, setMessage] = useState("");

  async function handleCreateCategory() {
    setMessage("");
    setError(null);
    if (!categoryName) {
      setError(new Error("É necessário informar um nome para a categoria!"));
      return;
    }
    const response = await createCategory(categoryName);
    console.log(response);
    if (!response) {
      return setError(new Error(`A categoria "${categoryName}" já existe!`));
    }
    setMessage(`Categoria ${categoryName} criada com sucesso!`);
  }

  function handleInputCategory(e: React.FormEvent<HTMLInputElement>) {
    setCategoryName(e.currentTarget.value);
  }

  async function handleEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      await handleCreateCategory();
    }
  }

  return (
    <Container>
      <h1>Criar uma nova categorias</h1>
      <div className="input-container">
        <label htmlFor="category">Nome da categoria</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Ex.: Econonomia"
          required
          onChange={handleInputCategory}
          onKeyDown={handleEnterPress}
        />
      </div>
      <div className="submit-container">
        <button onClick={handleCreateCategory} className="create-btn">
          Criar
        </button>
      </div>
      <div className="errors-container">
        {error && <ErrorContainer message={error.message} />}
      </div>
      <div className="messages-container">
        <span className="message">{message}</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
      outline: none;
      padding: 1rem 1rem;
      border-radius: 0.2rem;
    }
  }

  .create-btn {
    padding: 0.5rem 2rem;
    color: var(--text-light);
    background-color: var(--ui-dark);
    cursor: pointer;
    &:hover {
      background-color: #353535;
    }
  }
`;
