import styled from "styled-components";

import { useContext, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { UserContext } from "../contexts/UserContext";
import { EditProfileMenu } from "../components/Profile/EditProfileMenu";

import { EditPostsMenu } from "../components/Posts/EditPostsMenu";
import { NewPost } from "../components/Posts/NewPost";
import { SideMenuWithContent } from "../components/SideMenuWithContent";
import { EditCategoriesMenu } from "../components/Categories/EditCategoriesMenu";
import { NewCategory } from "../components/Categories/NewCategory";

import { CgProfile } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";

export function Dashboard() {
  const { fetchUser, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    fetchUser();
  }, [isLoggedIn]);

  return (
    <div>
      <Header />
      <Main>
        <SideMenuWithContent
          elements={[
            {
              element: "Perfil",
              content: <EditProfileMenu />,
              name: (
                <div>
                  <CgProfile /> Perfil
                </div>
              ),
              isDropdown: true,
              dropItems: [
                {
                  element: <div>Editar Perfil</div>,
                  content: <EditProfileMenu />,
                },
              ],
            },
            {
              element: "Posts",
              content: <EditPostsMenu />,
              name: (
                <div>
                  <BsPencilSquare />
                  Posts
                </div>
              ),
              isDropdown: true,
              dropItems: [
                {
                  element: "Ver posts",
                  content: <EditPostsMenu />,
                },
                { element: <div>Criar post</div>, content: <NewPost /> },
              ],
            },
            {
              element: "Categorias",
              content: <EditCategoriesMenu />,
              name: (
                <div>
                  <AiOutlineTag />
                  Categorias
                </div>
              ),
              isDropdown: true,
              dropItems: [
                {
                  element: <div>Ver categorias</div>,
                  content: <EditCategoriesMenu />,
                },
                {
                  element: <div>Criar categoria</div>,
                  content: <NewCategory />,
                },
              ],
            },
          ]}
        />
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.main`
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;
