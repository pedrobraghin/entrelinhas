import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <div>
        <span>
          Desenvolvido por <strong>Pedro braghin</strong>
        </span>
        <span> &copy; 2023</span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: var(--ui-dark);
  min-height: 5rem;
  color: var(--text-light);
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
