const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deposit: { type: Number, default: 0 },
  winning: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Wallet", walletSchema);
