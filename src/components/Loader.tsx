import styled from "styled-components";

export function Loader() {
  return <Container></Container>;
}

const Container = styled.div`
  border: 3px solid #f4f4f4;
  border-top: 3px solid #000;
  animation: loading 500ms infinite linear;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
