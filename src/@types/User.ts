export type User = {
  _id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  recoveryEmail: string;
  password: string;
  username: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  phoneNumber: string;
  photo?: string;
};
