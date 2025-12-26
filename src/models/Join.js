const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament"
  },
  slotNumber: Number
}, { timestamps: true });

module.exports = mongoose.model("Join", joinSchema);
