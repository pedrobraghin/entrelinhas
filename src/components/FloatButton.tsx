import styled from "styled-components";

interface FloatButtonProps {
  children: React.ReactElement;
}

export function FloatButton({ children }: FloatButtonProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`;
