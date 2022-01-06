export type Tweet = {
  _id: string;
  likes: string[];
  username: string;
  name: string;
  text: string;
  replies: object[];
  createdAt: string;
  updatedAt: string;
};

export type User = {
  _id: string;
  username: string;
  email: string;
  name: string;
  isAdmin: boolean;
  followers: string[];
  following: string[];
  likedTweets: string[];
  bio: string;
  location: string;
  website: string;
  createdAt: string;
  updatedAt: string;
};
