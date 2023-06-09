const { Schema, model } = require("mongoose");
const reactionsSchema = require("./reactions");

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    trim: true,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reactions: [reactionsSchema],
});

const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;
