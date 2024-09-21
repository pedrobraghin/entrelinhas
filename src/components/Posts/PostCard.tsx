import styled from "styled-components";
import { Author } from "../../@types/Author";
import { Category as CategoryType } from "../../@types/Category";
import { Category } from "../Category";
import { Link } from "react-router-dom";

interface PostCardProps {
  author: Author;
  body: string;
  title: string;
  categories: CategoryType[];
  slug: string;
}

export function PostCard({ title, body, categories, slug }: PostCardProps) {
  return (
    <Container>
      <div className="post-categories">
        {categories.map((c) => {
          return <Category name={c.name} key={c._id} />;
        })}
      </div>
      <Content to={{ pathname: `/${slug}` }}>
        <h2 className="post-title">{title}</h2>
        <p
          className="post-preview"
          dangerouslySetInnerHTML={{ __html: body }}
        ></p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  &:hover {
    background-color: #f4f4f4;
  }

  .post-preview {
  }

  .post-categories {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const Content = styled(Link)``;
