const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    max_length: 25,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/],
    max_length: 50,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thoughts",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const User = model("user", userSchema);

module.exports = User;
