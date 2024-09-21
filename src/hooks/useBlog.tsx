import { api } from "../api/api";

async function fetchRecentPosts() {
  const data = await api.get("/blog/recent-posts");
  return data.data.data;
}

async function fetchPostBySlug(slug: string) {
  try {
    const data = await api.get(`/blog/posts/${slug}`);
    return data.data.data;
  } catch (err) {
    return null;
  }
}

async function fetchPostByCategory(category: string) {
  try {
    const data = await api.get(`/blog/category/${category}`);
    return data.data.data;
  } catch (err) {
    return null;
  }
}

async function fetchAllPosts() {
  try {
    const data = await api.get(`/blog/posts`);
    return data.data.data;
  } catch (err) {
    return null;
  }
}

async function createPost(
  title: string,
  body: string,
  categories: string[],
  images?: File[]
) {
  try {
    const data = await api.post(`/blog/create-post`, {
      title,
      body,
      categories,
      images,
    });
    return data.data.data;
  } catch (err) {
    return null;
  }
}

async function fetchAllCategories() {
  const categoriesObjects = await api.get("/blog/categories");
  return categoriesObjects.data.data;
}

async function createCategory(name: string) {
  try {
    const category = await api.post(`/blog/create-category`, { name });
    return category.data;
  } catch (err) {
    return null;
  }
}

async function deleteCategory(name: string) {
  try {
    const data = await api.delete(`/blog/category/${name}`);
    return data.data.data;
  } catch (err) {
    return null;
  }
}

export function useBlog() {
  return {
    recentPosts: {
      key: "_BLOG_RECENT_POSTS_",
      fetchRecentPosts,
    },
    allPosts: {
      key: "_ALL_POSTS_",
      fetchAllPosts,
    },
    postsByCategory: {
      key: "_LAST_VIEWED_POST",
      fetchPostByCategory,
    },
    postBySlug: {
      key: "_SINGLE_POST_",
      fetchPostBySlug,
    },
    createPost,
    fetchAllCategories,
    createCategory,
    deleteCategory,
  };
}
