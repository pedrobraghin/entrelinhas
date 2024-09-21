import { createContext } from "react";
import { useBlog } from "../hooks/useBlog";
import { Post } from "../@types/Post";
import { Category } from "../@types/Category";

interface BlogContextType {
  recentPosts: {
    key: string;
    fetchRecentPosts: () => Promise<Post[] | null>;
  };
  allPosts: {
    key: string;
    fetchAllPosts: () => Promise<Post[] | null>;
  };
  postsByCategory: {
    key: string;
    fetchPostByCategory: (category: string) => Promise<Post[] | null>;
  };
  postBySlug: {
    key: string;
    fetchPostBySlug: (category: string) => Promise<Post | null>;
  };
  createPost: (
    title: string,
    body: string,
    categories: string[],
    images?: File[]
  ) => Promise<Post | null>;
  fetchAllCategories: () => Promise<Category[]>;
  createCategory: (category: string) => Promise<Category>;
  deleteCategory(name: string): Promise<Category | null>;
}

const BlogContext = createContext<BlogContextType>({} as BlogContextType);

interface BlogProviderProps {
  children: React.ReactNode;
}

function BlogProvider({ children }: BlogProviderProps) {
  const blogState = useBlog();
  return (
    <BlogContext.Provider value={{ ...blogState }}>
      {children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProvider };
