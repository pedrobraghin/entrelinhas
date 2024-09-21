import { useEffect } from "react";
import styled from "styled-components";

interface ContentOpenProps {
  element: React.ReactElement;
}

export function ContentOpen({ element }: ContentOpenProps) {
  useEffect(() => {}, [element]);
  return <Container>{element}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
