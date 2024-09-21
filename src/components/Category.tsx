import styled from "styled-components";
import { Link } from "react-router-dom";

interface CategoryProps {
  name: string;
}

export function Category({ name }: CategoryProps) {
  return (
    <Container to={{ pathname: `/categorias/${name}` }}>
      <span>{name}</span>
    </Container>
  );
}

const Container = styled(Link)`
  background-color: var(--ui-dark);
  color: var(--text-light);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  max-width: min-content;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7rem;
  &:hover {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
