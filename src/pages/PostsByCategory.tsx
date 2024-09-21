import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Post } from "../@types/Post";
import { PostCard } from "../components/Posts/PostCard";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

export function PostsByCategory() {
  const { postsByCategory } = useContext(BlogContext);

  const { category } = useParams<string>();

  const { data } = useQuery(postsByCategory.key, () => {
    return postsByCategory.fetchPostByCategory(category!);
  });

  const posts: Post[] = data ?? [];

  return (
    <div>
      <Header />
      <main>
        {posts?.map((p) => {
          return <PostCard {...p} key={p._id} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
