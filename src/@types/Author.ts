import { Post } from "./Post";

export type Author = {
  _id?: string;
  name: {
    first: string;
    last: string;
  };
  username: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  photo?: string;
  posts: {
    results: number;
    data: Post[];
  };
};
