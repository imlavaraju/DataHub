const mongoose = require("mongoose");

const userdataSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model("Data", userdataSchema);
const User = mongoose.model("User", userSchema);
module.exports = { Data, User };
