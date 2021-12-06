const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const protect = require("../middleware/protect");
const User = require("../models/user");

// @route    post /users/:id/follow
// @desc     Follow a user by id
// @access   Private
router.post(
  "/users/:id/follow",
  protect,
  asyncHandler(async (req, res) => {
    const [user, userToFollow] = await Promise.all([
      User.findOneAndUpdate(
        { _id: req.user._id },
        { $addToSet: { following: req.params.id } },
        { new: true }
      ),
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { followers: req.user._id } },
        { new: true }
      ),
    ]);

    res.json({ user, userToFollow });
  })
);

// @route    post /users/:id/follow
// @desc     Unfollow a user by id
// @access   Private
router.post(
  "/users/:id/unfollow",
  protect,
  asyncHandler(async (req, res) => {
    const [user, userToUnfollow] = await Promise.all([
      User.findOneAndUpdate(
        { _id: req.user._id },
        { $pull: { following: req.params.id } },
        { new: true }
      ),
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { followers: req.user._id } },
        { new: true }
      ),
    ]);

    res.json({ user, userToUnfollow });
  })
);

module.exports = router;
