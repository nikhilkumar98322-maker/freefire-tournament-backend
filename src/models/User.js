const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  ign: String,
  ffUid: String,
  level: Number,
  isBanned: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
