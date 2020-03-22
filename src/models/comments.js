import { Schema, model, Types } from "mongoose";

// Create Schema

const CommentsSchema = new Schema({
  title: {
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

const Comments = model("comments", CommentsSchema);

module.exports = Comments;
