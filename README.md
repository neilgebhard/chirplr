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
