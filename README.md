# A clone of Twitter

**_Currently a work in progress_**

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This repository holds the source code for a Twitter clone employing the MERN stack -- MongoDB, Express, React, and Node.

Features so far:

- Authentication: signup, login, logout, and persistence
- Tweets
- Follows: See tweets of followed users in your feed
- Likes: ❤️ other people's tweets
- Profile: Update various aspects of your profile

And that's it at the moment! Twitter is a massive website. It takes time to clone everything.

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

## Demo

The live demo is deployed on Heroku: https://neilstwitter.herokuapp.com/

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
