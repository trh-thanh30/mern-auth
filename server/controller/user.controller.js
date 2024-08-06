const bcryptjs = require("bcryptjs");
const User = require("../models/user.model");
const test = (req, res) => {
  res.json({
    message: "Hello World!",
  });
};
const updateUser = async (req, res) => {
  console.log(req.user.id);
  console.log(req.params.id);
  if (req.user.id !== req.params.id) {
    return res
      .status(403)
      .json({ message: "You can only update your own profile" });
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    return res.status(200).json(rest);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const deleteUser = async (req, res) => {
  if (req.user.id !== req.params.id) {
    return res
      .status(403)
      .json({ message: "You can only delete your own profile" });
  }
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(403).json({ message: "Internal server error" });
  }
};
module.exports = { test, updateUser, deleteUser };
