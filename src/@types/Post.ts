import { Author } from "./Author";
import { Category } from "./Category";

export type Post = {
  _id: string;
  author: Author;
  body: string;
  title: string;
  categories: Category[];
  collaborators?: string[];
  slug: string;
  createdAt: string;
};
