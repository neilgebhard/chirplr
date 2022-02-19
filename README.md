# A clone of Twitter

- [General info](#general-info)
- [Why I built the project this way](#technologies)
- [Technologies](#technologies)
- [Setup](#setup)

## Demo

The live demo is deployed on Heroku: https://neilstwitter.herokuapp.com/

Feel free to check out the app. Just like Twitter, you are forced to make an account before using the app. You can enter any email during the signup process. If you would prefer to not make an account, you can use the test account with email `test@test.com` and password `password123`.

## General info

This repository holds the source code for a Twitter clone. The features of the app include:

Features so far:

- **Authentication**: signup, login, logout, and persistence
- **Tweets**: Add a tweet to your account
- **Follows**: See tweets of followed users in your feed
- **Likes**: Like other users' tweets
- **Profile**: Update various aspects of your profile

## Why I built the project this way

- I decided to make a clone so that my primary focus would be on the development process. By copying an existing application, I'm able to avoid creating designs from scratch or doing product development.
- For state management, I realized that many modern React apps aren't using Redux anymore. Nowadays, there are many viable alternatives such as react-query, MobX, Zustand, and Recoil. Therefore, I used `useState` and `Context` because I wanted to establish and prove my foundation in React's core features and stay technology-agnostic. Not to mention, many of the concepts between state management systems share similarities.
- I used `TypeScript` because the industry is gravitating towards it and it touts many benefits. Small bugs become so much easier to catch, especially ones that are masterfully hidden through JavaScript's dynamic typing. Refactoring and reiterating code becomes a breeze with TypeScript's code completion and IntelliSense.
- Even though I'm mainly a **front-end developer**, my aim is to gain a well-rounded perspective on developing web applications. Hence, I made this app full-stack to provide myself with an optimal learning experience. For a front-end developer, there are many insights gained by developing a back-end such as learning about `HTTP`, `API design`, and `authentication`.
- Testing is important for ensuring that an application is working as intended for users. It helps detect and protect code from bugs as changes are made to an application. `React-testing-library` is the standard as a unit and integration testing framework for React apps, so I used the technology in this project. You can see some of the code I wrote using it [here](https://github.com/neilgebhard/twitter-clone/tree/master/frontend/src/__tests__).

## Technologies

Some frameworks and libraries this project is made with:

Frontend:

- TypeScript: 4.5.4
- React: 17.0.2
- Tailwind CSS
- react-router-dom: 5.3.0

Backend:

- MongoDB
- Express: 4.17.1
- mongoose: 6.0.11
- JSON web tokens

Testing:

- React-testing-library

Deployment:

- Heroku

## Setup

To run this project locally, install dependencies using npm install. You'll need to create a .env file at the root of the project and at the root of /frontend.

`/.env`

```
NODE_ENV=development
JWT_SECRET=<your secure JWT secret>
DB_URI=<MongoDB URI>
PORT=3001
```

`frontend/.env`

```
REACT_APP_apiURL=http://localhost:3001
```

Install dependencies using npm:

```
$ cd ./mern-twitter
$ npm install
$ npm run dev
```

## Deployment

To log in to Heroku in terminal:

```
heroku login
```

To test app before deploying to Heroku servers:

```
heroku local web
```

To deploy to Heroku:

```
heroku create
git push heroku master
heroku open
```
