// src/mocks/handlers.js
import { rest } from "msw";

const tweets = [
  {
    _id: "61a9e72bac108e5795e9ded7",
    username: "doug1245",
    name: "Doug Miller",
    user: "61a9e41bb0d8c923764b564b",
    text: "“It's estimated that 240,000 new homes will have to be built every year in the UK for the next 20 years to satisfy the need for housing”",
    replies: [],
    createdAt: "2021-12-03T09:45:15.378Z",
    updatedAt: "2021-12-04T12:43:19.058Z",
    likes: ["61a9e41bb0d8c923764b564b"],
  },
];

const user = {
  _id: "61ac94978f3295684634c163",
  username: "test123",
  email: "test@email.com",
  name: "test name",
  isAdmin: false,
  followers: ["61ac94978f3295684634c163"],
  following: ["61ac94978f3295684634c163"],
  likedTweets: [],
  bio: "test bio",
  location: "test location",
  website: "https://www.test.com",
};

export const handlers = [
  rest.get("/api/users/test", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),
  rest.get("/api/tweets/feed", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tweets));
  }),
  rest.get("/api/users/test/tweets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tweets));
  }),
  rest.get("/api/tweets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tweets));
  }),
];
