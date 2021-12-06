const jwt = require("express-jwt");

const protect = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  issuer: "api.twitter",
  audience: "api.twitter",
  getToken: (req) => req.cookies.token,
});

module.exports = protect;
