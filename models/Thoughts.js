const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
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
      createdAt:
        {
          type: Date,
          default: Date.now,
        },
      reactions: [

      ],
    }
  );
  
  const Thoughts = model('thougts', thoughtsSchema);
  
  module.exports = Thoughts;