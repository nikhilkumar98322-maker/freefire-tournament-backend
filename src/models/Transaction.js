const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  amount: Number,
  type: {
    type: String,
    enum: ["deposit", "winning", "join"]
  },
  status: {
    type: String,
    enum: ["success", "failed"],
    default: "success"
  }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);
