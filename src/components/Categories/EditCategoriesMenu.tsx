import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { Category } from "../../@types/Category";
import { CategoryItem } from "./CategoryItem";

export function EditCategoriesMenu() {
  const { fetchAllCategories, deleteCategory } = useContext(BlogContext);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const categoriesList = await fetchAllCategories();
    setCategories(categoriesList);
  }

  async function handleDeleteCategory(category: Category) {
    await deleteCategory(category.name);
    await fetchCategories();
  }

  function editCategory(category: Category) {}

  return (
    <div>
      <Content>
        <h1>Categorias</h1>
        {categories?.map((category) => {
          return (
            <CategoryItem
              key={category._id}
              category={category}
              deleteCb={handleDeleteCategory}
              editCb={editCategory}
            />
          );
        })}
      </Content>
    </div>
  );
}

const Content = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
