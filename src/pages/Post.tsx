import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Post as PostType } from "../@types/Post";
import { AuthorHeader } from "../components/AuthorHeader";
import { Loader } from "../components/Loader";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import styled from "styled-components";

function ResolveNull(node: any) {
  return node;
}

interface PostDataProps {
  data: PostType | null;
}

function PostData({ data }: PostDataProps) {
  if (!data) {
    return <PostNotFound />;
  }
  return (
    <div>
      <AuthorHeader {...data.author} />
      <section className="content">
        <h1>{data.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.body }}></p>
      </section>
    </div>
  );
}

function PostNotFound() {
  return (
    <div>
      <h1>Post não encontrado!</h1>
    </div>
  );
}

export function Post() {
  const { postBySlug } = useContext(BlogContext);

  const { slug } = useParams<string>();

  const { data, isLoading } = useQuery(postBySlug.key, async () => {
    return await postBySlug.fetchPostBySlug(slug!);
  });
  const postData: PostType | null = data ?? null;

  return (
    <div>
      <Header />
      <Main>{(isLoading && <Loader />) || <PostData data={postData} />}</Main>
      <Footer />
      {ResolveNull(undefined)}
    </div>
  );
}

const Main = styled.main`
  padding: 2rem 5rem;
`;
