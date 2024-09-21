import { useEffect, useContext, useState } from "react";
import { useQuery } from "react-query";
import { BlogContext } from "../contexts/BlogContext";
import { Post } from "../@types/Post";
import { PostCard } from "./Posts/PostCard";

export function RecentPosts() {
  const { recentPosts } = useContext(BlogContext);
  const { data } = useQuery<Post[] | null>(
    recentPosts.key,
    recentPosts.fetchRecentPosts
  );
  const [posts, setPosts] = useState<Post[] | null>();
  const [havePosts, setHavePosts] = useState(false);

  useEffect(() => {
    handlePostUpdate();
    setHavePosts(data ? data.length > 0 : false);
  }, [data]);

  function handlePostUpdate() {
    setPosts(data ?? null);
  }

  if (havePosts) {
    return (
      <div className="recent-posts">
        {posts?.map((post) => {
          return (
            <PostCard
              key={post._id}
              author={post.author}
              body={post.body}
              categories={post.categories}
              title={post.title}
              slug={post.slug}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Nenhum post encontrado</h1>
    </div>
  );
}
