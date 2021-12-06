const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const protect = require("../middleware/protect");
const Tweet = require("../models/tweet");
const User = require("../models/user");

// @route    post /tweet/:id/like
// @desc     Like a tweet
// @access   Private
router.post(
  "/tweets/:id/like",
  protect,
  asyncHandler(async (req, res) => {
    const [tweet, user] = await Promise.all([
      Tweet.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { likes: req.user._id } },
        { new: true }
      ),
      User.findOneAndUpdate(
        { _id: req.user._id },
        { $addToSet: { likedTweets: req.params.id } },
        { new: true }
      ),
    ]);

    res.json({ tweet, user });
  })
);

// @route    post /users/:id/follow
// @desc     Unfollow a user by id
// @access   Private
router.post(
  "/tweets/:id/unlike",
  protect,
  asyncHandler(async (req, res) => {
    const [tweet, user] = await Promise.all([
      Tweet.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { likes: req.user._id } },
        { new: true }
      ),
      User.findOneAndUpdate(
        { _id: req.user._id },
        { $pull: { likedTweets: req.params.id } },
        { new: true }
      ),
    ]);

    res.json({ tweet, user });
  })
);

module.exports = router;
