const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// @route    post api/login
// @desc     Login a user
// @access   Public
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    const success = await user?.matchPassword(password);

    if (success) {
      const token = await user.generateToken();

      res.cookie("token", token, {
        httpOnly: true,
      });

      res.json(user);
    } else {
      return res.status(401).json({ message: "Authentication failed." });
    }
  })
);

// @route    post api/logout
// @desc     Log out a user
// @access   Private
router.post("/logout", (req, res) => {
  res
    .clearCookie("token")
    .json({ message: "User has successfully logged out." });
});

module.exports = router;
