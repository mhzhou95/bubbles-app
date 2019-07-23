const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bubbleSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    message: {
      type: String,
      required: true,
      minlength: 1
    },
    username: {
      type: String
    },
    upvotes: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true
  }
);

const Bubble = mongoose.model('bubble', bubbleSchema);
module.exports = Bubble;