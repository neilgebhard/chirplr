const mongoose = require("mongoose");

const replySchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const tweetSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    name: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: { type: String },
    replies: [replySchema],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
