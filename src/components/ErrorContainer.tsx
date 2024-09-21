import styled from "styled-components";

interface ErrorContainerProps {
  message: string;
  key?: string | number;
}

export function ErrorContainer({ message, key }: ErrorContainerProps) {
  return <Error key={key}>{message}</Error>;
}

const Error = styled.div`
  font-weight: bold;
  padding: 1rem;
  color: #252525;
  border: 1px solid #252525;
  border-left: 5px solid #ff0000;
`;
