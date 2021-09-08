export interface IPost {
  _id: string;
  userId: string;
  desc: string;
  img: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
  comment?: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  following: string[];
  isAdmin: boolean;
  desc: string;
  city: string;
  from: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
