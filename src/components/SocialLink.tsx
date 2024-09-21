import styled from "styled-components";

interface SocialLinkProps {
  link: string | undefined;
  icon: React.ReactElement | string;
}

export function SocialLink({ link, icon }: SocialLinkProps) {
  return (
    <Container href={link} target="_blank">
      {icon}
    </Container>
  );
}

const Container = styled.a`
  text-transform: uppercase;
`;
