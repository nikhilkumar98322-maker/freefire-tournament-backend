const mongoose = require("mongoose");

const matchResultSchema = new mongoose.Schema({
  tournamentId: { type: mongoose.Schema.Types.ObjectId, ref: "Tournament" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  kills: Number,
  rank: Number,
  killPoints: Number,
  winningAmount: Number
}, { timestamps: true });

module.exports = mongoose.model("MatchResult", matchResultSchema);
