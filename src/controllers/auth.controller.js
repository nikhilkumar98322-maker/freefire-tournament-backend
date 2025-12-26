const User = require("../models/User");
const Wallet = require("../models/Wallet");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { mobile } = req.body;

  let user = await User.findOne({ mobile });

  if (!user) {
    user = await User.create({ mobile, isVerified: true });
    await Wallet.create({ userId: user._id });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    success: true,
    token,
    user
  });
};
