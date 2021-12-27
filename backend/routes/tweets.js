const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const protect = require("../middleware/protect");
const Tweet = require("../models/tweet");
const User = require("../models/user");

// @route    get /api/tweets
// @desc     Get all tweets
// @access   Public
router.get(
  "/tweets",
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.find();
    res.json(tweets);
  })
);

// @route    get /api/tweets/feed
// @desc     Get all tweets for followed by user
// @access   Private
router.get(
  "/tweets/feed",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    // add self tweets to feed
    user.following.push(user._id);
    const tweets = await Tweet.find({ user: { $in: user.following } });
    res.json(tweets);
  })
);

// @route    get /api/tweets/:tweetId
// @desc     Get a tweet
// @access   Public
router.get(
  "/tweets/:tweetId",
  asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.tweetId);

    if (tweet) {
      res.json(tweet);
    } else {
      res.status(404).json({ message: "Tweet not found!" });
    }
  })
);

// @route    get /api/users/:username/tweets
// @desc     Get tweets by username
// @access   Public
router.get(
  "/users/:username/tweets",
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.find({ username: req.params.username });

    if (tweets) {
      res.json(tweets);
    } else {
      res.status(404).json({ message: "Tweets not found!" });
    }
  })
);

// @route    post /api/tweets
// @desc     Create a tweets
// @access   Private
router.post(
  "/tweets",
  protect,
  asyncHandler(async (req, res) => {
    const { _id, username, name } = req.user;
    const { text } = req.body;

    const tweet = new Tweet({
      user: _id,
      username,
      name,
      text,
    });

    await tweet.save();
    res.json(tweet);
  })
);

// @route    delete /api/tweets
// @desc     Delete a tweet
// @access   Private
router.delete(
  "/tweets/:tweetId",
  protect,
  asyncHandler(async (req, res) => {
    const tweet = await Tweet.findById(req.params.tweetId);

    if (tweet) {
      await tweet.remove();
      res.json({ message: "Tweet removed" });
    } else {
      return res.status(404).json({ message: "Tweet doesn't exist." });
    }
  })
);

module.exports = router;
