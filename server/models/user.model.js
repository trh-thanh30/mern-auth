const { match } = require("assert");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "Username already exists"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: { type: String, required: true },
    profilePicture: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    }
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
