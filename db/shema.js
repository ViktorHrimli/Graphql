const mongoose = require("mongoose");

const shema = mongoose.Schema({
  user: {
    type: String,
  },
  tweets: {
    type: String,
  },

  followers: {
    type: String,
  },

  avatar: {
    type: String,
  },
});

const User = mongoose.model("profile", shema);

module.exports = User;
