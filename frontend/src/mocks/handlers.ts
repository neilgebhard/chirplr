// src/mocks/handlers.js
import { rest } from "msw";

const feed = [
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
  {
    _id: "61aa01c21985ab70adee0300",
    username: "doug1245",
    name: "Doug Miller",
    user: "61a9e41bb0d8c923764b564b",
    text: "“Royal Gala apples are the best selling apples in the UK, with 4 times more sales than British Cox apples”",
    replies: [],
    createdAt: "2021-12-03T11:38:42.593Z",
    updatedAt: "2021-12-27T12:46:32.398Z",
    likes: [
      "61a9e41bb0d8c923764b564b",
      "61ab6bc121cfe97b983a7567",
      "61ac94978f3295684634c163",
      "61c99984952636a912fca730",
    ],
  },
  {
    _id: "61aa01f61985ab70adee0307",
    username: "doug1245",
    name: "Doug Miller",
    user: "61a9e41bb0d8c923764b564b",
    text: "“The world's oceans are absorbing the equivalent heat of 12 Hiroshima bombs per second”",
    replies: [],
    createdAt: "2021-12-03T11:39:34.914Z",
    updatedAt: "2021-12-27T12:46:31.012Z",
    likes: [
      "61a9e41bb0d8c923764b564b",
      "61ab6bc121cfe97b983a7567",
      "61ac94978f3295684634c163",
      "61c99984952636a912fca730",
    ],
  },
  {
    _id: "61aa03891985ab70adee030b",
    username: "doug1245",
    name: "Doug Miller",
    user: "61a9e41bb0d8c923764b564b",
    text: "“The human brain produces in 30 seconds as much data as the NASA Hubble Space telescope has produced in its lifetime”",
    replies: [],
    createdAt: "2021-12-03T11:46:17.644Z",
    updatedAt: "2022-01-05T03:17:07.747Z",
    likes: [
      "61a9e41bb0d8c923764b564b",
      "61ab6bc121cfe97b983a7567",
      "61c99984952636a912fca730",
      "61ac94978f3295684634c163",
    ],
  },
];

export const handlers = [
  rest.get("/api/tweets/feed", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(feed));
  }),
];
