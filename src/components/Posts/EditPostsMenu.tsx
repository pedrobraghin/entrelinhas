import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { Post } from "../../@types/Post";
import { PostItem } from "./PostItem";
import { Link } from "react-router-dom";
import { ConfirmModal } from "../ConfirmModal";

export function EditPostsMenu() {
  const { allPosts } = useContext(BlogContext);
  const [posts, setPosts] = useState<Post[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>();

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleDeletePost(post: Post) {
    setPostToDelete(post);
    openModal();
  }

  function handleEditPost(post: Post) {}

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function handleModal(result: boolean) {
    closeModal();
    console.log(result);
    if (result) {
      deletePost();
    }
  }

  async function deletePost() {}

  async function fetchPosts() {
    const data = await allPosts.fetchAllPosts();
    if (data) {
      setPosts(data);
    }
  }

  return (
    <Container>
      <h1>Todos os posts</h1>
      <div className="posts">
        {posts?.map((post) => {
          return (
            <PostItem
              key={post._id}
              post={post}
              deleteCb={handleDeletePost}
              editCb={handleEditPost}
            />
          );
        })}
      </div>
      <ConfirmModal
        message="Tem certeza que deseja deleter o post? A ação não pode ser desfeita."
        cancelText="Cancelar"
        confirmText="Deletar post"
        isOpen={isModalOpen}
        cb={handleModal}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const CreatePostFloatButtonContainer = styled(Link)`
  background-color: var(--ui-dark);
  color: var(--text-light);
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 200ms ease;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  }
`;
