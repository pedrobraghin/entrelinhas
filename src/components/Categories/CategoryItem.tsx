import styled from "styled-components";
import { Category } from "../../@types/Category";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  category: Category;
  deleteCb: (...args: any[]) => void;
  editCb: (...args: any[]) => void;
}
export function CategoryItem({
  category,
  deleteCb,
  editCb,
}: CategoryItemProps) {
  const categoryUrl = `/categorias/${category.name}`;

  function handleDelete() {
    deleteCb(category);
  }

  function handleEdit() {
    editCb(category);
  }

  return (
    <Container>
      <CategoryName to={categoryUrl} target="_blank">
        <GoLinkExternal />
        {category.name}
      </CategoryName>
      <div className="buttons">
        <button className="delete-btn" onClick={handleDelete}>
          <AiFillDelete />
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          <AiFillEdit />
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    button {
      background: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;

const CategoryName = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
