# Chirplr

This repository holds the source code for a Chirplr, a full-stack web application featuring messages, likes, follows, and authentication. The live demo is deployed on Heroku: https://chirplr.herokuapp.com/

**Test account**
username: `test@test.com`
password: `password123`.

## Features

- **Authentication**: signup, login, logout, and persistence
- **Tweets**: Add a tweet to your account
- **Follows**: See tweets of followed users in your feed
- **Likes**: Like other users' tweets
- **Profile**: Update various aspects of your profile

## Technologies

Frontend:

- React
- TypeScript
- Tailwind CSS
- react-router-dom

Backend:

- MongoDB
- Express
- mongoose
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
$ cd ./chirplr
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
