const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
  title: String,
  type: {
    type: String,
    enum: ["solo", "duo", "squad"],
    required: true
  },
  entryFee: Number,
  maxPlayers: Number,
  prizePool: Number,
  perKillPoint: Number,

  roomId: String,
  roomPassword: String,

  status: {
    type: String,
    enum: ["upcoming", "live", "completed"],
    default: "upcoming"
  },

  startTime: Date
}, { timestamps: true });

module.exports = mongoose.model("Tournament", tournamentSchema);
