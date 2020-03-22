import { Schema, model, Types } from "mongoose";

// Create Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  createdAT: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: Types.ObjectId,
    ref: "user"
  }
});

const Post = model("post", PostSchema);

module.exports = Post;
