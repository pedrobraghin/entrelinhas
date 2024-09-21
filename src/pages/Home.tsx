import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { RecentPosts } from "../components/RecentPosts";

export function Home() {
  return (
    <div>
      <Header />
      <Main>
        <RecentPosts />
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.main``;
