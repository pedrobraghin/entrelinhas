import styled from "styled-components";
import { Link } from "react-router-dom";
import { Author } from "../@types/Author";
import { SocialLink } from "./SocialLink";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export function AuthorHeader({ name, photo, socialLinks, username }: Author) {
  const fullName = `${name.first} ${name.last}`;
  const authorProfile = `/users/${username}`;
  return (
    <Container to={authorProfile} target="_blank">
      <div className="profile-pic">
        <img src={photo} alt={`${name.first} ${name.last} photo`} />
      </div>
      <span>{fullName}</span>
      <div className="social-links">
        {socialLinks?.instagram && (
          <SocialLink
            link={socialLinks?.instagram}
            icon={<AiOutlineInstagram />}
          />
        )}
        {socialLinks?.linkedin && (
          <SocialLink link={socialLinks?.linkedin} icon={<AiFillLinkedin />} />
        )}
        {socialLinks?.twitter && (
          <SocialLink link={socialLinks?.twitter} icon={<AiOutlineTwitter />} />
        )}
      </div>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: max-content;
  gap: 0.5rem;
  .profile-pic img {
    border-radius: 50%;
    max-width: 4rem;
  }
  .social-links {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
  }
`;
