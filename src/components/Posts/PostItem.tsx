import styled from "styled-components";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import { Post } from "../../@types/Post";

interface PostItemProps {
  post: Post;
  deleteCb: (post: Post) => void;
  editCb: (post: Post) => void;
}

export function PostItem({ post, deleteCb, editCb }: PostItemProps) {
  const postLink = `/${post.slug}`;
  function formatPostDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  return (
    <Container>
      <div className="content">
        <Link to={postLink} target="_blank" className="title">
          {post.title}
          <GoLinkExternal />
        </Link>
        <span className="date">
          Data de postagem: {formatPostDate(post.createdAt)}
        </span>
      </div>
      <div className="buttons">
        <button
          className="delete-btn"
          onClick={(e) => {
            deleteCb(post);
          }}
        >
          <AiFillDelete />
        </button>
        <button
          className="edit-btn"
          onClick={(e) => {
            editCb(post);
          }}
        >
          <AiFillEdit />
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 2rem;
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: 10fr 1fr;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
  border-radius: 0.2rem;

  .title {
    font-weight: bold;
    display: flex;
    gap: 1rem;
    justify-content: left;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: underline;
    }
  }

  .content {
    display: grid;
    gap: 0.5rem;
  }
  .buttons {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    gap: 1rem;

    button {
      cursor: pointer;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      display: flex;
      transition: all 150ms ease-in-out;
      &:hover {
        opacity: 0.2;
      }
    }
  }
`;
