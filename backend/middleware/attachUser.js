const jwtDecode = require("jwt-decode");

const attachUser = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    req.user = jwtDecode(token);
  }

  next();
};

module.exports = attachUser;
