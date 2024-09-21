import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import { TextEditor } from "../TextEditor/TextEditor";
import { Link, useNavigate } from "react-router-dom";
import { BlogContext } from "../../contexts/BlogContext";
import { CategoryCheckbox } from "../CategoryCheckBox";
import { Category } from "../../@types/Category";
import { ErrorContainer } from "../ErrorContainer";

export function NewPost() {
  const navigate = useNavigate();
  const { createPost, fetchAllCategories } = useContext(BlogContext);

  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postCategories, setPostCategories] = useState<string[]>([]);
  const [, setSelectedCategories] = useState<Category[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<File[]>();
  const [errors, setErrors] = useState<undefined | string[]>();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const data = await fetchAllCategories();
    setCategories(data);
  }

  function handleContentChange(content: string) {
    setPostBody(content);
  }

  function handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
    setPostTitle(e.currentTarget.value);
  }

  function handleCategoryChange(label: string, id: string, checked: boolean) {
    if (checked) {
      setSelectedCategories((prev) => {
        const updated = [...prev, { name: label, _id: id }];
        setPostCategories(updated.map((c) => c._id));
        return updated;
      });
    } else {
      setSelectedCategories((prev) => {
        const filtered = prev.filter((c) => {
          return !(c.name == label);
        });
        setPostCategories(filtered.map((c) => c._id));
        return filtered;
      });
    }
  }

  function validateFields() {
    const errors: string[] = [];

    if (!postTitle) {
      errors.push("O nome do post é obrigatório e deve ser único!");
    }

    if (!postBody) {
      errors.push("O post deve ter conteúdo!");
    }

    if (postCategories.length < 1) {
      errors.push("O post deve ter pelo menos uma categoria!");
    }

    if (errors.length > 0) {
      throw errors;
    }
  }

  async function handleSavePost() {
    setErrors(undefined);
    setMessage("");
    try {
      validateFields();
      const response = await createPost(
        postTitle,
        postBody,
        postCategories,
        images
      );
      if (!response) {
        return setErrors([`Já existe um post com o título: ${postTitle}`]);
      }
      setMessage(`Post criado com sucesso: "${postTitle}"`);
      console.log(response);
      navigate(`/${response.slug}`);
    } catch (err) {
      setErrors(err as string[]);
    }
  }

  return (
    <div>
      <Main>
        <h1>Novo post</h1>
        <ContentContainer>
          <div className="row">
            <label htmlFor="title">Título do post</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Ex.: Pão de arroz"
              required
              onChange={handleTitleChange}
            />
          </div>
          <div className="row categories-row">
            <label>Categorias</label>
            <CategoriesContainer>
              {categories.map((category, i) => {
                return (
                  <CategoryCheckbox
                    key={category._id}
                    id={category._id}
                    label={category.name}
                    cb={handleCategoryChange}
                  />
                );
              })}
            </CategoriesContainer>
          </div>
          <TextEditor onChange={handleContentChange} />
        </ContentContainer>

        <ButtonsContainer>
          <button className="cancel-btn">
            <Link to="/painel">Cancelar</Link>
          </button>
          <button className="save-post-btn" onClick={handleSavePost}>
            Criar
          </button>
        </ButtonsContainer>

        <ErrorsContainer>
          {errors?.map((e, key) => {
            return <ErrorContainer key={key} message={e} />;
          })}
        </ErrorsContainer>
        <MessagesContainer>{message}</MessagesContainer>
      </Main>
    </div>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  gap: 1rem;
`;

const ContentContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .row {
    width: 100%;
  }

  .categories-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input[type="text"] {
    height: 2.5rem;
    outline: none;
    width: 100%;
    padding: 0 1rem;
    font-size: 1.2rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  button {
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  .save-post-btn {
    background-color: var(--ui-dark);
    color: var(--text-light);

    &:hover {
      background-color: #555;
    }
  }

  .cancel-btn {
    background: transparent;
    opacity: 0.6;
    &:hover {
      opacity: 1;
      color: #f59999;
      border: 1px solid #f59999;
    }
  }
`;

const ErrorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .error {
    font-weight: bold;
    padding: 1rem;
    color: #252525;
    border: 1px solid #252525;
    border-left: 5px solid #ff0000;
  }
`;

const MessagesContainer = styled.div``;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: 2rem;
`;
