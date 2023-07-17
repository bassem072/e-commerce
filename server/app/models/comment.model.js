import mongoose from "mongoose";

const schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
    default: "",
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislike: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  replyLike: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  replyDislike: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Comment = mongoose.model("Comment", schema);

export default Comment;
