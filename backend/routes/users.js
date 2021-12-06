const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// @route    get /api/users/:username
// @desc     Get user info
// @access   Public
router.get(
  "/users/:username",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.params.username });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  })
);

// @route    post /api/users
// @desc     Add a user
// @access   Public
router.post(
  "/users",
  asyncHandler(async (req, res) => {
    const { username, email, password, name } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists." });
    }

    let user = await User.create({ username, email, password, name });

    if (user) {
      const token = await user.generateToken();
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });

      res.status(201).json(user);
    } else {
      res
        .status(400)
        .json({ message: "There was a problem creating the account." });
    }
  })
);

// @route    put /api/users
// @desc     Update a user
// @access   Private
router.put(
  "/users",
  asyncHandler(async (req, res) => {
    const { name, bio, location, website } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { name, bio, location, website },
      { new: true }
    );

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  })
);

module.exports = router;
