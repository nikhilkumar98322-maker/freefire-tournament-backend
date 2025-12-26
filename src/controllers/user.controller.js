const User = require("../models/User");

exports.banUser = async (req, res) => {
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { isBanned: true });
  res.json({ success: true, message: "User banned" });
};

exports.unbanUser = async (req, res) => {
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { isBanned: false });
  res.json({ success: true, message: "User unbanned" });
};
